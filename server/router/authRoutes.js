const express = require('express');
const {
  signup,
  login,
  verifyToken,
  upgradeToAdmin,
  logout,
} = require('../controller/authRoutes.controller');
const { verifyJWT } = require('../middleware/verifyJWT');
const router = express.Router();

// Signup API
router.post('/signup', signup);

// Login API
router.post('/login', login);

// Assuming you have a router setup
router.get('/verify/:token', verifyToken);
router.post('/logout', verifyJWT, logout);

// Example endpoint for upgrade request
router.post('/user/upgrade-to-admin', verifyJWT, upgradeToAdmin);

module.exports = router;
