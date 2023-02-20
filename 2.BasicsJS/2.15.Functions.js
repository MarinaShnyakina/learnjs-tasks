"use strict";

// функция, используя оператор "?"
function checkAge(age) {
  return (age > 18) ? true : confirm("Родители разрешили?");  
}

// функция, используя оператор "||"
function checkAge(age) {
  return (age > 18) || confirm("Родители разрешили?");  
}


// функция min(a, b)
function min(a, b) {
  return a < b ? a : b;
}


// функция pow(x, n)
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("Введите x", "");
let n = prompt("Введите n", "");

if (n < 1) {
  console.log("Степень ${n} не поддерживается, используйте натуральное число");
} else {
  console.log( pow(x, n));
}

