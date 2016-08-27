"use strict";

class Mountain {
  history: string;
  constructor(public name, public discoveredBy) {
    this.history = name + " was discovered by: " + discoveredBy;
  }
}

interface BigHill {
  name: string;
  discoveredBy: string;
}

function educate(BigHill: BigHill) {
  return BigHill.name + " was discovered by: " + BigHill.discoveredBy
}

var Antero = new Mountain("Antero", "Old Blue")

console.log(educate(Antero));

function hello(person: string) {
  return console.log("Hello there " + person);
}

let tim = "tim"
hello(tim);

function add(firstNumber: number, secondNumber: number) {
  return firstNumber + secondNumber;
}
add(3, 4); // 7

interface Biker {
  bikeType: string
}

let alex = {
  bikeType: "Cannondale",
}

function yo(biker: Biker) {
  return console.log("Sick " + alex.bikeType + ", Ese.");
}
yo(alex); // sick cannondale ese

let someTing: Array<number> = [1, 2, 3];
someTing[1]; // 2


class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person : Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M.", "User");
console.log(greeter(user));
