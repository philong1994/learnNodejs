var fs = require("fs");
// Đọc file đồng bộ,đọc lần lượt, tốn nhiều thời gian
var content = fs.readFileSync(__dirname + '/readme.txt','utf8');
console.log(content);

// Đọc file không đồng bộ : Nhanh

fs.readFile(__dirname + '/readme.txt','utf8',function (err, data) {
   console.log(data); 
});
console.log("Done");
