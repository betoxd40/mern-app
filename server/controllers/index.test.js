const request = require('supertest');
const app = require('../index');

const mockData = {
    personalInfo: {
        name: 'test',
        lastName: 'test',
        number: '1231231231'
    },
    meals: [
        {
            name: 'test',
            cost: 1231313
        }
    ],
    totalCost: 1231313,
    email: 'test',
    address: 'test',
    location: {
        lat: '-34.5995939',
        lng: '-58.3805763'
    }
};

const invalidData = {
    personalInfo: {
        name: 'test',
        lastName: 'test',
        number: '1231231231'
    },
    totalCost: 1231313,
    email: 'test',
    address: 'test',
    location: {
        lat: '-34.5995939',
        lng: '-58.3805763'
    }
};

describe('GET /orders', function() {
    it('respond with json', function(done) {
        request(app)
            .get('/api/orders')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('responds with json', function(done) {
        request(app)
            .post('/api/orders')
            .send(mockData)
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });
});

describe('POST /orders', function() {
    it('responds with json', function(done) {
        request(app)
            .post('/api/orders')
            .send(mockData)
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });
    it('responds with status 422', function(done) {
        request(app)
            .post('/api/orders')
            .send(invalidData)
            .set('Accept', 'application/json')
            .expect(422)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });
});