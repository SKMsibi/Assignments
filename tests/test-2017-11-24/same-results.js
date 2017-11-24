function intAdd(stringnumber){
    var initialSplit = stringnumber.split(",");
    return initialSplit.filter(function(element){
        return element < 0;
    });
}
console.log(intAdd("1,3,-2,-1,-6"));