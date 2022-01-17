const assertEqual = require('./assertEqual')


const tail = function(array) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

module.exports = tail;