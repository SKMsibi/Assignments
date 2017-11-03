String.prototype.duplify = function(num){
    var element = "";
    for (var index = 0; index < num; index++) {
        element += this;
    }
    return element;
}
console.log("Johannesburg".duplify(3));