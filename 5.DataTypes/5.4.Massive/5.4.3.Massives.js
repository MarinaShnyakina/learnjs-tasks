"use strict";

// вызов в контексте массива

let arr = ["a", "b"];

arr.push(function() {
    console.log(this);
});

arr[2](); // a, b, function(){...}
// вызов функции arr[2] получает в качестве this - функцию и выводит массив a, b