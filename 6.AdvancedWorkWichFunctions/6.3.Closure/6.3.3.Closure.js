"use strict";

// функция в if

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi();  // ошибка, т.к. функция sayHi объявлена внутри if