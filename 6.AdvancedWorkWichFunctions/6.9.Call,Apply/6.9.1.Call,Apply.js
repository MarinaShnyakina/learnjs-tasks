"use strict";

// декоратор-шпион

function work(a, b) {
    console.log(a + b);
}

work = spy(work);

console.log(work(1, 2));
console.log(work(4, 5));

for (let args of work.calls) {
    console.log( "call:" + args.join() );
}

function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

wrapper.calls = []; 

return wrapper;
}