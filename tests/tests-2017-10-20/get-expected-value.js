
function Person(name, otherName) {
    this.name = name;
    this.otherName = otherName;
}

function greet() {
    return "Hi " + this.otherName + ", my name is " + this.name;
}

Person.prototype.greet = greet;


var greetPerson1 = new Person('Gabriella', 'Sam');
var greetPerson = new Person('Vusi', 'Thandi');

console.log(greetPerson1.greet());
console.log(greetPerson.greet());

