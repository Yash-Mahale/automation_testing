import { greet } from '../../services/service1.js';

test('greet function', () => {
  expect(greet('Alice')).toBe('Hello, Alice!');
});
