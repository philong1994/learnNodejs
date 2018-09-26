//Hàm khởi tạo đối tượng person
function Person (name, pass){
    this.name = name;
    this.pass = pass;
}
Person.prototype.getName = function(){
    return this.name;
};
Person.prototype.getPass = function(){
    return this.pass;
};
//Hàm get Level
Person.prototype.getLevel = function(){
    return this.level;
};
//Trong Person chưa có giá trị level nên muốn gọi hàm getLevel phải tạo giá trị level
Person.prototype.level = 'admin';

//Khởi tạo đối tượng user
function User(name){
    this.name = name;
}
//User kế thừa person
User.prototype = new Person();
//gán giá trị 
var person = new Person('Long','12345');
var user = new User('Phi','1111');

//Hiển thị giá trị

//User sẽ kế thừa hàm getName của Person
console.log(user.getName());
console.log(user.getLevel());
//Giá trị pass không được khowtr tạo trong hàm User
console.log(user.getPass());

//Ứng dụng mở rộng đối tượng Date trong js
Date.prototype.vnFormat = function(){
    yyyy = this.getFullYear();
    mm   = this.getMonth() + 1;
    dd   = this.getDay();
    return dd + "/" + mm + "/" + yyyy;
};
var now = new Date();
var exp = new Date(2018, 08, 10);
console.log(now.vnFormat());
console.log(exp.vnFormat());