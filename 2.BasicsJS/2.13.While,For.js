"use strict";

// последнее значение цикла
let i = 3;
while (i) {
    console.log(i--);                           // ответ 1, цикл остановится при i = 0, потому что false 
}


// какие значение выведет цикл while
let j = 0;
while (++j < 5) console.log(i);                 // 1, 2, 3, 4

let a = 0;
while (a++ < 5) console.log(a);                 // 1, 2, 3, 4, 5


// какие значения выведет цикл for
for (let b = 0; b < 5; b++) console.log(b);     // 0, 1, 2, 3, 4 

for (let c = 0; c < 5; ++c) console.log(c);     // 0, 1, 2, 3, 4


// вывести четные числа
for (let num = 2; num < 11; num++) {
    if(num % 2 == 0)
    console.log(num);
}


// while
let d = 0;
while (d < 3) {
    console.log("number ${d}!");
    d++;
}


// повторять цикл, пока ввод неверен

let number;
do {
    number = prompt("Введите число больше 100", 0);
} while (number <= 100 && number);


// вывести простые числа, результат должен быть 2, 3, 5, 7
let n = 10;

     label:
    for (let i = 2; i <= n; i++) { 
      for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue label; 
      }

      console.log( i ); 
    }
