"use strict";

// декаратор debounce

let f = debounce(console.log, 1000);

f(1);
f(2);

setTimeout( () => f(3), 100);
setTimeout( () => f(4), 110);
setTimeout( () => f(5), 1500);

function debounce(f, ms) {
    let isCooldown = false;
    return function() {
        if (isCooldown) return;

        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => isCooldown = false, ms);
    };
}