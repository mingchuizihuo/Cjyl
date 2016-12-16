/**
 * Created by lgengjiajun on 2016/12/10.
 */
var url = domainUrl + "/serve/older_initial_fee/";
var delId='';
//初始费信息
$(function () {
    findAll();
    $("#oldSelect").html(oldOption);
    $("#checkInInitCostId").html(checkOption);
    $("#openOldAdd").click(function () {
        $("#add").show();
        $("#update").hide();
        $(".tally").show();
    })
    $("#close").click(function () {
        $(".tally").hide();
    })
});
function add() {
    var urlAdd = url+"add";
    var postData = {
        olderId:$("#oldSelect").val(),
        checkInInitCostId:$("#checkInInitCostId").val(),
        checkInInitCostState:$("#checkInInitCostState").val(),
        initialFeeDate:$(".initialFeeDate").val(),
        closeAnAccount:$(".closeAnAccount").val(),
    };
    postAjax(urlAdd,false,postData,function (data) {
        $(".tally").hide();
        alert("添加成功");
        findAll();

    })
}
var pageNp=1;
function findAll() {
    var urlFindAll = url+"findAll";
    var getData = {
        currentPage:currentPage,
        limit:limit
    };
    var html = '';
    var name ='' ;
    var money='';
    getAjax(urlFindAll,false,getData,function (data) {
        var pageList = Math.ceil(data.iTotalRecords / 9);
        var num = data.aaData.length;
        var d;
        for(var i = 0; i < num ; i ++){
            d = data.aaData[i];
            name = findOldName(d.olderId);
            money = findCheckIn(d.checkInInitCostId);
            if(d.checkInInitCostState == 101){
                d.checkInInitCostState = "已交"
            }else if(d.checkInInitCostState == 102){
                d.checkInInitCostState = "未交"
            }
            html += '<tr><td><input type="checkbox" name="del" value="'+d.id+'"></td><td>'+name+'</td><td>'+money+'</td><td>'+d.checkInInitCostState+'</td><td>'+d.initialFeeDate+'</td><td>'+d.closeAnAccountDate+'</td>' +
                '<td><button onclick="make('+d.id+')">修改</button></td></tr>';

        }
        $("#tbodyDelId").html(html)
        many();
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
    $("#add").hide();
    $("#update").show();
    $(".tally").show();
    $("#id").val(id);
    var urlFindAll = url+"findAll";
    var getData = {
        currentPage:currentPage,
        limit:limit
    };
    getAjax(urlFindAll,false,getData,function (data) {
        var pageList = Math.ceil(data.iTotalRecords / 9);
        var num = data.aaData.length;
        var d;
        for(var i = 0; i < num ; i ++){
            d = data.aaData[i];
            if(id == d.id){
                $("#checkInInitCostId").val(d.checkInInitCostId);
                $("#checkInInitCostState").val(d.checkInInitCostState);
                $(".initialFeeDate").val(d.initialFeeDate);
                $(".closeAnAccount").val(d.closeAnAccount);
            }
        }
    })
}
function update() {
    var urlAdd = url+"update";
    var postData = {
        id:$("#id").val(),
        olderId:$("#oldSelect").val(),
        checkInInitCostId:$("#checkInInitCostId").val(),
        checkInInitCostState:$("#checkInInitCostState").val(),
        initialFeeDate:$(".initialFeeDate").val(),
        closeAnAccount:$(".closeAnAccount").val(),
    };
    postAjax(urlAdd,false,postData,function (data) {
        $(".tally").hide();
        alert("修改成功");
        findAll();
    })
}
function del() {
    var urlDel  = url + "dels";
    var postData  = {
        ids:delId,
    };
    postAjax(urlDel,false,postData,function (data) {
        alert("删除成功");
        findAll();
    })
}