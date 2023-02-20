"use strict";

// ||, &&,
console.log(null || 2 || undefined);              // 2

console.log(cons.log(1) || 2 || cons.log(3));     // 2

console.log(1 && null & 2);                       // null

console.log(console.log(1) && console.log(2));    // undefined

console.log(null || 2 && 3 || 4);                 // 3


// if

if (age1 >=14 && age1 <=90) {
    console.log("Верно!");
}


if (!(age2 >= 14 && age2 <= 90)) {
    console.log("Верно");
}

if (age3 < 14 || age3 > 90) {
    console.log("Верно");
}


if (-1 || 0) alert( 'first' );                   // выполнится first
if (-1 && 0) alert( 'second' );                  // не выполниться
if (null || -1 && 1) alert( 'third' );           // выполнится third


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
