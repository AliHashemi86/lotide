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


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i ++) {
    let letter = sentence[i]
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i)
      }
      else {
        results[letter] = [i]
      }
    }
  }
  return results;
};

const testSentence = "lighthouse is the house"
console.log(letterPositions(testSentence))


