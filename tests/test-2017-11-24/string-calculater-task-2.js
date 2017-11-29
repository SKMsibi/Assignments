function intAdd(stringnumbers) {
    var finalAnswer = 0;
    if (stringnumbers.length === 0) {
        return  0;
    } else if (stringnumbers.length > 0) {
        var sp = stringnumbers.split(",");

        return sp.reduce(function (a, b) {
            return parseInt(a) + parseInt(b);
        });
    }
    return finalAnswer;
}
console.log(intAdd("1"));
console.log(intAdd("1,3,6,3,2"));
console.log(intAdd(""));