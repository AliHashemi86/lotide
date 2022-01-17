const head = require('../head.js');
const assertEqual = require('../assertEqual.js');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Labs", "javascript", "coding"]), "coding");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "undefined");
assertEqual(head([]), undefined);