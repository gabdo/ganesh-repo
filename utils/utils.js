const responseCode = {
    'ok': 200,
    'bad-request': 400,
    'server-error': 500
};

const buildResponse = function (statusCode, data, error = false) {
    if (error === true) {
        const responseObject = {
            status: statusCode,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                error: true,
                data: data
            }
        };
        return responseObject;
    } else {
        const responseObject = {
            status: statusCode,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                data: data
            }
        };
        return responseObject;
    }
};

module.exports = {
    buildResponse,
    responseCode
};