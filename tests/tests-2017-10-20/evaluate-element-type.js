function numbers(collection) {
    var list = Array.from(arguments)
    for (var i = 0; i < list.length; i++) {
        if (typeof list[i] == "string") {
            return false;
        }
    }
    return true;
}

console.log(numbers(1, 4, 3, 2, 5));
console.log(numbers(1, 2, NaN));
console.log(numbers(1, "a", 3));