var obj = {
    name : "Phi Long",
    sayHello : function () {
        console.log(`Xin chào ${this.name}`);
    }
};
obj.sayHello();
obj.sayHello.call({ name: "Hoài Vân" });// thay đổi giá trị name
obj.sayHello.apply({ name: "Hoài Vân" });// thay đổi giá trị name

var obj2 = {
    name : "Phi Long",
    sayHello : function (ts1, ts2) {
        console.log(`Xin chào ${this.name}`);
        console.log("Param :", ts1, ts2);
        
    }
};
//Truyền tham số
obj2.sayHello("123","123");
obj2.sayHello.call({ name: "Hoài Vân" },"abc","123");
obj2.sayHello.apply({ name: "Hoài Vân" }, ["def","456"]);