const request = require('supertest');
const server = require('../api/server.js');
const prepTestDB = require('../helpers/prepTestDB.js');

beforeEach(prepTestDB);

describe('users', () => {
  it('should return 201', async () => {
    const res = await request(server)
          .post('/api/auth/register')
          .send({ username: "henry", password: "henrypass" });
    expect(res.status).toBe(201);
  });

  it("should return json", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "henry", password: "henrypass" });
    expect(res.type).toBe("application/json");
  });


  it('should return 200', async () => {
    const res = await request(server)
      .post('/api/auth/login')
      .send({ username: "golum", password: "myprecious" });
    expect(res.status).toBe(200);
  });

  it("should return json", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ username: "golum", password: "myprecious" });
    expect(res.type).toBe("application/json");
  });
});
