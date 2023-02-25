"use strict";

// вопрос об "if"

if (-1 || 0) alert( 'first' );                   // выполнится first
if (-1 && 0) alert( 'second' );                  // не выполниться
if (null || -1 && 1) alert( 'third' );           // выполнится third

