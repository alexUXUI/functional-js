'use strict'

function* generator(arg){
  yield promiseA(1).then(promiseB(2))
  yield executeB()
  yield 'c'
}

var generate = generator()

console.log(generate.next())
console.log(generate.next())
console.log(generate.next())
console.log(generate.next())

function executeA() {
  return promiseA(10)
}

function executeB() {
  return promiseB(12)
}

function* promiseGen(){
  promiseA(1).then((data) => {
    promiseB(data).then((data) => {
      promiseC(data).then((data) => {
        console.log('yo data', data)
      })
    })
  })
}

var prom = promiseGen()

function promiseA(arg){
  return new Promise((resolve, reject) => {
    resolve(arg + 1)
  })
}

function promiseB(arg){
  console.log('i got called');
  return new Promise((resolve, reject) => {
    resolve(arg + 1)
  })
}

function promiseC(arg){
  return new Promise((resolve, reject) => {
    resolve(arg + 1)
  })
}

async function foo() {
  await 1
  await 2
  await 3
}

return "whew all done";
