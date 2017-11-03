function numbers() {
    var list = Array.from(arguments)
    for (var i = 0; i < list.length; i++) {
        if (typeof list[i] == 'number') {
            return true;
        }
    }
    return false;
}

console.log(numbers(1, 4, 3, 2, 5));
console.log(numbers(1, "a", 3));
console.log(numbers(1, 2, NaN));
