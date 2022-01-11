const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: , ${actual}, = , ${expected}`);
  }
  else {
    console.log(`Assertion Failed: , ${actual}, != , ${expected}`)
  }
};

const tail = function(array) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

let newArray = [1,2,3];

assertEqual(tail(newArray)[0], 2);
assertEqual(tail(newArray).length, 2);
assertEqual(tail(newArray).length, 3);
assertEqual(tail(newArray).length, 4);
