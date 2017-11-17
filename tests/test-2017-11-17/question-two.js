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
}