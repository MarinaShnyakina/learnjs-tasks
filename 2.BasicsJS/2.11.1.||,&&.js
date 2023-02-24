"use strict";

// ||, &&,
console.log(null || 2 || undefined);              // 2

console.log(cons.log(1) || 2 || cons.log(3));     // 2

console.log(1 && null & 2);                       // null

console.log(console.log(1) && console.log(2));    // undefined

console.log(null || 2 && 3 || 4);                 // 3
