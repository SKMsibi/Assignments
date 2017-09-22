var listOfNumbers = [1,2,3,4,5,6,6,7,];
function numbers(listOfNumbers){
    if (listOfNumbers == listOfNumbers.match(/d+/g)){
        return "true";
    }else{
        return "false"
    }
}

console.log(numbers(listOfNumbers))