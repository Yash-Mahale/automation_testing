import { add } from '../../services/service2.js';

test('add function', () => {
  expect(add(2, 3)).toBe(5);
});
