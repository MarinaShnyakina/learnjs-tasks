"use strict";

// бесконечный цикл по ошибке

let i = 0;
while (i != 10) {
    i += 0.2;
}

console.log(i);

// этот цикл никогда не завершиться потому что i никогда не станет равно 10