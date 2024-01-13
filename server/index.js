require('dotenv').config({ path: './.env' });
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const { ErrorHandler } = require('./utils/ErrorHandler');
const { ApiError } = require('./utils/ApiError');

const PORT = process.env.PORT || 5000;

//middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(cookieParser());

//DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

//a route for the homepage
app.get('/', (req, res) => {
  res.send('API');
});

app.use('/api/v1/auth', require('./router/authRoutes'));

//protected routes:
app.use('/api/v1/', require('./router/payment'));
app.use('/api/v1/', require('./router/admin'));

//if URL Does not match:
app.use((_, res, next) => {
  const err = new ApiError(404, 'Requested URL Does Not Exist.');
  next(err);
});

app.use(ErrorHandler);

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
