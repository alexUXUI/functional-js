'use strict'

function* foo() {
  yield 'a';
  yield 'b';
}

function* bar() {
  yield 'x';
  yield* foo();
  yield 'y';
}

// Collect all values yielded by bar() in an array
let arr = [...bar()];

console.log(arr);
