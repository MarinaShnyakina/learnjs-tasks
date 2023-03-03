"use strict";

// вычислить сумму чисел до данного

// с использованием цикла

function sumTo(n) {
    let result = 0;

    for (let i = 1; i <= n; i++) {
        result += i;
    } 

    return result;
}

console.log(sumTo(100));

// через рекурсию

function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
    }

console.log(sumTo(100));  

// с использованием формулы арифметический прогрессии

function sumTo(n) {
    return n * (n + 1) / 2;
}

console.log(sumTo(100));