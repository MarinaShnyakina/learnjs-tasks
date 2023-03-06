"use strict";

// создать новый объект с помощью уже существующего

function User(name) {
    this.name = name;
}

let user = new User("Marina");
let user2 = new user.constructor("Katy");

console.log(user2.name);        // Katy