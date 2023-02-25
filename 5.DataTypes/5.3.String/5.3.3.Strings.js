"use strict";

// усечение строки

/*
Создать функцию truncate(str, maxlength), 
которая проверяет длину строки str и, 
если она превосходит maxlength, заменяет конец str на "…", 
так, чтобы её длина стала равна maxlength
*/

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + "…" : str;
}

