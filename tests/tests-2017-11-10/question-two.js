function multiply(firstNumber, secondNumber) {
    if (typeof secondNumber == 'undefined') {
        return function (secondNumber) { return firstNumber * secondNumber; };
    }
    else {
        return firstNumber * secondNumber;
    }
}
console.log(multiply(3,3));
console.log(multiply(3)(3));
