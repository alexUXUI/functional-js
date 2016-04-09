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
