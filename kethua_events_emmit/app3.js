var util = require("util");
function Person() {
    this.fname = "Phi";
    this.lname = "Long";
}
Person.prototype.sayHello = function () {
  console.log(`Hello ${this.fname} ${this.lname} `);
};

function Student() {
    Person.call(this);
    this.id = "123";
}

util.inherits(Student, Person); // Khai báo Student kế thừa Person

var sv = new Student();

sv.sayHello();