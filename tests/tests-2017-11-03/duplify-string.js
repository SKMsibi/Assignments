// String.prototype.duplify = function(num){
//     var element = "";
//     for (var index = 0; index < num; index++) {
//         element += this;
//     }
//     return element;
// }
// console.log("Johannesburg".duplify(5));

var name = '"Vitalik Butterin'; 
var obj = {
    name:"Satoshi Nakamoto",
    prop:{
        name:"Adam Back",
        getFullName:function(){
            return this.name;
        }
    }
};

console.log(obj.prop.getFullName());
var fullName = obj.prop.getFullName;
console.log(fullName);