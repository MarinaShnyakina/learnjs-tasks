"use strict";

// выделить число

/*
Создать функцию extractCurrencyValue(str), 
которая будет из такой строки выделять 
числовое значение и возвращать его
*/

function extractCurrencyValue(str) {
    return +str.slice(1);
}

console.log(extractCurrencyValue("$120") === 120);
