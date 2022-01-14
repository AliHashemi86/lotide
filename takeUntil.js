const eqArray = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = function(actual, expected) {
  if (eqArray(actual, expected)) {
    console.log(`Assertion Passed: , ${actual}, = , ${expected}`);
  } else {
    console.log(`Assertion Failed: , ${actual}, != , ${expected}`);
  }
};

const takeUntil = function(array, callback) {
  let result = [];
  for (let element of array) {
    if (callback(element)) {
      break;
    } else {
      result.push(element);
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArrayEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArrayEqual(results2, ["I've", 'been', 'to']);

console.log(`----`);

const data3 = ['I', 'am', 'learning', 'coding', 'at', 'LHL'];
const results3 = takeUntil(data3, (x) => x === 'at');
console.log(results3);
assertArrayEqual(results3, ['I', 'am', 'learning', 'coding']);