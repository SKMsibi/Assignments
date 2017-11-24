function intAdd(stringnumber) {
    var splitString = stringnumber.split("\n");
    var secondSplit = splitString[1].split(splitString[0][2]);
    return secondSplit.reduce(function(a,b){
        return parseInt(a) + parseInt(b);
    });
}

console.log(intAdd("//;\n1;2;3"));
console.log(intAdd("//:\n1:2:3"));
console.log(intAdd("//?\n1?2?3"));
