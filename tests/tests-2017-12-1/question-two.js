function numberChecker(int){
    if(typeof int === "number" && int > 0){
        return "And";
    }else if(typeof int === "number" && int < 0){
        return "Or";
    }
}
console.log(numberChecker(1));
console.log(numberChecker(-1));
console.log(numberChecker("a"));