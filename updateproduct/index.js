const product = require('../services/product');
const utils = require('../utils/utils');

async function updateProduct(context, req) {
    try {
        // Create new document or update existing.
        if (typeof req.body === 'object' && req.params.id) {
            context.res = await product.updateProduct(req.params.id, req.body);
        }
        else {
            context.res = utils.buildResponse(utils.responseCode['bad-request'], 'Invalid method or paramters.', true);
        }
    } catch (error) {
        context.res = utils.buildResponse(utils.responseCode['bad-request'], 'Invalid method or paramters.', true);
    }
}

module.exports = updateProduct;