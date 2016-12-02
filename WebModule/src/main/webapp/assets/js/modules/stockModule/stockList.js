/**
 * Created by horo on 2016/11/24.
 */
/**
 * Created by horo on 2016/11/11.
 */
/*资产表*/
var url ="/serve/stock";
//添加
$(function () {
    findAll(currentPage);
    stockTypeClassify();
})
function clearModal() {
    $("#stockName").val("");
    $("#stockNum").val("");
}
function add() {
    var urlAdd = domainUrl + url +'/add';
    var postData = {
        stockName:$("#stockName").val(),
        stockTypeId:stockTypeClassify,
        stockNum:$("#stockNum").val(),
        stockUpdateDate:$("#stockUpdateDate").val(),
    };
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
    var html = "<table id='aaa'><tbody> <tr> <th>库存名称</th> <th>库存数量</th> <th>库存状态</th> <th>入库时间</th> <th>操作</th> </tr> </tbody>";
    var tile='';
    getAjax(urlFindAll,false,getData,function (data) {
        pageList = Math.ceil(data.iTotalRecords / 9);
        console.log(JSON.stringify(data))
        var num = data.aaData.length;
        for (var i = 0; i < num; i++) {
            html += '<tr><td>' + data.aaData[i].stockName + '</td><td>'+data.aaData[i].stockNum+'</td><td>库存充足</td><td>' + data.aaData[i].stockUpdateDate + '</td>';
            html += '<td><i class="glyphicon glyphicon-list-alt" title="资产日志" onclick="log('+data.aaData[i].id+')" id="fixedDailyI" data-toggle="modal"  data-target="#myModalDaily"></i>' +
                '<i class="glyphicon glyphicon-pencil bianji" title="编辑" data-toggle="modal"  data-target="#myModal" onclick="make(' + data.aaData[i].id + ')"></i><i' +
                ' class="glyphicon glyphicon-remove shanchu" title="删除" onclick="del(' + data.aaData[i].id + ')"></i></td></tr>';

            tile += ' <div class="main-modules"><i class="glyphicon glyphicon-list-alt" title="资产日志" onclick="log('+data.aaData[i].id+')"  id="fixedDailyI" data-toggle="modal"  style="margin-right: 60px;" data-target="#myModalDaily"></i>' +
                '<i style="margin-right: 30px;" class="glyphicon glyphicon-pencil bianji" title="编辑" data-toggle="modal"  data-target="#myModal"  onclick="make(' + data.aaData[i].id + ')"></i> ' +
                ' <i  class=" glyphicon glyphicon-remove shanchu"    onclick="del(' + data.aaData[i].id + ')" title="删除"></i>';
            tile +='<ul><li class="servePicture"><img src='+domainFile+'/assets/images/serve/room.png /></li></ul>';
            tile += '<ul id="zuo-font"><li>资产名称<span>' + data.aaData[i].stockName + '</span></li><li>库存数量<span>'+data.aaData[i].stockNum+'</span></li>' +
                ' <li>库存状态<span>库存充足</span></li> <li>入库时间<span>' + data.aaData[i].stockUpdateDate + '</span></li></ul></div>';
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
                $("#stockName").val(data.aaData[i].stockName);
                $("#stockNum").val(data.aaData[i].stockNum);
                $("#stockUpdateDate").val(data.aaData[i].stockUpdateDate);
            }
        }
    })
}
//修改
function update() {
    var urlUpdate = domainUrl +url+'/update';
    var postData = {
        id:$("#lid").val(),
        stockName:$("#stockName").val(),
        stockNum: $("#stockNum").val(),
        stockUpdateDate:$("#stockUpdateDate").val(),
    };
    console.log(postData)
    postAjax(urlUpdate,false,postData,function (data) {
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
var stockTypeClassify;
function stockTypeClassify() {
    var url = domainUrl + "/serve/stock_type/findTreeAll";
    var getData = {currentPage: currentPage, limit: limit};
    var html = '<option value="请选择">请选择</option>'
    getAjax(url, false, getData, function (data) {
        var num = data.aaData[0].length;
        for (var i = 0; i < num; i++) {
            html += '<option  value="' + data.aaData[0][i].id + '">' + data.aaData[0][i].stockTypeName + '</option>';
        }
        $("#stockTypeId").html(html);
        var type = document.getElementById('stockTypeId');
        type.onchange = function () {
            var id = this.value;
            if (data.aaData[1] != undefined && id != "请选择") {
                for (var i = 0; i < data.aaData[1].length; i++) {
                    if (data.aaData[1][i].tid != null) {
                        $("#tr2").show();
                        stockTypeClassify2(id);
                        stockTypeClassify = null;
                    } else {
                        var selectIndex = document.getElementById("stockTypeId").selectedIndex;//获得是第几个被选中了
                        var selectText = document.getElementById("stockTypeId").options[selectIndex].value //获得被选中的项目
                        stockTypeClassify = selectText;
                        $("#tr2").hide();
                    }
                }
            } else {
                var selectIndex = document.getElementById("stockTypeId").selectedIndex;//获得是第几个被选中了
                var selectText = document.getElementById("stockTypeId").options[selectIndex].value //获得被选中的项目
                stockTypeClassify = selectText;
                $("#tr2").hide();
            }
        }
    })
}
function stockTypeClassify2(id) {
    var url = domainUrl + "/serve/stock_type/findTreeAll";
    var getData = {currentPage: currentPage, limit: limit};
    var html = '<option>请选择</option>'
    getAjax(url, false, getData, function (data) {
        var num = data.aaData[1].length;
        for (var i = 0; i < num; i++) {
            if (id == data.aaData[1][i].tid) {
                html += '<option  value="' + data.aaData[1][i].id + '">' + data.aaData[1][i].stockTypeName + '</option>';
            }
        }
        $("#stockTypeId2").html(html);
        var type = document.getElementById('stockTypeId2');
        type.onchange = function () {
            var selectIndex = document.getElementById("stockTypeId2").selectedIndex;//获得是第几个被选中了
            var selectText = document.getElementById("stockTypeId2").options[selectIndex].value //获得被选中的项目
            stockTypeClassify = selectText;
        }
    })
}
function log(id) {
    var urlFindAll  = domainUrl + url + "/findAll";
    var getData = {
        currentPage:currentPage,
        limit:limit,
    }
    getAjax(urlFindAll,false,getData,function (data) {
        var num = data.aaData.length;
    for(var i = 0; i <num ; i++){
        if(id == data.aaData[i].id){
            $("#stockNameLog").text(data.aaData[i].stockName);
            $("#stockNumLog").text(data.aaData[i].stockNum);
            $("#stockDateLog").text(data.aaData[i].stockUpdateDate+"出库使用");
        }
    }
    })
}