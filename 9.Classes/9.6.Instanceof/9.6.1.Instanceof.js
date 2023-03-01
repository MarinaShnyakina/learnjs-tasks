"use strict";

// странный instanceof

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log(a instanceof B);

/* 
В данном примере a.__proto__ == 
B.prototype, так что instanceof возвращает true.
*/