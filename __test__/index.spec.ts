import request from 'supertest';

import app from '../src/app';

describe('Testing sample path', () => {
  test('should return a string', (done) => {
    return request(app).get('/').then(response => {
        expect(response.statusCode).toBe(200);
        done();
    });
  });
});