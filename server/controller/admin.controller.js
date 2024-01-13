const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');
const { asyncHandler } = require('../utils/asyncHandler');
const User = require('../models/userSchema');
const Product = require('../models/productSchema');

const addProduct = asyncHandler(async (req, res) => {
  // Check if the user is an admin
  const adminUser = await User.findOne({ _id: req.user._id, role: 'admin' });

  if (!adminUser) {
    throw new ApiError(403, {
      message: 'You are not authorized to create a product.',
    });
  }

  // Extract the data from the request body
  const data = req.body.data;

  // Add the admin user's ID as the seller
  data.seller = req.user._id;

  // Create the product
  const newProduct = new Product(data);
  const savedProduct = await newProduct.save();

  // Add the product to the user's products array
  adminUser.products.push(savedProduct._id);
  await adminUser.save();

  res.status(201).json(new ApiResponse(201, savedProduct, 'Product Added'));
});

const getProducts = asyncHandler(async (req, res) => {
  // Fetch the specific product of an admin
  const _id = req.user._id;

  // Find the admin user by _id and role
  const admin = await User.findOne({ _id, role: 'admin' });

  if (!admin) {
    throw new ApiError(404, 'Admin not found');
  }

  // Populate the 'products' field of the admin user
  await admin.populate('products');
  const getAllProducts = admin.products;

  res
    .status(200)
    .json(
      new ApiResponse(200, getAllProducts, 'All products successfully fetched')
    );
});
const getProduct = asyncHandler(async (req, res) => {
  // Fetch all the products of an admin who has ever created products
  const _id = req.params.productId;

  // Find the admin user by _id and role
  const product = await Product.findOne({ _id });

  if (!product) {
    throw new ApiError(
      404,
      'product not found, either deleted or invalid id is provided'
    );
  }

  res
    .status(200)
    .json(new ApiResponse(200, product, 'product fetched successfully'));
});
const removeProduct = asyncHandler(async (req, res) => {
  // Fetch all the products of an admin who has ever created products
  const _id = req.params.productId;

  // Find and delete product from Product collection
  const result = await Product.deleteOne({ _id: _id });

  if (result.deletedCount === 0) {
    throw new ApiError(404, 'product not found');
  }

  // Find and remove product id from products array in user collection
  await User.updateMany({ products: _id }, { $pull: { products: _id } });

  res
    .status(200)
    .json(new ApiResponse(200, null, 'product deleted successfully'));
});
const updateProduct = asyncHandler(async (req, res) => {
  // Check if the user is an admin
  const adminUser = await User.findOne({ _id: req.user._id, role: 'admin' });

  if (!adminUser) {
    throw new ApiError(403, {
      message: 'You are not authorized to update a product.',
    });
  }

  // Extract the data from the request body
  const { data } = req.body;

  // Get the product ID from the request parameters
  const { productId } = req.params;

  // Update the product with the provided data
  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    { $set: data },
    { new: true, runValidators: true }
  );

  if (!updatedProduct) {
    throw new ApiError(404, { message: 'Product not found.' });
  }

  res
    .status(200)
    .json(
      new ApiResponse(200, updatedProduct, 'Product updated successfully.')
    );
});

module.exports = {
  addProduct,
  getProducts,
  getProduct,
  removeProduct,
  updateProduct,
};
