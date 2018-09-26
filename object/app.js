var person = {
    firstName : 'Bui',
    lastName : 'Phi Long',
    sayHello : function(){
        console.log('Hello '+ this.firstName + ' ' + this.lastName);
    }
};
person.sayHello();
console.log(person.firstName);
var key = "lastName";
console.log(person[key]);