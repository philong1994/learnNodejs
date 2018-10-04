// Array Bufrer : Sẵn có trong js
var buffer = new ArrayBuffer(8);// Tham số truyền vào là byte, giới hạn sử dụng 8byte
var view   = new Int32Array(buffer);// Kiểu int thì mỗi phần tử sẽ sử dụng 4byte
view[0] = 1;
view[1] = 10;
console.log(view);
