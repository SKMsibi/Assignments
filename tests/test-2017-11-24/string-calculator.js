function intAdd(stringNumbers) {
    var finalAnswer = 0;
    switch (stringNumbers.length) {
        case 0:
            finalAnswer = stringNumbers.length;
            break;
        case 1:
            finalAnswer = parseInt(stringNumbers);
            break;
        case 3:
            var split = stringNumbers.split(",");
            finalAnswer = split.reduce(function (a, b) {
                return parseInt(a) + parseInt(b);
            });
            break;
    }
    return finalAnswer;
}
console.log(intAdd(""));
console.log(intAdd("1"));
console.log(intAdd("1,2"));

