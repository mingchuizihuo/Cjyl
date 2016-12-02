/**
 * Created by horo on 2016/11/24.
 */
/**
 * Created by horo on 2016/11/11.
 */
/*资产表*/
var url ="/serve/fixed_assets";
//添加
$(function () {
    findAll(currentPage);
    fixedClassify();
})
function clearModal() {
    $("#fixedAssetsName").val("");
    $("#fixedAssetsState").val("");
}
function add() {
    var urlAdd = domainUrl + url +'/add';
    var postData = {
        fixedAssetsName:$("#fixedAssetsName").val(),
        fixedAssetsTypeId:fixedClassify,
        fixedAssetsState:$("#fixedAssetsState").val(),
        fixedAssetsDate:$("#fixedAssetsDate").val(),
        tid:1,
    };
    console.log(postData)
    postAjax(urlAdd,false,postData,function (data) {
        alert("添加成功");
        findAll(currentPage);
        $("#myModal").modal("hide");
    })
}
//查询
var pageNp = 1;
function findAll(currentPage) {
    var urlFindAll = domainUrl + url +'/findAll';
    var getData = {
        currentPage:currentPage,
        limit:limit,
    };
    var html = "<table id='aaa'><tbody> <tr> <th>资产名称</th> <th>资产类型</th> <th>资产状态</th> <th>最近更新时间</th> <th>操作</th> </tr> </tbody>";
    var tile='';
    getAjax(urlFindAll,false,getData,function (data) {
        pageList = Math.ceil(data.iTotalRecords / 9);
        var num = data.aaData.length;
        for (var i = 0; i < num; i++) {
            html += '<tr><td>' + data.aaData[i].fixedAssetsName + '</td><td>固定资产</td><td>正常使用</td><td>' + data.aaData[i].fixedAssetsDate + '</td>';
            html += '<td><i class="glyphicon glyphicon-list-alt" title="资产日志" onclick="log('+data.aaData[i].id+')" id="fixedDailyI" data-toggle="modal"  data-target="#myModalDaily"></i>' +
                '<i class="glyphicon glyphicon-pencil bianji" title="编辑" data-toggle="modal"  data-target="#myModal" onclick="make(' + data.aaData[i].id + ')"></i><i' +
                ' class="glyphicon glyphicon-remove shanchu" title="删除" onclick="del(' + data.aaData[i].id + ')"></i></td></tr>';

            tile += ' <div class="main-modules"><i class="glyphicon glyphicon-list-alt" title="资产日志" onclick="log('+data.aaData[i].id+')" id="fixedDailyI" data-toggle="modal"  style="margin-right: 60px;" data-target="#myModalDaily"></i>' +
                '<i style="margin-right: 30px;" class="glyphicon glyphicon-pencil bianji" title="编辑" data-toggle="modal"  data-target="#myModal"  onclick="make(' + data.aaData[i].id + ')"></i> ' +
                ' <i  class=" glyphicon glyphicon-remove shanchu"    onclick="del(' + data.aaData[i].id + ')" title="删除"></i>';
            tile +='<ul><li class="servePicture"><img src='+domainFile+'/assets/images/serve/fixed.png /></li></ul>';
            tile += '<ul id="zuo-font"><li>资产名称<span>' + data.aaData[i].fixedAssetsName + '</span></li><li>资产类型<span>固定资产</span></li>' +
                ' <li>资产状态<span>正常使用</span></li> <li>最近更新时间<span>' + data.aaData[i].fixedAssetsDate + '</span></li></ul></div>';
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
    var urlDel = domainUrl + url +'/del';
    var postData = {
        id:id,
    };
    postAjax(urlDel,false,postData,function (data) {
        console.log(JSON.stringify(data));
        alert("删除成功");
        findAll(currentPage);
    })
}
/*财产类别*/
var fixedClassify;
function fixedClassify() {
    var url = domainUrl + "/serve/fixed_assets_type/findTreeAll";
    var getData = {currentPage: currentPage, limit: limit};
    var html = '<option value="请选择">请选择</option>'
    getAjax(url, false, getData, function (data) {
        var num = data.aaData[0].length;
        for (var i = 0; i < num; i++) {
            html += '<option  value="' + data.aaData[0][i].id + '">' + data.aaData[0][i].fixedAssetsTypeName + '</option>';
        }
        $("#fixedAssetsTypeId").html(html);
        var type = document.getElementById('fixedAssetsTypeId');
        type.onchange = function () {
            var id = this.value;
            if (data.aaData[1] != undefined && id != "请选择") {
                for (var i = 0; i < data.aaData[1].length; i++) {
                    if ( data.aaData[1][i].tid !=null) {
                        $("#tr2").show();
                        fixedClassify2();
                        fixedClassify = null;
                    } else {
                        var selectIndex = document.getElementById("fixedAssetsTypeId").selectedIndex;//获得是第几个被选中了
                        var selectText = document.getElementById("fixedAssetsTypeId").options[selectIndex].value //获得被选中的项目
                        fixedClassify = selectText;
                        $("#tr2").hide();
                    }
                }
            } else {
                var selectIndex = document.getElementById("fixedAssetsTypeId").selectedIndex;//获得是第几个被选中了
                var selectText = document.getElementById("fixedAssetsTypeId").options[selectIndex].value //获得被选中的项目
                fixedClassify = selectText;
                $("#tr2").hide();
            }
        }
    })
}
function fixedClassify2() {
    var url = domainUrl + "/serve/fixed_assets_type/findTreeAll";
    var getData = {currentPage: currentPage, limit: limit};
    var html = '<option>请选择</option>'
    getAjax(url, false, getData, function (data) {
        var num = data.aaData[1].length;
        for (var i = 0; i < num; i++) {
            if (id == data.aaData[1][i].tid) {
                html += '<option  value="' + data.aaData[1][i].id + '">' + data.aaData[1][i].fixedAssetsTypeName + '</option>';
            }
        }
        $("#fixedAssetsTypeId2").html(html);
        var type = document.getElementById('fixedAssetsTypeId2');
        type.onchange = function () {
            var selectIndex = document.getElementById("fixedAssetsTypeId2").selectedIndex;//获得是第几个被选中了
            var selectText = document.getElementById("fixedAssetsTypeId2").options[selectIndex].value //获得被选中的项目
            fixedClassify = selectText;
        }
    })
}
function log(id) {
    var urlFindAll  = domainUrl + url+"/findAll";
    var getData = {
        currentPage:currentPage,
        limit:limit,
    }
    getAjax(urlFindAll,false,getData,function (data) {
        var num = data.aaData.length;
        for(var i =0 ; i< num; i++){
            if(id == data.aaData[i].id){
                $("#zichanname").text(data.aaData[i].fixedAssetsName)
            }
        }
    })
}