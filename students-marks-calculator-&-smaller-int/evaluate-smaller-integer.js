function calculateSmallerInteger(firstInteger, secondInteger){
var smallerInteger;
	if(firstInteger > secondInteger){
		smallerInteger = secondInteger;	
	}else if(secondgInteger > firstInteger){
		smallerInteger = firstInteger;
	} else if (secondInteger == firstInteger){
		smallerInteger = "Both numbers are equal";
	}
	return smallerInteger;
} 
console.log(calculateSmallerInteger(27, 9))