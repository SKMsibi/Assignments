//create a function that reduces an array to one value;
//The function should start count at 10;
// reduce([1,2,3,4]); => 10 => 20
// reduce([1,2]); => 3 => 13k

function decreaseArray(list){
    list.unshift(10);
    var answer =list.reduce(function(element1, element2){
         return element1 + element2;  
    });
    return answer ;
}

console.log(decreaseArray([1,1,1]));
console.log(decreaseArray([1,2,3,4]));