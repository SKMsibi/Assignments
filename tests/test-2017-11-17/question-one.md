## What is the output of the following code?

var age =  22;

var moreki = function() {

console.log(age);

var age = 27;

};

moreki();

## Answer.
The output of the code is undefined.

That is because the console.log statement is executed when the variable age is declared but not initialized therefor resulting in an undefined output.