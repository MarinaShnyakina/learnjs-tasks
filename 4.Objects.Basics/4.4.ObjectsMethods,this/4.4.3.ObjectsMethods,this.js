"use strict";

// цепь вызовов

let ladder = {
    step: 0,
    up() {
        this,step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    snowStep:function() {
        console.log(this.step);
        return this;
    }
};

ladder
.up()
.up()
.down()
.snowStep()
.down()
.snowStep();