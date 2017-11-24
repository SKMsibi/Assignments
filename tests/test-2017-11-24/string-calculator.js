function intAdd(stringNumbers) {
    var finalAnswer = 0;
    switch (stringNumbers.length) {
        case 0:
            finalAnswer = stringNumbers.length;
            break;
        case 1:
            finalAnswer = parseInt(stringNumbers);
            break;

    }
    return finalAnswer;
}

console.log(intAdd("1"));
console.log(intAdd(""));
console.log(intAdd("1,2"));

