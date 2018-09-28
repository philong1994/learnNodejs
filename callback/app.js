var firstFunction = function () {
    console.log("first");
    
};
var sercondsFunction = function () {
    setTimeout(firstFunction, 5000);
    console.log("serconds");
};
sercondsFunction();