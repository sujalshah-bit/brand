const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  size: Number,

  color: String,

  features: [String],

  warranty: Number,

  soldOut: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  imageUrls: [
    {
      type: String,
      required: true,
    },
  ],
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  ratings: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      value: {
        type: Number,
        min: 1,
        max: 5,
      },
    },
  ],
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      text: String,
      rating: {
        type: Number,
        min: 1,
        max: 5,
      },
    },
  ],

  tags: [String], // Array of tags related to the product

  stock: {
    type: Number,
    required: true,
  },

  productInfo: {
    type: Map,
    of: String,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
