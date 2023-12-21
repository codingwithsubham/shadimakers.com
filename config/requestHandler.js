const axios = require('axios');
const crypto = require('crypto');
const https = require('https');

const requestConnector = (endpoint, method, body, headers) => {
    const axiosInstance = axios.create({
        httpsAgent: new https.Agent({
            rejectUnauthorized: false,
            secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
          }),
    });
    axiosInstance.defaults.headers = headers;
    return axiosInstance({
        method: method,
        url: endpoint,
        data: body ? body : null,
      });
}

module.exports = { requestConnector };