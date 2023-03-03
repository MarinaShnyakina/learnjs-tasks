"use strict";

// вывод односвязного списка в обратном порядке

// с использованием цикла

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  function printReverseList(list) {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
  }

  printReverseList(list);

// решение через рекурсию

let list2 = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function printReverseList(list2) {

    if(list2.next) {
        printReverseList(list2.next);
    }

console.log(list2.value);
}

printReverseList(list2);
