'use strict'

const hashMap = new Map([
  ['age', 25]
])

let yo = 'dawg'
hashMap.set('name', 'alex')

for(let key of hashMap.entries()){
  console.log(key)
  if(key === 'age' && value === 'alex'){
    let curr = key;
    console.log('this is key: ' + curr);
  }
}

console.log(hashMap.get('name'));

let map = new Map([
    ['name', 'david'],
    [true, 'false'],
    [1, 'one'],
    [{}, 'object'],
    [function () {}, 'function']
]);

for (let value of map.keys()) {
  console.log(value);
}

for (let value of map.entries()) {
  console.log(value);
}
