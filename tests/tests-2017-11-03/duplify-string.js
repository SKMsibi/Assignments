var fullname = '"Vittalik Butterin'; 
var obj = {
    fullname:"Satoshi Nakamoto",
    prop:{
        fullname:"Adam Back",
        getFullName:function(){
            return this.fullname;
        }
    }
    
};

console.log(obj.prop.getFullName());
var fullName = obj.prop.getFullName;
console.log(fullName());