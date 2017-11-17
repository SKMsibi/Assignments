function intAdd() {
    var allArgs = Array.from(arguments);
    var newArray = [];
    allArgs.forEach(function (element) {
        if (parseInt(element) >= 0) {
            newArray.push(parseInt(element));
        } else {
            newArray.push(0);
        }
    });
    return newArray.reduce(function (a, b) { return a + b });
}
console.log(intAdd("1", "0", "2"));
console.log(intAdd("", "t", "2", "4"));
console.log(intAdd("?", 2, "2"));