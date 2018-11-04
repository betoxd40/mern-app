const expect = require('chai').expect;
const http_mocks = require('node-mocks-http');
const orderController = require('./index');

const buildResponse = () => http_mocks.createResponse({eventEmitter: require('events').EventEmitter});

describe("Orders Controller", () => {
    it('GET Orders should return true', async () => {
        const response = buildResponse();
        const request = http_mocks.createRequest({
            method: 'GET',
            url: '/api/',
        });
        response.on('end', () => {
            expect(response._isJSON()).to.be.true;
            expect(JSON.parse(response._getData()).success).to.be.true;
        });
        await orderController.index(request, response);
    });
});