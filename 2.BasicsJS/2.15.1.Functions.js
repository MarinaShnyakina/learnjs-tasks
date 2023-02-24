"use strict";

// переписать функцию, используя оператор "?" или "||" 

/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
*/

// функция, используя оператор "?"
function checkAge(age) {
  return (age > 18) ? true : confirm("Родители разрешили?");  
}

// функция, используя оператор "||"
function checkAge(age) {
  return (age > 18) || confirm("Родители разрешили?");  
}

