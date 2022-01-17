const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual')
const eqArrays = require('../eqArrays')

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [5]);
assertArraysEqual(middle([1, 3]), [1]);
assertArraysEqual(middle([1]), [1]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [4, 5]);