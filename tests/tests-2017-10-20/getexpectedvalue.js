
var name = "Cloe;"
function Person(name) {
    this.name = name;
}

Person.greet = function (otherName) {
    return "Hi " + otherName + ", my name is " + name;
}

console.log(Person.greet("Theo"));