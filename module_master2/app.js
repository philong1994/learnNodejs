var hello1 = require("./hello1");
hello1();


var hello2 = require("./hello2").sayHello;
hello2();


var hello3 = require("./hello3");
hello3.sayHello();
hello3.message = 'Change Hello3';
hello3.sayHello();

var Hello4 = require("./hello4"); //Class
var hello4 = new Hello4();//Khởi tạo đối tượng
hello4.sayHello();

var hello5 = require("./hello5").hello5;
hello5();
