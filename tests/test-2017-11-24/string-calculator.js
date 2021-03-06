function intAdd(stringnumbers) {
    if(stringnumbers === ""){
        return 0;
    }
    else if (stringnumbers.indexOf(",\n") !== -1) {
        return "invalid syntax";
    }
    else if (stringnumbers.indexOf("//") === -1) {
        var split = stringnumbers.split(/[,\n]/g);
        return split.reduce(function (a, b) { return parseFloat(a) + parseFloat(b) });
    }
    return workWithDelimiter(stringnumbers);
}

function workWithDelimiter(stringnumbers) {
    var splitString = stringnumbers.split("\n");
    var split = splitString[1].split(splitString[0][2]);
    var allPositive = split.every((element) => element >= 0);
    while (allPositive) {
        var finalAnswer = split.reduce((a, b) => parseFloat(a) + parseFloat(b));
        return finalAnswer !== "" ? finalAnswer : 0;
    }
    var filtered = split.filter((element) => element < 0);
    throw new Error(`negatives are not allowed ${filtered}`);
}

console.log(intAdd(""));
console.log(intAdd("1,2\n3"));
console.log(intAdd("1,2,\n3"));
console.log(intAdd("//?\n1?2?3"));
console.log(intAdd("//?\n"));
console.log(intAdd("//;\n1;2;3"));
console.log(intAdd("//-\n2.2-2.2-2.2"));
console.log(intAdd("//:\n1:2:3:-4:-2"));
