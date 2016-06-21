var Tree = (function () {
    function Tree(name, height) {
        this.name = name;
        this.height = height;
        this.habitat = 0;
        console.log("instantiated " + name + " and im " + height + ", " + (this.habitat + 10));
    }
    Tree.prototype.climb = function (distance) {
        return console.log("I've climbed " + distance + ", which leaves me only " + (this.height - distance) + " to go!");
    };
    return Tree;
}());
var redWood = new Tree('redwood', 1600);
var birch = new Tree('birch', 210);
redWood.climb(200);
