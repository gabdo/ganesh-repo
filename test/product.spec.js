/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Product = require('../services/product');
const ProductDataset = require('./fixtures/product');


const chai = require('chai');
const expect = chai.expect;

describe('Products', () => {
    it('Creates a new product', (done) => {
        Product.createProduct(ProductDataset.product)
            .then((data) => {
                expect(data.status).to.equal(200);
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

    it('updates an existing product', (done) => {
        Product.updateProduct(ProductDataset.updatedproduct._id, ProductDataset.updatedproduct)
            .then((data) => {
                expect(data.status).to.equal(200);
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

    it('get product by product id', (done) => {
        Product.getProductById(ProductDataset.product._id)
            .then((data) => {
                expect(data.status).to.equal(200);
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

    it('remove product by product id', (done) => {
        Product.removeProductById(ProductDataset.product._id)
            .then((data) => {
                expect(data.status).to.equal(200);
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

    after('Close connection', (done) => {
        mongoose.disconnect()
            .then(() => {
                done();
            })
            .catch((err) => {
                done(err);
            });
    });
});