/**
 * Created by horo on 2016/11/24.
 */
/**
 * Created by horo on 2016/11/11.
 */
/*资产表*/
var url ="/serve/cost";
//添加
$(function () {
    findAll(currentPage);
    costTypeClassify();
})
function clearModal() {
    $("#costNum").val("");
    $("#costInOut").val("");
}
function add() {
    var urlAdd = domainUrl + url +'/add';
    var postData = {
        costNum:$("#costNum").val(),
        costType:costTypeClassify,
        costInOut:$("#costInOut").val(),
        costDate:$("#costDate").val(),
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
    var html = "<table id='aaa'><tbody> <tr> <th>费用</th> <th>费用类型</th> <th>收入/支出</th> <th>费用产生时间</th> <th>操作</th> </tr> </tbody>";
    var tile='';
    var inOut;
    var costType;
    getAjax(urlFindAll,false,getData,function (data) {
        pageList = Math.ceil(data.iTotalRecords / 9);
        var num = data.aaData.length;
        for (var i = 0; i < num; i++) {
            if(data.aaData[i].costInOut == 1){
                inOut = "收入"
            }else{
                inOut = "支出"
            }
            if(data.aaData[i].costType ==1){
                costType = "服务收费";
            }else if(data.aaData[i].costType ==2){
                costType = "服装收费";
            }else if(data.aaData[i].costType ==3){
                costType = "餐饮费用";
            }else if(data.aaData[i].costType ==4){
                costType = "高级服务";
            }else if(data.aaData[i].costType ==5){
                costType = "主食";
            }else if(data.aaData[i].costType ==6){
                costType = "老人睡衣";
            }
            html += '<tr><td>$' + data.aaData[i].costNum + '</td><td>'+costType+'</td><td>'+inOut+'</td><td>' + data.aaData[i].costDate + '</td>';
            html += '<td><i class="glyphicon glyphicon-pencil bianji" title="编辑" data-toggle="modal"  data-target="#myModal" onclick="make(' + data.aaData[i].id + ')"></i><i' +
                ' class="glyphicon glyphicon-remove shanchu" title="删除" onclick="del(' + data.aaData[i].id + ')"></i></td></tr>';

            tile += ' <div class="main-modules">' +
                '<i style="margin-right: 30px;" class="glyphicon glyphicon-pencil bianji" title="编辑" data-toggle="modal"  data-target="#myModal"  onclick="make(' + data.aaData[i].id + ')"></i> ' +
                ' <i  class=" glyphicon glyphicon-remove shanchu"    onclick="del(' + data.aaData[i].id + ')" title="删除"></i>';
            tile +='<ul><li class="servePicture"><img src='+domainFile+'/assets/images/serve/room.png /></li></ul>';
            tile += '<ul id="zuo-font"><li>费用<span>$' + data.aaData[i].costNum + '</span></li><li>费用类型<span>'+costType+'</span></li>' +
                ' <li>收入/支出<span>'+inOut+'</span></li> <li>费用产生时间<span>' + data.aaData[i].costDate + '</span></li></ul></div>';
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
    var urlFindAll = domainUrl +url+'/findAll';
    var getData = {
        currentPage:currentPage,
        limit:limit,
    };
    getAjax(urlFindAll,false,getData,function (data) {
        var num = data.aaData.length;
        for(var i = 0; i< num ; i++){
            if(id == data.aaData[i].id){
                $("#costNum").val(data.aaData[i].costNum);
                $("#costInOut").val(data.aaData[i].costInOut);
                $("#costDate").val(data.aaData[i].costDate);
            }
        }
    })
}
//修改
function update() {
    var urlUpdate = domainUrl +url+'/update';
    var costNum = $("#costNum").val();
    var costInOut = $("#costInOut").val();
    var costDate = $("#costDate").val();
    var postData = {
        id:$("#lid").val(),
        costNum:$("#costNum").val(),
        costType:costTypeClassify,
        costInOut:$("#costInOut").val(),
        costDate:$("#costDate").val(),
};
    console.log(postData)
    postAjax(urlUpdate,false,postData,function (data) {
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
var costTypeClassify;
function costTypeClassify() {
    var url = domainUrl + "/serve/cost_type/findTreeAll";
    var getData = {currentPage: currentPage, limit: limit};
    var html = '<option value="请选择">请选择</option>'
    getAjax(url, false, getData, function (data) {
        var num = data.aaData[0].length;
        for (var i = 0; i < num; i++) {
            html += '<option  value="' + data.aaData[0][i].id + '">' + data.aaData[0][i].costTypeName + '</option>';
        }
        $("#costType").html(html);
        var type = document.getElementById('costType');
        type.onchange = function () {
            var id = this.value;
            if (data.aaData[1] != undefined && id != "请选择") {
                for (var i = 0; i < data.aaData[1].length; i++) {
                    if (data.aaData[1][i].tid !=null) {
                        $("#tr2").show();
                        costTypeClassify2(id);
                        costTypeClassify = null;
                    } else {
                        var selectIndex = document.getElementById("costType").selectedIndex;//获得是第几个被选中了
                        var selectText = document.getElementById("costType").options[selectIndex].value //获得被选中的项目
                        costTypeClassify = selectText;
                        $("#tr2").hide();
                    }
                }
            } else {
                var selectIndex = document.getElementById("costType").selectedIndex;//获得是第几个被选中了
                var selectText = document.getElementById("costType").options[selectIndex].value //获得被选中的项目
                costTypeClassify = selectText;
                $("#tr2").hide();
            }
        }
    })
}
function costTypeClassify2(id) {
    var url = domainUrl + "/serve/cost_type/findTreeAll";
    var getData = {currentPage: currentPage, limit: limit};
    var html = '<option>请选择</option>'
    getAjax(url, false, getData, function (data) {
        console.log(JSON.stringify(data));
        var num = data.aaData[1].length;
        for (var i = 0; i < num; i++) {
            if (id == data.aaData[1][i].tid) {

                html += '<option  value="' + data.aaData[1][i].id + '">' + data.aaData[1][i].costTypeName + '</option>';
            }
        }
        $("#costType2").html(html);
        var type = document.getElementById('costType2');
        type.onchange = function () {
            var selectIndex = document.getElementById("costType2").selectedIndex;//获得是第几个被选中了
            var selectText = document.getElementById("costType2").options[selectIndex].value //获得被选中的项目
            costTypeClassify = selectText;
        }
    })
}