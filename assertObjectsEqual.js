
const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function (object1, object2) {
  const keys1List = Object.keys(object1);
  const keys2List = Object.keys(object2);
  
  if (keys1List.length !== keys2List.length) {
    return false;
  } 
  for (const key of keys1List) {
    let keyValue1 = object1[key]
    let keyValue2 = object2[key]
    if (Array.isArray(keyValue1) && Array.isArray(keyValue2)) {
      return eqArrays(keyValue1, keyValue2);
    } 
    else if (keyValue1 !== keyValue2) {
      return false;
    }
  }
  return true;  
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    return console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    return console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);
