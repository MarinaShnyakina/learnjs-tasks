"use strict";

// две функции - один объект

let object = {};

function A() {
    return object;
}
function B() {
    return object;
}

let a = new A();
let b = new B();

console.log(a == b); // true


// создать калькулятор при помощи конструктора, new Calculator

function Calculator() {
    this.read = function() {
        this.num1 = +prompt("Введите число num1", 0);
        this.num2 = +prompt("Введите число num2", 0);
    };

    this.sum = function() {
        return this.num1 + this.num2;
    };
    this.mul = function() {
        return this.num1 * this.num2;
    };
}

let calculator = new Calculator();
calculator.read()
console.log("Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );


// создать new Accumulator

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt("Введите значение", 0);
    };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);