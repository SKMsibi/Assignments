
var name = "Cloe";
function Person(name) {
    this.name = name;
}

Person.greet = function (otherName) {
    return "Hi " + otherName + ", my name is " + name;
}

console.log(Person.greet("Theo"));
console.log(Person.greet("Paul"));
console.log(Person.greet("Mags"));
