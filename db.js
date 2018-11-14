const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
let isConnected;

// eslint-disable-next-line no-undef
module.exports = connectToDatabase = () => {
    // Check if connection is alive
    if (isConnected) {
        // console.log("=> using existing database connection");
        // skip creating a new connection
        return Promise.resolve();
    }

    // console.log("=> using new database connection");
    return mongoose.connect(process.env.MongoConnectionString)
        .then(db => {
            // Flag alive collection
            isConnected = db.connections[0].readyState;
        });
};