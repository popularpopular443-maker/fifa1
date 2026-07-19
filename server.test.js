const request = require('supertest');
const app = require('./server');

describe('ArenaAssist Express Server', () => {
  it('should serve the index.html on root /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.headers['content-type']).toMatch(/text\/html/);
    expect(res.text).toContain('ArenaAssist & CrowdOps Command');
  });

  it('should apply security headers (helmet)', async () => {
    const res = await request(app).get('/');
    expect(res.headers['x-dns-prefetch-control']).toBeDefined();
    expect(res.headers['x-frame-options']).toBeDefined();
  });
});
