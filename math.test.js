const maths = require('./math');

test('adds 1 + 2 to equal 3', () => {
  expect(maths.add(1, 2)).toBe(3);
});

test('subtracts 1 - 2 to equal -1', () => {
  expect(maths.subtract(1, 2)).toBe(-1);
});

test('multiplies 1 x 2 to equal 2', () => {
  expect(maths.multiply(1, 2)).toBe(2);
});

test('divides 1 / 2 to equal .5', () => {
  expect(maths.divide(1, 2)).toBe(.5);
});