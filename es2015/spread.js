'use strict'

let args = [2, 5, 3]

function add(a, b, c) {
  return a + b + c
}

function *generate(x, y ,z) {
  yield x + 1
  yield y + 1
  yield z + 1
  return `done generating`
}

const nums = [2, 7, 1]

let arr = [...generate(...nums)]

let [x, y, z] = generate(...arr)

console.log(add(...args)) // 10
console.log(arr)          // [ 3, 8, 2 ]
console.log(x, y, z);     // 4 9 3
