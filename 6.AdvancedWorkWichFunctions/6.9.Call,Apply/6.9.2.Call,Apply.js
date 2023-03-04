"use strict";

// задерживающий декоратор

function f(x) {
    console.log(x);
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

function delay(f, ms) {
    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}

console.log(f1000("test"));
console.log(f1500("test"));
