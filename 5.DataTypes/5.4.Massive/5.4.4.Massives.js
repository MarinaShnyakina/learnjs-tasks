"use strict";

// сумма введеных чисел

function sumInput() {
    let number = [];

    while (true) {
        let value = prompt("Введите число", 0);

        if (value === "" || value === null || !isFinite(value))
        break;

        number.push(+value);
    }

    let sum = 0;
    for (let num of number) {
        sum += num;
    }
    return sum;
}

console.log(sumInput() );