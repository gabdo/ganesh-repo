const ProductModel = require('../models/product');
const utils = require('../utils/utils');
const connectToDatabase = require('../db');

class Product {
    async getProductById(productId) {
        try {
            await connectToDatabase(); // Pick an existing or new db connection
            const productItem = await ProductModel.findOne({ _id: productId });
            return utils.buildResponse(utils.responseCode.ok, productItem);
        } catch (err) {
            return utils.buildResponse(utils.responseCode['server-error'], err, true);
        }
    }

    async getAllProducts() {
        try {
            await connectToDatabase(); // Pick an existing or new db connection
            const productItem = await ProductModel.find();
            return utils.buildResponse(utils.responseCode.ok, productItem);
        } catch (err) {
            return utils.buildResponse(utils.responseCode['server-error'], err, true);
        }
    }

    async removeProductById(productId) {
        try {
            await connectToDatabase(); // Pick an existing or new db connection
            const productItem = await ProductModel.findOneAndDelete({ _id: productId });
            return utils.buildResponse(utils.responseCode.ok, `Successfully deleted document with id: ${productItem._id}`);
        } catch (err) {
            return utils.buildResponse(utils.responseCode['server-error'], err, true);
        }
    }

    async createProduct(productDetails) {
        try {
            await connectToDatabase(); // Pick an existing or new db connection
            const productItem = await ProductModel.create(productDetails);
            return utils.buildResponse(utils.responseCode.ok, `Product successfully created with id: ${productItem.id}`);
        } catch (err) {
            return utils.buildResponse(utils.responseCode['server-error'], err, true);
        }
    }

    async updateProduct(productId, productDetails) {
        try {
            await connectToDatabase(); // Pick an existing or new db connection
            await ProductModel.update({ _id: productId }, productDetails, { upsert: true });
            return utils.buildResponse(utils.responseCode.ok, `Product successfully updated with id: ${productId}`);
        } catch (err) {
            return utils.buildResponse(utils.responseCode['server-error'], err, true);
        }
    }
}

module.exports = new Product();