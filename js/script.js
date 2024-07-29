"use strict";
function adder() {
  let sum = 0;
  return function (arg) {
    sum += arg;
    return sum;
  };
}
const add = adder();
console.log(add(5));
console.log(add(10));
console.log(add(15));
