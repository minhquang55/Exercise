// lodash
const { findIndex, indexOf } = require('lodash');
var _ = require('lodash');

// Exercise 1:
const isEqual = (array1, array2) => {
  return JSON.stringify(array1.sort()) == JSON.stringify(array2.sort());
}

// Exercise 2:
const flatten = (arr) => {
  return _.flattenDeep(arr);
}

// Exercise 3:
const chunk = (arr, count) => {
  return _.chunk(arr, count);
}

// Excercise 4:
const intersection = (...arr) => {
  let same = arr[0];
  for (let i = 1; i < arr.length; i++) {
    same = _.intersection(same, arr[i]);
  }
  return same;
}

// Exercise 5:
const expirationDate = '30 OCt 2020 12:20:32';
const compareDate = (orders) => {
  if(Date.parse(orders) <= Date.parse(expirationDate)) return true;
  return false;
}

// Exercise 6:
const regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const checkEmail = (email) => {
  return regexEmail.test(email);
}

const regexUserName = /^[a-zA-Z_]{1}[\w_]+/;
const checkUserName = (userName) => {
  if (userName.length <=10 && userName.indexOf('__') === -1) return regexUserName.test(userName);
  return false;
} 
