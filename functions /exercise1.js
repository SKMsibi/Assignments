function calculateSmallerInteger(firstInteger, secondInteger){
var smallerInteger;
	if(firstInteger > secondInteger){
		smallerInteger = secondInteger;
		
	}else if(secondgInteger > firstInteger){
		smallerInteger = firstInteger;
	} 
	return "The smaller integer between " + firstInteger + " and " + secondInteger + " is " + smallerInteger;
} 
console.log(calculateSmallerInteger(27, 9))