const maths = require('./math');

test('multiplies 1 x 2 to equal 2', () => {
  expect(maths.multiply(1, 2)).toBe(2);
});