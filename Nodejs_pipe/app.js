var fs = require("fs");
var zib = require("zlib");// thư viện phục vụ nén file
var readable = fs.createReadStream(__dirname + '/read.txt',{
    encoding : "utf8",
    highWaterMark: 16 * 1024 //16 KB
});
var writeable = fs.createWriteStream(__dirname+ '/write.txt');
//copy file
readable.pipe(writeable);
//compress file
var compress = fs.createWriteStream(__dirname+ '/write2.txt.gz');
var gzip = zib.createGzip();
readable.pipe(gzip).pipe(compress);