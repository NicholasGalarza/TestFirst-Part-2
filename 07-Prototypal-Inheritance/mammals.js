function Mammal(name) {
  this.name = name;
  this.offspring = [];
}

Mammal.prototype.sayHello = function() {
  return "My name is " + this.name + '!';
};

Mammal.prototype.haveBaby = function() {
  var child = Object.create({
    name: 'Baby ' + this.name
  });
  this.offspring.push(child);
  return child;
};

function Cat(name, color) {
  Mammal.call(this, name);
  this.color = color;
}
// When creating a constructor function's own prototype, make sure to place
// these two lines right after the constructor.
Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;

// Overriding functions the JavaScript way! 
Cat.prototype.haveBaby = function(color) {
  var child = new Cat("Baby " + this.name, color);
  this.offspring.push(child);
  return child;
};
