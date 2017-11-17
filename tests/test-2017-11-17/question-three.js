function Add(string) {
    var allArgs = string.match(/\d/g);
    var newArray = [];
    if(string.length < 1){
        newArray.push(0);
    }else{
    allArgs.forEach(function (element) {
        if (parseInt(element) >= 0) {
            newArray.push(parseInt(element));
        } else {
            newArray.push(0);
        }
    });
    return newArray.reduce(function (a, b) { return a + b });
}
return 0;
}
console.log(Add("1,0,2"));
console.log(Add(""));
console.log(Add("?,2,2"));