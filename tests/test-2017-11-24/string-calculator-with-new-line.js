function performance(stringnumbers) {
    var newArray = [];
    var finalAnswer = 0;
    var initialSplit = stringnumbers.split("\n");
    initialSplit.forEach(function (element) {
        if (element.search(",") !== -1) {
            newArray.push(element.split(","))
        } else {
            newArray.push(element);
        }
    });
    var workOnIt = newArray.toString();

    if (workOnIt.length === 0) {
        return 0;
    } else if (workOnIt.length > 0) {
        var splitString = workOnIt.split(",");

        return splitString.reduce(function (a, b) {
            return parseInt(a) + parseInt(b);
        });
    }
}
function intAdd(stringnumbers){
    var finalAnswer = 0;
    if(stringnumbers.search(/"\n,"/gi) >= 1){
        finalAnswer = "invalid syntax";
    }else if(stringnumbers.search(/",\n"/gi) >= 1){
        finalAnswer = "invalid syntax";
    }else {
       finalAnswer = performance(stringnumbers);
    }
    return finalAnswer;
}

console.log(intAdd("1,3\n2"));
console.log(intAdd("1\n3\n6\n3\n2"));
console.log(intAdd(""));
console.log(intAdd("1,\n3\n4"));

    splitString.forEach(function (element) {
        if (element.search(delimiter) !== -1) {
            newArray.push(element.split(delimiter))
        } else {
            newArray.push(element);
        }
    });
    var workOnIt = newArray.toString();

    if (workOnIt.length === 0) {
        return 0;
    } else if (workOnIt.length > 0) {
        var splitString = workOnIt.split(",");

        return splitString.reduce(function (a, b) {
            return parseInt(a) + parseInt(b);
        });
    }