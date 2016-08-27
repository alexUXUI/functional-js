'use strict'

function *observer() {
    console.log('callee: ' + (yield));
}

function *subject() {
    while (true) {
        yield* observer();
    }
}

let observe = subject();

observe.next() // start
observe.next('a')
observe.next('b')
