const maths = require('./math');

test('adds 1 + 2 to equal 3', () => {
  expect(maths.add(1, 2)).toBe(3);
});