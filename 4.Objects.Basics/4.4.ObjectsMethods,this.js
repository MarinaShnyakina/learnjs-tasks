"use strict";

// использование "this" в литерале объекта

function makeUser() {
    return {
        name : "John",
        ref: this,
    };
}

let user = makeUser();
console.log(user.ref.name); 
// результат будет "ошибка", потому что this внутри makeUser() равно undefined


// калькулятор

let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt("Введите число a", 0);
        this.b = +prompt("Введите число b", 0);
    }
};

calculator.read();
console.log(calculator.sum() );
console.log( calculator.mul() );


// цепь вызовов

let ladder = {
    step: 0,
    up() {
        this,step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    snowStep:function() {
        console.log(this.step);
        return this;
    }
};

ladder
.up()
.up()
.down()
.snowStep()
.down()
.snowStep();