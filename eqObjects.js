const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false
  }
  for (let index in arrayOne) {
    if (arrayOne[index] !== arrayTwo[index]) {
      return false
    }
  }
  return true
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: , ${actual}, = , ${expected}`);
  }
  else {
    console.log(`Assertion Failed: , ${actual}, != , ${expected}`)
  }
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


// Assertions for primitive values
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// Assertions for array values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false