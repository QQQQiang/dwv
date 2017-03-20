var http = require('http');
var multiparty = require('multiparty');
var fs = require("fs");

http.createServer(function (request, response) {
    response.setHeader("Access-Control-Allow-Origin", "*");

    (function (req, res) {
        var form = new multiparty.Form({uploadDir: "../uploadFiles/"});
        form.parse(req, function (err, fields, files) {
            if (err) {
                console.log("上传失败！" + err);
                res.write("fail");
            } else {
                res.write("success");
                //改文件名一直报错找不到旧文件，未调试成功
                // var inputFile = files.file[0];
                // var oldPath = inputFile.path;
                // var newPath = inputFile.originalFilename;
                // fs.rename(oldPath, newPath, function(err){
                //     if(err){
                //         console.log(err);
                //     } else {
                //         console.log("ok");
                //     }
                // });

            }
            res.end();
        });
    })(request, response);

}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');