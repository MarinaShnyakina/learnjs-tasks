"use strict";

// связанная функция как метод

function f() {
    console.log(this);       // null
}

let user = {
    g: f.bind(null)
};

user.g();