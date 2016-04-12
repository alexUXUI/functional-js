'use strict';

var addThree = (a) => (b) => (c) => a + b + c
console.log(addThree(10)(10)(10))

var concatStrings = (string) => (string2) => (string3) => string + string2 + string3
console.log(concatStrings('hello ')('there ')('stranger!'))

let complexCurry = (a, b) => (c, d, e) => (f) => a + b * (c + d + e) * f
console.log(complexCurry(1,2)(1,2,1)(1))

var curry = function(a, b){
  var foo = a + b;
  return function(c ,d){
    var bar = c + d;
    return function(){
      return foo + bar;
    }
  }
}
console.log(curry(1,2)(1,2)());

let basicArray = [1,2,3,4,5,6,7,8];
let timesTen = function(array, predicate){
  return array.forEach(function(item){
    var predicate = function(value){
      return value * 2;
    }
    console.log(predicate(item += item * 10));
  })
}

timesTen(basicArray)
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log(roots);
