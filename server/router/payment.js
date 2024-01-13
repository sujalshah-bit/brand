const express = require('express');
const router = express.Router();
const Order = require('../models/orderSchema');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { asyncHandler } = require('../utils/asyncHandler');
const { ApiResponse } = require('../utils/ApiResponse');
const { verifyJWT } = require('../middleware/verifyJWT');
const User = require('../models/userSchema');

router.post(
  '/create-checkout-session',
  verifyJWT,
  asyncHandler(async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: req.body.items.map((item) => ({
        price_data: {
          currency: 'inr',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    const { items } = req.body;
    const _id = req.user._id;

    const user = User.findById({ _id });
    // Calculate the total amount from cart items
    const totalAmount = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    // Create the order in your database
    const order = new Order({
      user: _id,
      products: items.map((item) => ({
        product: item.productId,
        quantity: item.quantity,
      })),
      totalAmount,
    });

    await order.save();

    user.orders.push(order._id);
    await user.save();

    res
      .status(201)
      .json(
        new ApiResponse(
          201,
          { url: session.url, order: order },
          'Order Placed successfully'
        )
      );
  })
);

module.exports = router;
