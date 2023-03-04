"use strict";

// исправить функцию, теряющую "this"

function askPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: "Вася",

    loginOk() {
        console.log(`${this.name} logged in`);
    },

    loginFail() {
        console.log(`${this.name} failed to log in`);
    },
};

/* исправить строку, чтобы все работало
askPassword(user.loginOk, user.loginFail);
*/

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));