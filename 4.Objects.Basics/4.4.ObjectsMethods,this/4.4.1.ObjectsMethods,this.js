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
