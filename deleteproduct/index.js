const product = require('../services/product');
const utils = require('../utils/utils');

async function deleteProduct(context, req) {
    try {
        if (req.params.id) {
            // Remove doucument by name if existing
            context.res = await product.removeProductById(req.params.id);
        }
        else {
            context.res = utils.buildResponse(utils.responseCode['bad-request'], 'Invalid method or paramters.', true);
        }
    } catch (error) {
        context.res = utils.buildResponse(utils.responseCode['bad-request'], 'Invalid method or paramters.', true);
    }
}

module.exports = deleteProduct;