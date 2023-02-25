"use strict";

// случайное целое число от min до max

/*
Написать функцию randomInteger(min, max), 
которая генерирует случайное целое (integer) 
число от min до max (включительно).
*/

function randomInteger(min, max) {
    let random = min + min + Math.random() * (max + 1 - min);
    return Math.floor(random);
}

console.log(random(1,5) );
console.log(random(1,5) );
console.log(random(1,5) );