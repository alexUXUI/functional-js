"use strict";

let myName: string = `Alex`;
let myAge: number = 26;

console.log(`Hi, my name is ${ myName } and I am ${ myAge } years old.`)
console.log(`next year, I will be ${ myAge + 1 } years old.`)

enum Bikes {
  Cannondale,
  Fuji,
  Kestrel,
  Schwinn
};

let shwiggity: Bikes = Bikes.Schwinn;
console.log(Bikes[0]);

interface Human {
  name: string;
}

function sup(person: Human) {
  return `Sup, ${person.name}`
}

let alex = {
  age: 26,
  name: "Alex"
}

console.log(sup(alex));
