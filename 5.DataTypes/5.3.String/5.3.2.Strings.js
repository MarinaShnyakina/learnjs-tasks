"use strict";

// проверка на спам

/*
Написать функцию checkSpam(str), 
возвращающую true, если str содержит 'viagra' или 'XXX', 
а иначе false.
*/

function checkSpam(str) {
    let result = str.toLowerCase();

    return result.includes("viagra") || result.includes("xxx");
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));