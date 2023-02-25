"use strict";

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

