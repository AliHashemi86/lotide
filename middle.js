const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: , ${actual}, = , ${expected}`);
  }
  else {
    console.log(`Assertion Failed: , ${actual}, != , ${expected}`);
  }
};


const middle = function(arr3) {
  let finalArr = [];
  if (arr3.length < 3) {

      return finalArr;
    } 
    else if (arr3.length % 2 === 0) {
      finalArr.push(arr3[Math.floor(arr3.length - 1 / 2)]);
      return finalArr;
    } 
    else if (arr3.length % 2 !== 0) {
      finalArr.push(arr3[Math.floor(arr3.length / 2)]);
      return finalArr;
    }
    return finalArr;
  }



assertArrayEqual(middle([1, 2, 3]), [2]);
assertArrayEqual(middle([1, 2, 3, 4]), [2]);
assertArrayEqual(middle([1, 2, 3, 4, 5]), [5]);
assertArrayEqual(middle([1, 3]), [1]);
assertArrayEqual(middle([1]), [1]);
assertArrayEqual(middle([1]), []);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [4, 5]);