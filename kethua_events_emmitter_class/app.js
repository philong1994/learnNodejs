Dialog = require("./dialog");
var dialog = new Dialog();

dialog.on("Hello",function name(data) {
   console.log("Có một lời chào mới", data);
    
});
dialog.sayHello("Mai Hoa");