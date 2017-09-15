function calculateSmallerInteger(firstInteger, secondInteger){
var smallerInteger;
	if(firstInteger > secondInteger){
		smallerInteger = secondInteger;
		
	}else if(secondInteger > firstInteger){
		smallerInteger = firstInteger;
	} else if(secondInteger == firstInteger){
		return 
	}
	return "The smaller integer between " + firstInteger + " and " + secondInteger + " is " + smallerInteger;
} 
console.log(calculateSmallerInteger(27, 9))