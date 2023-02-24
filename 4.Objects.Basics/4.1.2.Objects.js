"use strict";

// проверка на пустоту

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
