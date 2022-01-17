const tail = require('../tail.js')
const assertEqual = require('../assertEqual.js')

const newArray = [1,2,3];
assertEqual(tail(newArray)[0], 2);
assertEqual(tail(newArray).length, 2);
assertEqual(tail(newArray).length, 3);
assertEqual(tail(newArray).length, 4);