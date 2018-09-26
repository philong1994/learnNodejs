var url = require("url");
//https://nodejs.org/dist/latest-v8.x/docs/api/util.htm
var urlInfo = url.parse("https://nodejs.org/dist/latest-v8.x/docs/api/util.htm");
console.log(urlInfo);
console.log(urlInfo.host);

