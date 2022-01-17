const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('return [2] for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('return [5] for [3, 4, 5, 6, 7]', () => {
    assert.deepEqual(middle([3, 4, 5, 6, 7]), [5]);
  });
  it('return [] for [4]', () => {
    assert.deepEqual(middle([4]), []);
  });
});