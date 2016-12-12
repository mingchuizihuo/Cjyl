/**
 * Created by lgengjiajun on 2016/12/10.
 */
var url = domainUrl + "/serve/older_cost/";
var delId='';
//特殊服务
$(function () {
    findAll();
    $("#oldSelect").html(oldOption);
    $("#serviceCharge").html(serveOption);
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
        organizationLoginId:1,
        olderId:$("#oldSelect").val(),
        serviceChargeId:$("#serviceCharge").val(),
        serviceChargeContext:$("#serviceChargeContext").val(),
        serviceChargeState:$("#serviceChargeState").val(),
        serviceChargeDate:$(".serviceChargeDate").val(),
        closeAnAccountDate:$(".closeAnAccountDate").val(),
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
    var name ='';
    var serve = '';
    getAjax(urlFindAll,false,getData,function (data) {
        console.log(JSON.stringify(data))
        var pageList = Math.ceil(data.iTotalRecords / 9);
        var num = data.aaData.length;
        var d;
        for(var i = 0; i < num ; i ++){
            d = data.aaData[i];
            name = findOldName(d.olderId);
             serve  = findServeName(d.serviceChargeId)
            html += '<tr><td><input type="checkbox" name="del" value="'+d.id+'"></td><td>'+name+'</td><td>'+serve+'</td><td>'+d.serviceChargeContext+'</td><td>'+d.serviceChargeState+'</td><td>'+d.serviceChargeDate+'</td>' +
                '<td>'+d.closeAnAccountDate+'</td><td><button onclick="make('+d.id+')">修改</button></td></tr>';

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
        console.log(JSON.stringify(data))
        var num = data.aaData.length;
        var d;
        for(var i = 0; i < num ; i ++){
            d = data.aaData[i];
            if(id == d.id){
                $("#serviceChargeContext").val(d.serviceChargeContext);
                $("#serviceChargeState").val(d.serviceChargeState);
                $(".serviceChargeDate").val(d.serviceChargeDate);
                $(".closeAnAccountDate").val(d.closeAnAccountDate);
            }
        }
    })
}
function update() {
    var urlAdd = url+"update";
    var postData = {
        id:$("#id").val(),
        organizationLoginId:1,
        olderId:$("#oldSelect").val(),
        serviceCharge:$("#serviceCharge").val(),
        serviceChargeContext:$("#serviceChargeContext").val(),
        serviceChargeState:$("#serviceChargeState").val(),
        serviceChargeDate:$("#serviceChargeDate").val(),
        closeAnAccountDate:$("#closeAnAccountDate").val(),
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