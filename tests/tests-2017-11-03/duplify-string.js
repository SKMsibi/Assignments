function duplifyString(input, dupNum){
    var element = "";
    for (var index = 0; index < dupNum; index++) {
        element += input;
    }
return element;
}
console.log(duplifyString("city", 4));