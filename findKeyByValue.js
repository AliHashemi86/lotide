const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: , ${actual}, = , ${expected}`);
  }
  else {
    console.log(`Assertion Failed: , ${actual}, != , ${expected}`)
  }
};

const findKeyByValue = function(obj, value) {
  let objectKey = Object.keys(obj) 
  for (let i = 0; i < objectKey.length; i++) {

    if (obj[objectKey[i]] === value) {
      return objectKey[i];
    }
  }
}
const testObject = { 
  name: 'Ali',
  gender: 'male',
  interest: 'coding',
  city: 'Toronto',
}
console.log(findKeyByValue(testObject, 'coding'))