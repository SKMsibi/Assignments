function filterSpecific(arr, num, str) {
    var finalAnswer = [];
    for (var index = 0; index < arr.length; index++) {
        if (str === "GreaterOrEqual") {
            finalAnswer.push(arr[index] >= num);
        } else if (str === "LessThan") {
            finalAnswer.push(arr[index] < num);             
        }
    }
    return finalAnswer;
}
console.log(filterSpecific([1, 2, 3, 4, 5, 6, 7], 3, "GreaterOrEqual"));
console.log(filterSpecific([1, 2, 3, 4, 5, 6, 7], 5, "LessThan"));