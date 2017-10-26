
function Person(name, otherName) {
    this.name = name;
    this.otherName = otherName;this.otherName = otherName;
}

function greet() {
    return "Hi " + this.otherName + ", my name is " + this.name;
}

Person.prototype.greet = greet;


var greetPerson1 = new Person('Gabriella', 'Sam');
var greetPerson2 = new Person('Vusi', 'Thandi');

console.log(greetPerson1.greet());
console.log(greetPerson2.greet());
