var animals = {
  1: 'cat',
  2: 'dog',
  3: 'turtle'
}

function *iterator(obj) {

  let keys = Reflect.ownKeys(obj)

  for (let key of keys) {
    yield console.log([key, obj[key]]);
  }

}

let animal = iterator(animals);

animal.next() // [ '1', 'cat' ]
animal.next() // [ '2', 'dog' ]
animal.next() // [ '3', 'turtle' ]
