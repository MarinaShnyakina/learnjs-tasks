"use strict";

// привет, object

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


// проверка на пустоту

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}


// объекты-константы

const user = {
    name: "John"
};

// это будет работать?
user.name = "Pete";
/* да, тут можно изменить свойство объекта,
но если мы захотим поменять user = ..., то будет ошибка */


// сумма свойств объектов

let salaries = {
    John : 100,
    Ann : 160,
    Pete : 130,
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum); // 390


// умножаем все числовые свойства на 2

let menu = {
    width : 200,
    height : 300,
    title : "My menu",
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2;
        }
    }
}

// после вызова функции
menu = {
    width : 400,
    height : 600,
    title : "My menu",
};

  