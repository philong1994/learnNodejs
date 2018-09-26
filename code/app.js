//require bar module
// var bar = require('./bar.js');
// bar();

function sayHello(){
    console.log('Hello NodeJs !!');
    
}
sayHello();
//first class function
function logSaying(fn){
    fn();
}
logSaying(sayHello);
//function Exprestion
var sayGoodbye = function(){
    console.log('Good bye');
}
sayGoodbye();
