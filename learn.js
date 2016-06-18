"use strict";
var myName = "Alex";
var myAge = 26;
console.log("Hi, my name is " + myName + " and I am " + myAge + " years old.");
console.log("next year, I will be " + (myAge + 1) + " years old.");
var Bikes;
(function (Bikes) {
    Bikes[Bikes["Cannondale"] = 0] = "Cannondale";
    Bikes[Bikes["Fuji"] = 1] = "Fuji";
    Bikes[Bikes["Kestrel"] = 2] = "Kestrel";
    Bikes[Bikes["Schwinn"] = 3] = "Schwinn";
})(Bikes || (Bikes = {}));
;
var shwiggity = Bikes.Schwinn;
console.log(Bikes[0]);
function sup(person) {
    return "Sup, " + person.name;
}
var alex = {
    age: 26,
    name: "Alex"
};
console.log(sup(alex));
