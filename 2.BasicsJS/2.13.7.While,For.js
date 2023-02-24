"use strict";

// вывести простые числа, результат должен быть 2, 3, 5, 7

let n = 10;

     label:
    for (let i = 2; i <= n; i++) { 
      for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue label; 
      }

      console.log( i ); 
    }
