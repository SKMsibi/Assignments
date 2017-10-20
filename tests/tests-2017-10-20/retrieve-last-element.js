function retrieveLastElement(list) {
    var finalAnswer = "";
    var args = Array.from(arguments);

    if(list.length == undefined){
        finalAnswer = args[args.length - 1];
    }else{
        finalAnswer = list[list.length -1];
    }
    return finalAnswer;
}

console.log(retrieveLastElement([1,2,3,4]));
console.log(retrieveLastElement( "xyz" ));
console.log(retrieveLastElement(43, 2, 3, 4));

