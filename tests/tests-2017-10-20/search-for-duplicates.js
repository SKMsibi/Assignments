function findDuplicates(list) {
    var finalAnswer = "";
    list = Array.from(arguments);
    list.sort(function (a, b) {
        return a - b;
    });
    for (var t = 0; t < list.length; t++) {
        for (var u = 1; u < list.length; u++) {
            if (list[t] == list[u++]) {
                finalAnswer = true;
            } else {
                finalAnswer = false;
            }
        }
    }
    return finalAnswer;
}
console.log(findDuplicates('1', '3', '2'));
console.log(findDuplicates('1', '3', '3', '2'));
console.log(findDuplicates(1,3,5,7,3,6,7));
console.log(findDuplicates('history', 'science', 'art', 'history'));