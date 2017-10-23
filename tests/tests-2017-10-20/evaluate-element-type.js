function numbers(collection) {
    var eachElementStatus = "";
    var finalAnswer = "";
    collection = Array.from(arguments)

    for (var i = 0; i < collection.length; i++) {
        if (isNaN(collection[i])) {
            eachElementStatus += false;
        } else {
            eachElementStatus += true;
        }
    }
    if (eachElementStatus.search(/false/gi) >= 0) {
        finalAnswer = false;
    } else {
        finalAnswer = true;
    }
    return finalAnswer;
}

console.log(numbers(1, 4, 3, 2, 5));
console.log(numbers(1, 3, NaN));
console.log(numbers(1, "a", 3));