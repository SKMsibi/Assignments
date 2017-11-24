function intAdd(stringnumbers) {
    var finalAnswer = 0;
    switch (stringnumbers.length) {
        case 0:
            finalAnswer = stringnumbers.length;
            break;
        case 1:
            finalAnswer = parseInt(stringNumbers);
            break;
        case 3:
            var split = stringnumbers.split(",");
            finalAnswer = split.reduce(function (a, b) {
                return parseInt(a) + parseInt(b);
            });
            break;
    }
    return finalAnswer;
}

console.log(intAdd("1"));
console.log(intAdd(""));
console.log(intAdd("1,2"));

