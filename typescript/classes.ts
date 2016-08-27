class Tree {
  habitat = 0
  constructor(public name, public height: number){
    console.log(`instantiated ${name} and im ${height}, ${this.habitat + 10}`)
  }
  climb(distance: number){
    return console.log(`I've climbed ${distance}, which leaves me only ${this.height - distance} to go!`);
  }
}

let redWood = new Tree('redwood', 1600);
let birch = new Tree('birch', 210);

interface Sapling extends Tree {
  monthsOld: number;
}


redWood.climb(200);
