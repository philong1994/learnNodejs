

var firstName = 'Phi';
//scope: là phạm vi mà đoạn mã chương trình có thể truy cập tới các biến, function
(function () {
    var firstName = 'Long';
    console.log(firstName);
    
}());
//Biến firstName trong hàm này chỉ có phạm vi trong hàm, không ảnh hưởng ra ngoài, các biến ở ngoài cũng không ảnh hưởng vào hàm này
//Không có khả năng tái sử dụng


//Truyền tham số cho hàm
(function (lastName) {
    var firstName = 'Long';
    console.log(lastName);
    
}("Bùi"));

console.log(firstName);