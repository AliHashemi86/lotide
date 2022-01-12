const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: , ${actual}, = , ${expected}`);
  }
  else {
    console.log(`Assertion Failed: , ${actual}, != , ${expected}`)
  }
};

const countLetters = function(sentence) {
 let result = {};
 sentence = sentence.toLowerCase()

 for (const alphabet of sentence) {
   if (alphabet !== " ") {
     if (result[alphabet]) {
       result[alphabet] += 1;
     }
     else {
       result[alphabet] = 1;
     }
   }
 }
 return result;
}

const testSentence = "learning coding with Lighthouse"
console.log(countLetters(testSentence))
