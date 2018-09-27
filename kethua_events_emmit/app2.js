var eventsEmitter = require("events");
var util = require("util");

function Dialog() {
    this.messages = "Hello World";
}

util.inherits(Dialog, eventsEmitter);

Dialog.prototype.sayHello = function (data) {
    console.log(this.messages);
    this.emit("Hello", data);
};

var dialog = new Dialog();

dialog.on("Hello",function name(data) {
   console.log("Có một lời chào mới", data);
    
});
dialog.sayHello("Mai Hoa");