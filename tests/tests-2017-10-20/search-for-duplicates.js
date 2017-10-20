function findDuplicates(list) {
    var finalAnswer = "";
    list = Array.from(arguments);
    list.sort(function (a, b) {
        return a - b;
    });
    for (var t = 0; t < list.length; t++) {
        for (var i = 1; i < list.length; i++) {
            if (list[t] === list[i]) {
                console.log(list[t] + "and" + list[i])
                finalAnswer = true;
            } else {
                finalAnswer = false;
            }
        }
    }


    return list;
}

console.log(findDuplicates('1', '3', '2', '2'));