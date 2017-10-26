function lessThan(list,givenNumber){
    var finalAnswer = [];
    list.forEach(function(element) {
     if(element < givenNumber){
        finalAnswer.push(element);
     }   
    });
    return finalAnswer;
}

console.log(lessThan([1,2,4,6,11,78], 10));
console.log(lessThan([12,45,75,4,7,86], 20));
console.log(lessThan([3,11,5,76,34,5,3,54], 15));