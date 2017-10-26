function lessThan(list,givenNumber){
    var finalAnswer = [];
    list.forEach(function(element) {
     if(element < givenNumber){
        finalAnswer.push(element);
     }   
    });
    return finalAnswer;
}

