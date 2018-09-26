//Truyền tham trị: không thay đổi giả trị của biến
//thường dùng cho kiểu dữ liệu nguyên thủy: string, number
function changeByValue(b){
    b = 2;
}
var a = 1;
changeByValue(a);
console.log(a);
//Truyền tham chiếu: có thể thay đổi hoặc thêm thuộc tính, giá trị của đối tượng
//Dùng cho Object
function changeByRef(obj){
    obj.prop1 = function(){
        // do nothing
    };
    obj.prop2 = {};
    obj.prop3 = 100;
}
c = {};
c.prop1 = {};
changeByRef(c) ;
console.log(c);
