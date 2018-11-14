const product = require('../services/product');
const utils = require('../utils/utils');

async function createProduct(context, req) {
    try {
        if (typeof req.body === 'object' && req.body.product_name) {
            // Create new document or update existing.
            context.res = await product.createProduct(req.body);
        } else {
            context.res = utils.buildResponse(utils.responseCode['bad-request'], 'Invalid method or paramters.', true);
        }
    } catch (error) {
        context.res = utils.buildResponse(utils.responseCode['bad-request'], 'Invalid method or paramters.', true);
    }
}

module.exports = createProduct;