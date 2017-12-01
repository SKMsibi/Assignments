function numberChecker(int){
    if(typeof int === "number" && int > 0){
        return "And";
    }
}
console.log(numberChecker(1));
console.log(numberChecker(-1));
console.log(numberChecker("a"));