var Emmiter = require("events");
var emmiter = new Emmiter();
var configEvents = require("./config").events;
emmiter.on(configEvents.BAD_SCORE,function () {
   console.log("Một môn nào đó bị điểm kém"); 
});
emmiter.on(configEvents.BAD_SCORE,function () {
    console.log("Đã có một môn bị điểm kém"); 
 });

 // VD: Bảng điểm
 var score = [10,1,2,8];
 for(var s of score){
     if(s < 5){
         console.log("Điểm thấp :", s);
         emmiter.emit(configEvents.BAD_SCORE);
     }
 }