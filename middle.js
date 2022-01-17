const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

const middle = function(arr3) {
  let finalArr = [];
  if (arr3.length < 3) {

      return finalArr;
    } 
    else if (arr3.length % 2 === 0) {
      finalArr.push(arr3[Math.floor(arr3.length - 1 / 2)]);
      return finalArr;
    } 
    else if (arr3.length % 2 !== 0) {
      finalArr.push(arr3[Math.floor(arr3.length / 2)]);
      return finalArr;
    }
    return finalArr;
  }

module.exports = middle;