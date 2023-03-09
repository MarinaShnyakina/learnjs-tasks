"use strict";

// ошибка в setTimeout

new Promise(function(resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(console.log);

// .catch - не выполнится, так как здесь присытствует "скрытый try..catch" вокруг кода функции