function arrayfilter(arr, num, str) {
    var finalAnswer = [];
    for (var index = 0; index < arr.length; index++) {
        if (str === "GreaterOrEqual") {
            arr[index] >= num ? finalAnswer.push(arr[index]) : arr.push();
        } else if (str === "LessThan") {
            arr[index] < num ? finalAnswer.push(arr[index]) : arr.push(); 
        }
    }
    return finalAnswer;
}
console.log(arrayfilter([1, 2, 3, 4, 5, 6, 7], 3, "GreaterOrEqual"));
console.log(arrayfilter([1, 2, 3, 4, 5, 6, 7], 5, "LessThan"));