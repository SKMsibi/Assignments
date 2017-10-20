function retrieveLastElement(list){
    list = Array.from(arguments);
    finalAnswer = list[list.length - 1];
    return finalAnswer;
}

console.log(retrieveLastElement(5,4,7,3,6,32));
console.log(retrieveLastElement("Earth", "Moon", "Jupiter", "Pluto"));