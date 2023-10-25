const { Product } = require("../models/product");

const resolvers = {
  Query: {
    products: async () => {
      return Product.find();
    },
  },
  Mutation: {
    addProduct: async (
      parent,
      { productName, purchasePrice, purchaseDate, salePrice, saleDate }
    ) => {
      const product = await Product.create({
        productName,
        purchasePrice,
        purchaseDate,
        salePrice,
        saleDate,
      });

      return product;
    },
    removeProduct: async (parent, { _id }) => {
      const product = await Product.findOne({ _id });

      if (!product) {
        throw new Error(`No product with ID ${_id} found.`);
      } else {
        await Product.deleteOne({ _id });
        console.log(`Product ${_id} has been deleted`);
        return product;
      }
    },
    editProduct: async (
      parent,
      { _id, productName, purchasePrice, purchaseDate, salePrice, saleDate }
    ) => {
      const product = await Product.findOne({ _id });

      if (!product) {
        throw new Error(`Product with ID '${_id}' not found.`);
      }

      // Update the sub's properties
      if (productName) {
        product.productName = productName;
      }

      if (purchasePrice) {
        product.purchasePrice = purchasePrice;
      }

      if (purchaseDate) {
        product.purchaseDate = purchaseDate;
      }

      if (salePrice) {
        product.salePrice = salePrice;
      }

      if (saleDate) {
        product.saleDate = saleDate;
      }

      const updatedProduct = await product.save();

      return updatedProduct;
    },
  },
};

module.exports = resolvers;
