"use strict";

// изменяем "prototype"

function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

// Добавим строчки

Rabbit.prototype = {};            // 2. true

Rabbit.prototype.eats = false;    // 3. false

delete rabbit.eats;               // 4. true

delete Rabbit.prototype.eats;     // 5. undefined

console.log(rabbit.eats);         // 1. true