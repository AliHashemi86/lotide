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

const without =  function(source, removeSource) {
  let newArr = source;
  for(let i = 0; i < source.length; i++) {
    for (let j = 0; j < removeSource.length; j++) {
      if (source[i] === removeSource[j]) {
        newArr.splice(i, 1);
      }
    }
  }
  return newArr
}
console.log(without([1, 2, 5, 4, 3, 4, 5], [2, 3]))
console.log(without([2, 4, 6, 7, 8], [7]))