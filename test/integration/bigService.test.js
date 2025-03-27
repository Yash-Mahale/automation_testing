import request from 'supertest';
import app from '../../big-service/index.js';

test('GET /greet/Alice', async () => {
  const res = await request(app).get('/greet/Alice');
  expect(res.status).toBe(200);
  expect(res.body.message).toBe('Hello, Alice!');
});

test('GET /add/2/3', async () => {
  const res = await request(app).get('/add/2/3');
  expect(res.status).toBe(200);
  expect(res.body.result).toBe(5);
});

test('GET /multiply/2/3', async () => {
  const res = await request(app).get('/multiply/2/3');
  expect(res.status).toBe(200);
  expect(res.body.result).toBe(6);
});
