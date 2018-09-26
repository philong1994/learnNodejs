function Emmiter() {
    this.events = {};
}
//Type : giá trị sự kiện truyền vào 
//listener: hàm xử lý khi có sự kiện truyền vào
Emmiter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
};
Emmiter.prototype.emit = function (type) {
  if(this.events[type]){
    this.events[type].forEach(function (listener) {
        listener();// Duyệt mảng + gọi hàm
    });
  }  
};
module.exports = Emmiter;