"use strict";

// преобразовать объект в JSON, а затем обратно в обычный объект

let user = {
    name: "Василий Иванович",
    age: 25,
};

let userJS = JSON.parse(JSON.stringify(user));