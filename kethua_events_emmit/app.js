var eventsEmitter = require("events");
var util = require("util");

function Dialog() {
    this.messages = "Hello World";
}

util.inherits(Dialog, eventsEmitter);

Dialog.prototype.sayHello = function () {
    console.log(this.messages);
    this.emit("Hello");
};

var dialog = new Dialog();

dialog.on("Hello",function name(params) {
   console.log("Có một lời chào mới");
    
});
dialog.sayHello("Mai Hoa");