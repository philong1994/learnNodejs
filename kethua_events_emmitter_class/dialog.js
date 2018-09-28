'use strict';
var eventsEmitter = require("events");
//Kế thừa event Emitter để sử dụng hàm emit
// Gọi hàm supper() trong constucter để có thể kế thừa đc eventsEmitter
module.exports =  class Dialog extends eventsEmitter {
    constructor(){
        super()
        this.messages = "Hello World";
    }
    sayHello(data){
        console.log(`${this.messages} : ${data}`);
        this.emit("Hello", data);
    }
}