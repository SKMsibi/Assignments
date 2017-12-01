function encodeString(str) {
    var finalAnswer = [];
    var CharacterCount = 1;
    for (var index = 0; index < str.length; index++) {
        if (str[index] === str[index + 1] && str[index] !== str[index - 1]) {
            CharacterCount += 1;
            finalAnswer.push(`${CharacterCount}${str[index]}`)
        } else if (str[index] !== str[index - 1]) {
            CharacterCount = 1;
            finalAnswer.push(`${CharacterCount}${str[index]}`)
        } else {
            finalAnswer.push(``);
        }
    }
    return finalAnswer.join("");
}


console.log(encodeString("book"));
console.log(encodeString("Dazzle"));
console.log(encodeString("assassins do really exist"));

