// function multiply(firstNumber, secondNumber) {
//     if (typeof secondNumber == 'undefined') {
//         return function (secondNumber) { return firstNumber * secondNumber; };
//     }
//     else {
//         return firstNumber * secondNumber;
//     }
// }
function multiply(firstNumber, secondNumber) {
    if (secondNumber) {
         return firstNumber * secondNumber;
    }
        return function (secondNumber) { return firstNumber * secondNumber; };
    }

       
}
console.log(multiply(3,3));
console.log(multiply(3)(3));
