const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual === expected)) {
    console.log(`Assertion Passed: , ${actual}, = , ${expected}`);
  }
  else {
    console.log(`Assertion Failed: , ${actual}, != , ${expected}`);
  }
};


assertArrayEqual(([1, 2, 3], [1, 2, 3]), true);
assertArrayEqual(([1, 2, 3], [1, 2, 5]), true);
assertArrayEqual(([1, '2', 3], [1, 2, 3]), true);
assertArrayEqual(([1, '2', 3], [1, 2, 3]), false);
