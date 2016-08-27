'use strict'

function *generatorFunc() {
	yield 5
	yield 'Generators are cool'
}

let genObj = generatorFunc()

for (let x of generatorFunc()) {
	console.log(x)
}

console.log(genObj.next()) // { value: 5, done: false }
console.log(genObj.next()) // { value: 'Generators are cool', done: false }
console.log(genObj.next()) // { value: undefined, done: true }

class Generator {
	static * generatorFunc() {
		yield 'first round'
		yield 'second round'
	}
}

const generate = new Generator()

let singleton = Generator.generatorFunc()

console.log(singleton.next()) // { value: 'first round', done: false }
console.log(singleton.next()) // { value: 'second round', done: false }
console.log(singleton.next()) // { value: undefined, done: true }

function* genFuncWithReturn() {
	yield 'a'
	yield 'b'
	return 'result'
}

for (let x of genFuncWithReturn()) {
	console.log(x)
}

// spread
let arr = [...genFuncWithReturn()] // ['a', 'b']
console.log(arr)

// deconstruction
let [x, y] = genFuncWithReturn()
console.log([x, y])
