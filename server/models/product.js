const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
    minlength: 1,
  },
  purchasePrice: {
    type: Number,
  },
  purchaseDate: {
    type: Date,
  },
  salePrice: {
    type: Number,
  },
  saleDate: {
    type: Date,
  },
  profit: {
    type: Number,
  },
  profitPerMonth: {
    type: Number,
  },
});

const Product = model("Product", productSchema);

module.exports = Product;
