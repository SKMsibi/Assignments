function intAdd(stringnumbers) {
    var splitString = stringnumbers.split("\n");
    var split = splitString[1].split(splitString[0][2]);
    var allPositive = split.every(function (element) { return element >= 0 });

    while (allPositive) {
        var finalAnswer = split.reduce((a, b) => parseInt(a) + parseInt(b));
        return finalAnswer !== "" ? finalAnswer : 0;
    }
    var filtered = split.filter(function (element) { return element < 0; });
    throw new Error(`negatives are not allowed ${filtered}`);
}
// console.log(intAdd("//:\n1:2:3:-4:-2"));
console.log(intAdd("//?\n1?2?3"));
console.log(intAdd("//?\n"));
console.log(intAdd("//,\n1,2,3"));