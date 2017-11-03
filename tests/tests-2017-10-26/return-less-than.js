function list(list) {
    this.list = list;
}
function lessThan(givenNumber) {
    var finalAnswer = [];
    this.list.forEach(function(element) {
     if(element < givenNumber){
        finalAnswer.push(element);
     }   
    });
    return finalAnswer;
}
list.prototype.lessThan = lessThan;
var collection = new list([1,2,3,4,73,32]);
console.log(collection.lessThan(50));