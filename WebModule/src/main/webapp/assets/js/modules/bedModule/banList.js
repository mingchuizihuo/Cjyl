/**
 * Created by horo on 2016/11/11.
 */
/*楼门表*/
//添加
$(function () {
    findAll(currentPage);
})
function clearModal() {
    $("#entranceName").val("");
    $("#entranceToalNum").val("");
    $("#floorToalNum").val("");
    $("#entranceNum").val("");
}
function add() {
    var url = domainUrl +'/serve/entrance/add';
    var entranceName = $("#entranceName").val();
    var entranceToalNum = $("#entranceToalNum").val();
    var floorToalNum = $("#floorToalNum").val();
    var entranceNum = $("#entranceNum").val();
    var postData = {
        entranceName:entranceName,
        entranceToalNum:entranceToalNum,
        floorToalNum:floorToalNum,
        entranceNum:entranceNum,
    };
    postAjax(url,false,postData,function (data) {
        console.log(JSON.stringify(data));
        alert("添加成功");
        findAll(currentPage);
        $("#myModal").modal("hide");
    })
}
var pageNp = 1;
//查询
function findAll(currentPage) {
    var url = domainUrl +'/serve/entrance/findAll';
    var getData = {
        currentPage:currentPage,
        limit:limit,
    };
    var html = "<table id='aaa'><tbody> <tr> <th>楼名</th> <th>楼门数</th> <th>楼层</th> <th>楼门号</th> <th>操作</th> </tr> </tbody>";
    var tile='';
    getAjax(url,false,getData,function (data) {
        pageList = Math.ceil(data.iTotalRecords / 9);
        var num = data.aaData.length;
        for (var i = 0; i < num; i++) {
            html += '<tr><td>' + data.aaData[i].entranceName + '</td><td>' + data.aaData[i].entranceToalNum + '</td><td>' + data.aaData[i].floorToalNum + '</td><td>' + data.aaData[i].entranceNum + '</td>';
            html += '<td><i class="glyphicon glyphicon-pencil bianji" title="编辑" data-toggle="modal"  data-target="#myModal" onclick="make(' + data.aaData[i].id + ')"></i><i' +
                ' class="glyphicon glyphicon-remove shanchu" title="删除" onclick="del(' + data.aaData[i].id + ')"></i></td></tr>';

            tile += ' <div class="main-modules"><i style="margin-right: 30px;" class="glyphicon glyphicon-pencil bianji" title="编辑" data-toggle="modal"  data-target="#myModal"  onclick="make(' + data.aaData[i].id + ')"></i> ' +
                ' <i  class=" glyphicon glyphicon-remove shanchu"    onclick="del(' + data.aaData[i].id + ')" title="删除"></i>';
            tile +='<ul><li class="servePicture"><img src='+domainFile+'/assets/images/serve/room.png /></li></ul>';
            tile += '<ul id="zuo-font"><li>楼名<span>' + data.aaData[i].entranceName + '</span></li><li>楼门数<span>' + data.aaData[i].entranceToalNum + '</span></li>' +
                ' <li>楼层<span>' + data.aaData[i].floorToalNum + '</span></li> <li>楼门号<span>' + data.aaData[i].entranceNum + '</span></li></ul></div>';
        }
        html+='</table>';
        if(findAllNum ==1){
            $(".main-module").html(html);
        }else{
            $(".main-module").html(tile);
        }
        tableTileShow(tile,html);
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
    })
}
function make(id) {
    $("#update-btn").show();
    $("#add-btn").hide();
    $("#lid").val(id);
    var url = domainUrl +'/serve/entrance/findAll';
    var getData = {
        currentPage:currentPage,
        limit:limit,
    };
    getAjax(url,false,getData,function (data) {
        var num = data.aaData.length;
        for(var i = 0; i< num ; i++){
            if(id == data.aaData[i].id){
                $("#entranceName").val(data.aaData[i].entranceName);
                $("#entranceToalNum").val(data.aaData[i].entranceToalNum);
                $("#floorToalNum").val(data.aaData[i].floorToalNum);
                $("#entranceNum").val(data.aaData[i].entranceNum);
            }
        }
    })
}
//修改
function update() {
    var url = domainUrl +'/serve/entrance/update';
    var entranceName = $("#entranceName").val();
    var entranceToalNum = $("#entranceToalNum").val();
    var floorToalNum = $("#floorToalNum").val();
    var entranceNum = $("#entranceNum").val();
    var postData = {
        id:$("#lid").val(),
        entranceName:entranceName,
        entranceToalNum:entranceToalNum,
        floorToalNum:floorToalNum,
        entranceNum:entranceNum,
    };
    console.log(postData)
    postAjax(url,false,postData,function (data) {
        console.log(JSON.stringify(data));
        alert("修改成功");
        findAll(currentPage);
        $("#myModal").modal("hide");
    })
}
//删除
function del(id) {
    var url = domainUrl +'/serve/entrance/del';
    var postData = {
        id:id,
    };
    postAjax(url,false,postData,function (data) {
        console.log(JSON.stringify(data));
        alert("删除成功");
        findAll(currentPage);
    })
}