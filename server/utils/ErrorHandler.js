// const { ApiError } = require('./ApiError');

// const ErrorHandler = (err, _, res) => {
//   // Log the error (you can customize the logging based on your needs)
//   console.error("s",err);
//   console.log('Received error:', err);
//   // Handle specific types of errors
//   if (err instanceof ApiError) {
//     console.log("hum first")
//     return res.status(err.statusCode).json({
//       error: {
//         message: err.message,
//         errors: err.errors,
//       },
//     });
//   }

//   // Handle other unexpected errors
//   return res.status(500).json({
//     error: {
//       message: 'Internal Server Error',
//     },
//   });
// };

// module.exports = { ErrorHandler };

// ErrorHandler.js
const ErrorHandler = (err, req, res, next) => {
  console.log(`${err}`);
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || 'Something went wrong';
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === 'development' ? err.stack : {},
  });
};

module.exports = { ErrorHandler };
