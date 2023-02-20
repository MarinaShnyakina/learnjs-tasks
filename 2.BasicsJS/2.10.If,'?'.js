"use strict";

// if 1
if ("0") {
    console.log("Привет!")
}
// Привет - выведется, так как "0" - не пустая строка

// if 2
let officialName = prompt("Какое официальное название JavaScript?", "");

    if (officialName == "ECMAScript") {
        alert("Верно!");
    } else {
        alert("Не знаете? ECMAScript!");
    }


// if 3
let number = prompt("Введите число", "");

if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}


// ?4
let result = (a + b < 4) ? "Мало" : "Много";


// ?5
let message = (login == "Сотрудник") ? "Привет" :
    (login == "Директор") ? "Здравствуйте" :
    (login == " ") ? "Нет логина":
    "";








