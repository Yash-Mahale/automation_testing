import express from 'express';
import { greet } from '../services/service1.js';
import { add } from '../services/service2.js';
import { multiply } from '../services/service3.js';

const app = express();

app.get('/greet/:name', (req, res) => {
  res.json({ message: greet(req.params.name) });
});

app.get('/add/:a/:b', (req, res) => {
  const result = add(Number(req.params.a), Number(req.params.b));
  res.json({ result });
});

app.get('/multiply/:a/:b', (req, res) => {
  const result = multiply(Number(req.params.a), Number(req.params.b));
  res.json({ result });
});

const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`Big service running on http://localhost:${PORT}`);
});

export { app, server };  // ✅ Correct way to export