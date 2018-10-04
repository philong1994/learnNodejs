var readDatabase = function (callback) {
    // read done
    var user = {
        name : "Phi Long" 
    };
    callback(user);
};
// Yêu cầu truy vấn dữ liệu
readDatabase(function (data) {
    // Data là tham số user trong hàm callback(user)
    console.log("Read db callback");
    console.log(data);
    
    
})