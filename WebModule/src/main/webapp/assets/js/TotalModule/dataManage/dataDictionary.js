/**
 * Created by Administrator on 2016/12/5.
 */
var url = domainUrl + "/serve/data_dictionary/";
$(function () {
    findAll(1);
})
//查询
function findAll(currentPage) {
    var urlFindAll = url + "findTreeAll";
    var getData = {
        currentPage: currentPage,
        limit: limit
    };
    getAjax(urlFindAll, false, getData, function (data) {
        // console.log(JSON.stringify(data))
        var num = data.aaData[0].length;
        var d;
        var html = '';
        for (var i = 0; i < num; i++) {
            d =  data.aaData[0][i];
            html += '<li onclick="dataSon('+d.id+')">'+d.dataName+'</li>';
        }
        $("#dataFather").html(html);
    })
}
function dataSon(id) {
    $("#leaveSon").val(id);
    var urlFindAll = url + "findTreeAll";
    var getData = {
        currentPage: currentPage,
        limit: limit
    };
    getAjax(urlFindAll, false, getData, function (data) {
        var num = data.aaData[1].length;
        var d;
        var html = '';
        for (var i = 0; i < num; i++) {
            d =  data.aaData[1][i];
            if(id == d.tid){
                html += '<li>'+d.dataName+'</li>';
            }
        }
        $("#dataSon").html(html);
    })
}
//添加
function add() {
    var urlAdd = url + "add";
    var postData = {
        organizationLoginId:1,
        dataName:$("#dataName").val(),
        dataLevel:0
    };
    console.log(postData)
    postAjax(urlAdd, false, postData, function (data) {
        alert("添加成功");
        findAll(currentPage);
    })
}
function addSon() {
    var urlAdd = url + "add";
    var postData = {
        organizationLoginId:1,
        dataName:$("#dataNameSon").val(),
        dataLevel:1,
        tid:$("#leaveSon").val()
    };
    console.log(postData)
    postAjax(urlAdd, false, postData, function (data) {
        alert("添加成功");
        dataSon($("#leaveSon").val());
    })
}
//修改
function make(id) {

}
function update() {
    var urlUpdate = url +"update";
    var postData = {

    };
    postAjax(urlUpdate,false,postData,function (data) {
        alert("修改成功");
        findAll(currentPage);
    })
}
//删除
function del(id) {
    var urlDel = url + "del";
    var postData = {
        id:id
    };
    postAjax(urlDel,false,postData,function (data) {
        alert("删除成功");
        findAll(currentPage);
    })
}