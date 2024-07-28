const add = function (num1, num2) {
  return num1 + num2;

};

const subtract = function (num1, num2) {
  return num1 - num2;

};

const sum = function (arry) {
  return arry.reduce((a, b) => a + b, 0);


};

const multiply = function (arry) {
  return arry.reduce((a, b) => a * b, 1);
};

const power = function (num1, num2) {
  let power = Math.pow(num1, num2);
  return power;

};

const factorial = function (num) {
  let fact = 1;
  for (let i = 1; i < num; i++) {
    fact = fact * (i + 1);
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
