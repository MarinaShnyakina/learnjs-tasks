"use strict";

// объекты-константы

const user = {
    name: "John"
};

// это будет работать?
user.name = "Pete";
/* да, тут можно изменить свойство объекта,
но если мы захотим поменять user = ..., то будет ошибка */