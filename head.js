const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: , ${actual}, = , ${expected}`);
  }
  else {
    console.log(`Assertion Failed: , ${actual}, != , ${expected}`)
  }
};

const head = function(arr) {
  let head = arr[0]
  return head
};


// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Labs", "javascript", "coding"]), "coding");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "undefined");
assertEqual(head([]), undefined);