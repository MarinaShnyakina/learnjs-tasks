"use strict";

// вывод односвязного списка

// решение с помощью цикла

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

  function printList(list) {
    let tmp = list;

    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
  }

  printList(list);

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

  function printList(list2) {
    console.log(list2.value);

    if(list2.next) {
        printList(list2.next);
    }
  }

  printList(list2);