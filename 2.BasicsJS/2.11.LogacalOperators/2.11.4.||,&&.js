"use strict";

// проверка логина

let userName = prompt("Кто там?", "");
 
if (userName === "Админ") {

    let password = prompt("Пароль?", "");

    if (password === "Я главный") {
    console.log("Здравствуйте!");
    } else if (password === "" && password === null) {
    console.log("Отменено");
    } else {
    console.log("Неверный пароль");
    }
    
} else if (userName === "" || userName === null) {
    console.log("Отменено");
} else {
    console.log("Я вас не знаю");
}    
