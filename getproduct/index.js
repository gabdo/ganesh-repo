const product = require('../services/product');
const utils = require('../utils/utils');

async function getProduct(context, req) {
    try {
        if (req.params.id) {
            // Get a doucment by given id
            context.res = await product.getProductById(req.params.id);
        }
        else {
            // Get a doucment by given id
            context.res = await product.getAllProducts();
        }
    } catch (error) {
        context.res = utils.buildResponse(utils.responseCode['bad-request'], 'Invalid method or paramters.', true);
    }
}

module.exports = getProduct;