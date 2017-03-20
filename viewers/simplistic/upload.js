/**
 * Created by apple on 2017/3/20.
 */
var files = [];
$(document).ready(function() {
    var files = [];
    $("#file-upload").change(function() {
        files = this.files;
    });

    $("#upload").click(function(event){
        var formdata = new FormData();
        if (files.length == 0) {
            event.target.disabled = true;
            return;
        }
        for (var i = 0; i < files.length; i++) {
            formdata.append("file", files[i]);
        }
        $.ajax({
            url: "http://localhost:8888",
            method: "POST",
            data: formdata,
            contentType: false,
            processData: false,
            cache: false,
            success: function(data){
                console.log(data);
                if(data == "success") {
                    alert("上传成功！");
                    $("#file-upload").val(null);
                } else {
                    alert("上传失败！");
                    $("#file-upload").val(null);
                }
            },
            error: function(err) {
                alert("上传失败！");
                console.log(err);
            }
        });
        event.target.disabled = true;
    });

    document.getElementsByClassName("toolbar")[0].addEventListener("click", function(event){
        var nodes = event.target.parentNode.childNodes;
        for(var i=0; i<nodes.length; i++) {
            nodes[i].disabled = false;
        }

    }, true);
})