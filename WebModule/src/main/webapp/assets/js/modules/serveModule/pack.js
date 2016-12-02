/**
 * Created by horo on 2016/10/21.
 */

$(function () {
    findAll(currentPage);
    findAllServe();
    $("#serveAdd").click(function () {
        $("#servePro").show(200);
    })
    nursifyClass();
})
var serveNamePull = "";
function findAllServe(currentPage) {
    var url = domainUrl + "/serve/services/findAll";
    var getData = {currentPage: currentPage, limit: limit};
    var html = "";
    getAjax(url, false, getData, function (data) {
        var num = data.aaData.length;
        for (var i = 0; i < num; i++) {
            html += '<a value="' + data.aaData[i].id + '" class="servename">' + data.aaData[i].serveName + '</a>';
        }
        html += '<input type="button" value="选择完成" class="btn" id="serversAdd">';
        $("#servePro").html(html);
        $(".servename").click(function () {
            if ($(this).hasClass("colorA")) {
                $(this).removeClass("colorA")
                serveNamePull = serveNamePull.replace('' + $(this).attr("value") + ',', '');
            } else {
                serveNamePull += '' + $(this).attr("value") + ',';
                $(this).addClass("colorA")
            }
            if (serveNamePull == "") {
                $("#serversAdd").css("pointer-events", "none").css("background-color", "#DDDDDD")
            } else {
                $("#serversAdd").css("pointer-events", "auto").css("background-color", "#FF4B01")
            }
        })
        $("#serversAdd").click(function () {
            $("#servePro").hide(200);
        })
    })
}
var pageList;
var pageNp = 1;
function findAll(currentPage) {
    var url = domainUrl + '/serve/service_pack/findAll';
    var getData = {currentPage: currentPage, limit: limit};
    var html = '<table id="aaa"><tbody> <tr> <th>名称</th> <th>折扣</th> <th>开始时间</th> <th>结束时间</th> <th>服务项</th> <th>注意事项</th><th>护理级别</th><th>服务简介</th> <th>操作</th></tr> </tbody>';
    var tile='';
    var num = '';
    var serveNum = '';
    var picture = '';
    getAjax(url, false, getData, function (data) {
        num = data.aaData.length;
        pageList = Math.ceil(data.iTotalRecords / limit);
        for (var i = 0; i < num; i++) {
            var serveList = '';
            for (var j = 0; j < serveNum; j++) {
                serveList += '' + data.aaData[i].servicesList[j].serveName + '、';
            }
            html += '<tr><td>' + data.aaData[i].serveName + '</td><td>' + data.aaData[i].servrRebate + '</td><td>' + data.aaData[i].serveStartDate.substring(0, 11) + '</td>' +
                '<td>' + data.aaData[i].serveEnddate.substring(0, 11) + '</td><td>' + serveList + '</td><td>' + data.aaData[i].serveCare + '</td>' +
                '<td>' + data.aaData[i].serveNurseify.nursifyName + '</td><td>' + data.aaData[i].serveBrief + '</td>' +
                '<td><i class="glyphicon glyphicon-pencil bianji" title="编辑" onclick="make(' + data.aaData[i].id + ')"></i>' +
                '<i class="glyphicon glyphicon-remove shanchu" title="删除" onclick="del(' + data.aaData[i].id + ')"></i></td></tr>';

            if (data.aaData[i].commentPicture.pictureAddress == null) {
                picture = '<img  src=' + domainFile + '/assets/images/serve/pack.png onclick="uploadShow(' + data.aaData[i].id + ')"/>';
            } else {
                picture = '<img src="' + domainFile + '/assets/uploadimg/' + data.aaData[i].commentPicture.pictureAddress + '"  onclick="uploadShow(' + data.aaData[i].id + ')" />';
            }
            tile += ' <div class="main-modules"><i class="glyphicon glyphicon-pencil bianji" title="编辑" style="margin-right: 30px;" onclick="make(' + data.aaData[i].id + ')"></i><i' +
                ' class="glyphicon glyphicon-remove shanchu" title="删除"  onclick="del(' + data.aaData[i].id + ')"></i><ul> <li id="staff-mess1">' + picture + '</li>' +
                ' <li id="staff-mess2"> <ul> <li>名称</li> <li>折扣</li> <li>开始时间</li> <li>结束时间</li> <li>服务项</li> </ul>' +
                ' <ul class="staff-mess-right"> <li>' + data.aaData[i].serveName + '</li> <li>' + data.aaData[i].servrRebate + '</li> <li id="sdate-text" >' + data.aaData[i].serveStartDate.substring(0, 11) + '</li> ' +
                '<li  id="edate-text" >' + data.aaData[i].serveEnddate.substring(0, 11) + '</li> <li>' + serveList + '</li> </ul> </li> <li id="staff-mess3"> <ul> <li>注意事项</li>' +
                ' <li>护理级别</li><li>服务简介</li> </ul> ' +
                '<ul class="staff-mess-right"> <li>' + data.aaData[i].serveCare + '</li><li>' + data.aaData[i].serveNurseify.nursifyName + '</li> <li>' + data.aaData[i].serveBrief + '</li>' +
                ' </ul> </li>' +
                ' </ul> </div>';
        }
        html+='</table>';
        if(findAllNum ==1){
            $(".main-module").html(html);
        }else{
            $(".main-module").html(tile);
        }
        if (pageNp == 1) {
            pageNp = 2;
            $(".tcdPageCode").createPage({
                pageCount: pageList,
                current: currentPage,
                backFn: function (p) {
                    findAll(p)
                }
            });
        }
        tableTileShow(tile,html);
    })
}
function clearModal() {
    $("#update-btn").hide();
    $("#add-btn").show();
    $("#name").val(""); //服务名称
    $("#care").val(""); //注意事项
    $("#rebate").val(""); //折扣
    $("#brief").val();  //服务简介
}
function add() {
    var serveName = $("#name").val(); //服务名称
    var serveCare = $("#care").val(); //注意事项
    var serveRebate = $("#rebate").val(); //折扣
    var ServeStartDate = $("#sdate").val();//开始时间
    var ServeEnddate = $("#edate").val(); //结束时间
    var serveBrief = $("#brief").val();  //服务简介
    var url = domainUrl + '/serve/service_pack/add';
    var postData = {
        serveDetailed: 1,
        serveName: serveName,
        serveCare: serveCare,
        serveRebate: serveRebate,
        ServeStartdate: ServeStartDate,
        ServeEnddate: ServeEnddate,
        serveServes: serveNamePull,
        serveNurseify: 1,
        serveBrief: serveBrief,
        serveDetailed: ""
    };
    postAjax(url, false, postData, function (data) {
        alert("打包成功");
        findAll(currentPage);
        $('#myModal').modal("hide");
    })
}
function update() {
    var serveName = $("#name").val(); //服务名称
    var serveCare = $("#care").val(); //注意事项
    var serveRebate = $("#rebate").val(); //折扣
    var ServeStartDate = $("#sdate").val();//开始时间
    var ServeEnddate = $("#edate").val(); //结束时间
    var serveNurseify = $("#nurseify").val(); //护理级别
    var serveBrief = $("#brief").val();  //服务简介
    var url = domainUrl + '/serve/service_pack/update';
    var id = $("#xid").text();
    var postData = {
        id: id,
        serveDetailed: 1,
        serveName: serveName,
        serveCare: serveCare,
        serveRebate: serveRebate,
        ServeStartDate: ServeStartDate,
        ServeEnddate: ServeEnddate,
        serveServes: serveNamePull,
        serveNurseify: serveNurseify,
        serveBrief: serveBrief,
        serveDetailed: ""
    };
    postAjax(url, false, postData, function (data) {
        alert("修改成功");
        findAll(currentPage);
        $('#myModal').modal("hide");
    })
}
function del(id) {
    var url = domainUrl + '/serve/service_pack/del';
    var postData = {id: id};
    postAjax(url, false, postData, function (data) {
        alert("刪除成功");
        $("#shanchu-yes").show();
        $("#shanchu-no").hide();
        findAll(currentPage);
    })
}
function make(id) {
    $("#xid").text(id);
    findAllServe();
    $("#update-btn").show();
    $("#add-btn").hide();
    var url = domainUrl + '/serve/service_pack/findAll';
    var getData = {};
    var name, care, rebate, sdate, edate, nurseify, brief;
    getAjax(url, false, getData, function (data) {
        var num = data.aaData.length;
        for (var i = 0; i < num; i++) {
            if (id == data.aaData[i].id) {
                name = data.aaData[i].serveName;
                rebate = data.aaData[i].servrRebate;
                sdate = $("#sdate-text").text();
                edate = $("#edate-text").text();
                care = data.aaData[i].serveCare;
                nurseify = data.aaData[i].serveNurseify.nursifyLeave;
                brief = data.aaData[i].serveBrief;
                $("#name").val(name); //服务名称
                $("#care").val(care); //注意事项
                $("#rebate").val(rebate); //折扣
                $("#sdate").val(sdate);//开始时间
                $("#edate").val(edate); //结束时间
                $("#nurseify").val(nurseify); //护理级别
                $("#brief").val(brief);  //服务简介
            }
        }
        $('#myModal').modal("show");
    })
}
function upload(id) {
    $("#box").hide();
    $("#aaaa").hide();
    var url = domainUrl + '/serve/service_pack_picture/adds';
    var postData = {
        servicePackId: id,
        pictureAddress: pathList,
    };
    postAjax(url, false, postData, function (data) {
        alert("上传成功");
        findAll(currentPage);
    })
}
//树
var nursifyClass;
function nursifyClass() {
    var url = domainUrl+"/serve/nurseify/findTreeAll";
    var getData = {currentPage: currentPage, limit: limit};
    var html = '<option value="请选择">请选择</option>'
    getAjax(url, false, getData, function (data) {
        var num = data.aaData[0].length;
        console.log(JSON.stringify(data))
        for (var i = 0; i < num; i++) {
            html += '<option  value="' + data.aaData[0][i].id + '">' + data.aaData[0][i].nursifyName + '</option>';
        }
        $("#nurseify").html(html);
        var type = document.getElementById('nurseify');
        type.onchange = function () {
            var id = this.value;
            if (data.aaData[1] != undefined && id != "请选择") {
                for (var i = 0; i < data.aaData[1].length; i++) {
                    if (data.aaData[1][i].nursifyTid != null) {
                        $("#tr2").show();
                        nursifyClass2(id);
                        nursifyClass = null;
                    } else {
                        var selectIndex = document.getElementById("nurseify").selectedIndex;//获得是第几个被选中了
                        var selectText = document.getElementById("nurseify").options[selectIndex].value //获得被选中的项目
                        nursifyClass = selectText;
                        $("#tr2").hide();
                    }
                }
            } else {
                var selectIndex = document.getElementById("nurseify").selectedIndex;//获得是第几个被选中了
                var selectText = document.getElementById("nurseify").options[selectIndex].value //获得被选中的项目
                nursifyClass = selectText;
                $("#tr2").hide();
            }
        }
    })
}
function nursifyClass2(id) {
    var url = domainUrl+"/serve/nurseify/findTreeAll";
    var getData = {currentPage: currentPage, limit: limit};
    var html = '<option>请选择</option>'
    getAjax(url, false, getData, function (data) {
        var num = data.aaData[1].length;
        for (var i = 0; i < num; i++) {
            if (id == data.aaData[1][i].nursifyTid) {
            html += '<option  value="' + data.aaData[1][i].id + '">' + data.aaData[1][i].nursifyName + '</option>';
            }
        }
        $("#nurseify2").html(html);
        var type = document.getElementById('nurseify2');
        type.onchange = function () {
            var selectIndex = document.getElementById("nurseify2").selectedIndex;//获得是第几个被选中了
            var selectText = document.getElementById("nurseify2").options[selectIndex].value //获得被选中的项目
            nursifyClass = selectText;
        }
    })
}
