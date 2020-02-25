const request = require('supertest');
const server = require('../api/server.js');
const authenticate = require('../auth/authenticate-middleware.js');
jest.mock('../auth/authenticate-middleware.js');

beforeEach(() => authenticate.mockClear());

describe('jokes', () => {
  it('get /', async () => {
    authenticate.mockImplementationOnce((req, res, next) => {
      console.log("I ran this test");
      req.user = { id: 1 };
      next();
    });
    const res = await request(server)
          .get('/api/jokes');
    expect(res.status).toBe(200);
    expect(authenticate).toBeCalled();
  });
});

