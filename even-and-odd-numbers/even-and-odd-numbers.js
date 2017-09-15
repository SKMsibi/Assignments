var maxNumber = 50;
function evaluateNumbers(maxNumber) {
    var numbers = 0;
    var evenOrOdd = 0;
    var results = " ";
    var i = 1;
    while (i <= maxNumber){
        numbers = i;
    if(i % 2 === 0 && i > 1) {
        evenOrOdd = "this is an even";
    } else{
        evenOrOdd = "this is an odd"
    }
    results += `${numbers} ${evenOrOdd} "\n"`;
    i++;
}
return results;
}
console.log(evaluateNumbers(maxNumber));