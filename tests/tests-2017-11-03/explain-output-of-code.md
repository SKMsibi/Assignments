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

### explanation.

Due to the use of the *this.* in the function *getFullName* which refers to the parent scoping of the object *name*.
The output of the code will be *Adam Back*.
The parent of the getFullName property is the *prop* property that contains and object.
The scoping of the *prop* property is used to access the variable *name*.