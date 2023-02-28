"use strict";

// последнее число месяца

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log( getLastDayOfMonth(2020, 0) ); // 31
console.log( getLastDayOfMonth(2020, 1) ); // 29
console.log( getLastDayOfMonth(2022, 1) ); // 28