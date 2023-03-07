const maths = require('./math');

test('divides 1 / 2 to equal .5', () => {
  expect(maths.divide(1, 2)).toBe(.5);
});