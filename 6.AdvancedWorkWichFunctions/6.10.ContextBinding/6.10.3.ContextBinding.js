"use strict";

// свойство функции после bind

function sayHi() {
    console.log(this.name);
}

sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

console.log(bound.test);     // undefined, так как результатом bind явл другой объект 