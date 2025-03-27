import { multiply } from '../../services/service3.js';

test('multiply function', () => {
  expect(multiply(2, 3)).toBe(6);
});
