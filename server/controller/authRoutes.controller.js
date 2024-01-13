const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');
const { asyncHandler } = require('../utils/asyncHandler');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const User = require('../models/userSchema');

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      'Something went wrong while generating referesh and access token'
    );
  }
};

const signup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validate input data
  if (!name || !email || !password) {
    throw new ApiError(400, 'Provide Name, Email, and Password');
  }

  // Check If User Already Exists or Not
  if (await User.findOne({ email })) {
    throw new ApiError(409, 'User Already Exist');
  }

  // Create a new user
  const newUser = new User({
    name,
    email,
    password,
  });

  // Generate a verification token
  const verificationToken = crypto.randomBytes(32).toString('hex');

  // Save the verification token in the user's document
  newUser.verificationToken = verificationToken;

  await newUser.save();

  // Send a verification email
  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: process.env.GMAIL,
  //     pass: process.env.GMAIL_PASSWORD,
  //   },
  // });

  // const emailContent = {
  //   from: process.env.GMAIL,
  //   to: email,
  //   subject: "Email Verification",
  //   html: `<p>Please click <a href="http://localhost:5000/auth/verify/${verificationToken}">here</a> to verify your email.</p>`,
  // };

  // transporter
  //   .sendMail(emailContent)
  //   .then(() => {
  //     return res
  //       .status(201)
  //       .json({
  //         message:
  //           "A verification email has been sent. Please check your inbox.",
  //       });
  //   })
  //   .catch((error) => {
  //     console.error("Error sending email:", error);
  //     return res.status(500).json({ error: "Signup failed" });
  //   });

  res
    .status(201)
    .json(new ApiResponse(201, { message: 'Sign Up Successfully' }));
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Checks if Email and password is present or not
  if (!email || !password) {
    throw new ApiError(401, 'Provide Email and Password');
  }

  // Find the user by email
  const user = await User.findOne({ email });

  // Check if user exists and password matches
  if (!user) {
    throw new ApiError(404, 'User does not exist');
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, 'Invalid user credentials');
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );
  const loggedInUser = await User.findById(user._id).select(
    '-password -refreshToken'
  );
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
        },
        'User logged In Successfully'
      )
    );
});

const logout = asyncHandler(async (req, res) => {
  //take userId
  //validate userId
  //delete the cookies

  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie('accessToken', options)
    .clearCookie('refreshToken', options)
    .json(new ApiResponse(200, {}, 'User logged Out'));
});

const verifyToken = asyncHandler(async (req, res) => {
  const { token } = req.params;

  // Find the user by verification token
  const user = await User.findOne({ verificationToken: token });
  if (!user) {
    throw new ApiError(404, 'Invalid or expired token.');
  }

  // Update user's verification status
  user.isEmailVerified = true;

  await user.save();
  res
    .status(200)
    .json(new ApiResponse(200, { message: 'Email verified successfully.' }));
});

const upgradeToAdmin = asyncHandler(async (req, res) => {
  // Validate and process the upgrade request
  const { shopName, businessAddress, avatar } = req.body;
  const { _id } = req.user;
  const requestingUser = await User.findOne({ _id: _id });

  if (!requestingUser || requestingUser.role !== 'user') {
    throw new ApiError(403, 'Unauthorized');
  }

  if (!shopName || !businessAddress || !avatar) {
    throw new ApiError(400, 'Provide All the Details');
  }

  // Approval Process:
  // Update the user's role and other fields
  await User.updateOne(
    { _id: _id },
    {
      $set: {
        role: 'admin',
        shopName: shopName || null,
        businessAddress: businessAddress || null,
        avatar: avatar || null,
      },
    }
  );

  res
    .status(200)
    .json(new ApiResponse(200, { message: 'User upgraded to admin.' }));
});

module.exports = { signup, login, verifyToken, upgradeToAdmin, logout };
