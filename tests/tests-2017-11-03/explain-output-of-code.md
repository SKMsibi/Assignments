---
Layout:	
Title:	"explaining what the code is supposed to return"
Date:	2017-11-03 09:15:08 -0600
Categories:	
---
### instruction.
What is the output of the following code and explain your answer in detain:

var name = '"Vitalik Butterin'; 
var obj = {
    name:"Satoshi Nakamoto";
    prop:{
        name:"Adam Back";
        getFullName:function{
            return this.name;
        }
    }
};

 1 - console.log(obj.prop.getFullName());

 2 - var fullName = obj.prop.getFullName;
   - console.log(fullName);

### console.log(obj.prop.getFullName());

Due to the use of the *this.* in the function *getFullName* which refers to the parent scoping of the object *name*.
The output of the code will be *Adam Back*.
The parent of the getFullName property is the *prop* property that contains an object.
The scoping of the *prop* property is used to access the variable *name*.

### console.log(fullName);
The *fullName*  variable contains the location and function that when executed returns a name from the parent of the getFullName function.
