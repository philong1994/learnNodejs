//Object

var obj = {
    sayHello : "Hello"
};
console.log(obj.sayHello);
console.log(obj['sayHello']);

//Function và Arr
var arr = [];
arr.push(function () {
    console.log("Hello Arr1");
    
});
arr.push(function () {
    console.log("Hello Arr2");
    
});
arr.push(function () {
    console.log("Hello Arr3");
    
});
arr[0]();
arr[1]();
arr[2]();
console.log("----");
arr.forEach(function (item) {
    item();
});

