/**
 * Created by horo on 2016/11/17.
 */
$(function () {
    findAll(currentPage);
    findName();
})
function add() {
    var url = domainUrl + '/serve/inspection_item_inspection/add';
    var postData = {
        inspectionId:name,
        inspectionItemId:1,
        inspectionItemValue:1,
        inspectionItemSelectValueId:1,
        servicePeopleId:1,
    }
    postAjax(url,false,postData,function (data) {
        alert("添加成功");
        $("#myModal").modal("hide")
    })
}
//查询
var pageNp =1;
function findAll(currentPage) {
    var url = domainUrl + '/serve/inspection_item_inspection/findAll';
    var getData = {
        currentPage:currentPage,
        limit:limit,
    };
    var html='<table><tbody><th>检查表名称</th><th>操作</th></tbody>';
    var tile='';
    getAjax(url,false,getData,function (data) {
        pageList = Math.ceil(data.iTotalRecords / limit);
        var num = data.aaData.length;
        var button='';
        for(var i = 0; i< num; i++){
            if((i%2 ==0)){
                button = '<input type="button" value="查看检查表" onclick="openSpan()" class="btn">'
            }else{
                button = '<input type="button" value="填写检查表" onclick="openInput()"class="btn">'
            }
            html +='<tr><td>检查表</td><td>'+button+'</td></tr>';

            tile += '  <div class="main-modules"> <i class=" glyphicon glyphicon-remove shanchu" style="display: block;" onclick="del(4)" title="删除"></i> ' +
                '<b>检查表</b> '+button+' </div>';
        }
        html+='</table>'
        if(findAllNum ==1){
            $(".main-module").html(html);
        }else{
            $(".main-module").html(tile);
        }
        if(pageNp == 1){
            pageNp =2 ;
            $(".tcdPageCode").createPage({
                pageCount: pageList,
                current: currentPage,
                backFn: function (p) {
                    findAll(p)
                }
            });
        }
        tableTileShow(tile,html)
    })
}
function del(id) {
    var url = domainUrl + "/serve/inspection_item_inspection/del";
    var postData = {id: id};
    postAjax(url, false, postData, function (data) {
        alert("删除成功")
        findAll(currentPage);
    })
}
var name;
function addName() {
    var type = document.getElementById('inspectionId');
    type.onchange = function () {
        var selectIndex = document.getElementById("inspectionId").selectedIndex;//获得是第几个被选中了
        var selectText = document.getElementById("inspectionId").options[selectIndex].value //获得被选中的项目
        name = selectText;
    }
}
function findName() {
    var url = domainUrl+'/serve/inspection/findAll';
    var getData = {
        currentPage:1,
        limit:100000,
    };
    var html='<option>请选择</option>';
    getAjax(url,false,getData,function (data) {
        var num = data.aaData.length;
        for(var i = 0; i<num;i++){
            html+='<option value="'+data.aaData[i].id+'">'+data.aaData[i].inspectionName+'</option>'
        }
        $("#inspectionId").html(html)
    })
}
//打开填表模态框
function openInput() {
    $("#myModal2").modal("show");
    // var url = domainUrl+'/serve/inspection/findAll';
    // var getData={
    //     currentPage:currentPage,
    //     limit:limit,
    // };
    // var html = "";
    // //根据得到的表id获取到它的表
    // getAjax(url,false,getData,function (data) {
    //     var num = data.aaData.length;
    //     var title='';
    //     var inputId = '';
    //     for (var i = 0; i <num ; i++){
    //        if(id == data.aaData[i].id){
    //            //加入标题
    //            title = data.aaData[i].inspectionName;
    //        }
    //     }
    //     $(".modalTitle").text(title);
    // })
}
//打开填表模态框
function openSpan() {
    $("#myModal3").modal("show");
}