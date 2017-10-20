function numbers(collection) {
    var eachElementStatus = "";
    var finalAnswer = "";
    collection = Array.from(arguments)

    for (var i = 0; i < collection.length; i++) {
        if (isNaN(collection[i])) {
            eachElementStatus += false;
        } else {
            eachElementStatus += true; 
        }
    }
    if(eachElementStatus.search(/false/gi) >= 0){
        finalAnswer = false;
    }else{
        finalAnswer = true;
    }
    return finalAnswer;
}

console.log(numbers(4, 3,"ad", 3, 4, 4, 2));
console.log(numbers(4,6,22,NaN,56));
console.log(numbers("Officer","Soldier"));
console.log(numbers(1,4,6,3,7,8));