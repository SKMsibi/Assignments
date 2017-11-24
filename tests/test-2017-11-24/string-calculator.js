function intAdd(stringnumbers) {
    var splitString = stringnumbers.split("\n");
    var split = splitString[1].split(splitString[0][2]);
    var allPositive = split.every(function (element) { return element >= 0 });

    if (allPositive === true) {
        var finalAnswer = split.reduce(function (a, b) {
            return parseInt(a) + parseInt(b);
        });
        if(finalAnswer !== ""){
            return finalAnswer;
        }else{
            return 0;
        }
    } else {
        var filtered = split.filter(function (element) { return element < 0; });
        return `negatives are not allowed ${filtered}`;
    }
}



console.log(intAdd("//:\n1:2:3:-4"));
console.log(intAdd("//?\n1?2?3"));
console.log(intAdd("//?\n"));
console.log(intAdd("//,\n1,2,3"));