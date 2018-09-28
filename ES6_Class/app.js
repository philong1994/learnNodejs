'use strict';

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName  = lastName;
    }
    //Định nghĩa function
    sayHello(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

var long = new Person("Phi","Long");
var van = new Person("Hoài","Vân");
long.sayHello();
van.sayHello();

console.log(long.__proto__);
