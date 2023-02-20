"use strict";

let a = 1, b = 1;
let c = ++a;          // 2
let d = b++;          // 1


let e = 2;
let x = 1 + (e *= 2); // 5


"" + 1 + 0            // = "10"
"" - 1 + 0            // = "-1"
true + false          // = 1
6 / "3"               // = 2
"2" * "3"             // = 6
4 + 5 + "px"          // = "9px"
"$" + 4 + 5           // = "$45"
"4" - 2               // 2
"4px" - 2             // NaN
" -9 " + 5            // " -9 5"
" -9 " - 5            // -14
null + 1              // 1
undefined + 1         // NaN
"\t \n" - 2           // -2 

/* сейчас результат 12, нужно исправить, чтобы результат был 3
let first = prompt("Первое число?", 1);
let second = prompt("Второе число?", 2);
console.log(first + second); // 12  */

let first = prompt("Первое число?", 1);
let second = prompt("Второе число?", 2);
console.log(+first + +second); // 3