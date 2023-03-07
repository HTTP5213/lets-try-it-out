const maths = require('./math');

test('subtracts 1 - 2 to equal -1', () => {
  expect(maths.subtract(1, 2)).toBe(-1);
});