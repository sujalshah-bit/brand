const express = require('express');
const router = express.Router();
const { verifyJWT } = require('../middleware/verifyJWT');
const {
  addProduct,
  getProducts,
  getProduct,
  removeProduct,
  updateProduct,
} = require('../controller/admin.controller.js');

// Define your route for creating a product
router.post('/add-product', verifyJWT, addProduct);
router.get('/get-products', verifyJWT, getProducts);
router.get('/get-product/:productId', verifyJWT, getProduct);
router.put('/update-product/:productId', verifyJWT, updateProduct);
router.delete('/remove-product/:productId', verifyJWT, removeProduct);

module.exports = router;
