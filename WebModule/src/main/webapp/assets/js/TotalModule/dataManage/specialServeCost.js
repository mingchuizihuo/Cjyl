/**
 * Created by Administrator on 2016/12/5.
 */
var url = domainUrl + "/serve/older_cost/";
var delId='';
$(function () {
    findAll(1);
});
//查询
var pageNp = 1;
function findAll(currentPage) {
    var urlFindAll = url + "findAll";
    var getData = {
        currentPage: currentPage,
        limit: limit
    };
    getAjax(urlFindAll, false, getData, function (data) {
        console.log(JSON.stringify(data))
        var num = data.iTotalRecords;
        var pageList = Math.ceil(data.iTotalRecords / 9);
        var d;
        var html = '';
        for (var i = 0; i < num; i++) {
            d =  data.aaData[i];
            html += '<tr> <td><input type="checkbox" name="del" value="'+d.id+'"></td> <td>'+d.serviceCharge+'</td><td>'+d.serviceChargeContext+'</td> <td>'+d.serviceChargeState+'</td> <td>'+d.serviceChargeDate+'</td><td>'+d.closeAnAccountDate+'</td> <td><button onclick="make('+d.id+')">修改</button></td> </tr>';
        }
        $("#tbodyDelId").html(html);
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
//添加
function add() {
    var urlAdd = url + "add";
    var postData = {
        organizationLoginId:1,
        olderId:1,
        serviceCharge:$("#serviceCharge").val(),
        serviceChargeContext:$("#serviceChargeContext").val(),
        serviceChargeState:$("#serviceChargeState").val(),
        serviceChargeDate:$("#serviceChargeDate").val(),
        closeAnAccountDate:$("#closeAnAccountDate").val()
    };
    postAjax(urlAdd, false, postData, function (data) {
        alert("添加成功");
        $(".publicModal").hide();
        findAll(currentPage);
    })
}
//修改
function make(id) {
    specialServeUrl();
    var urlFindAll = url + "findAll";
    var getData = {
        currentPage: currentPage,
        limit: limit
    };
    getAjax(urlFindAll,false,getData,function (data) {
        var num = data.iTotalRecords;
        var d;
        for(var i = 0; i < num ; i++){
            d =  data.aaData[i];
            if(d.id == id){
                $("#id").val(id);
                $("#serviceCharge").val(d.serviceCharge);
                $("#serviceChargeContext").val(d.serviceChargeContext);
                $("#serviceChargeState").val(d.serviceChargeState);
                $("#serviceChargeDate").val(d.serviceChargeDate);
                $("closeAnAccountDate").val(d.closeAnAccountDate);
            }
        }
    })
}
function update() {
    var urlUpdate = url +"update";
    var postData = {
        id:$("#id").val(),
        organizationLoginId:1,
        olderId:1,
        serviceCharge:$("#serviceCharge").val(),
        serviceChargeContext:$("#serviceChargeContext").val(),
        serviceChargeState:$("#serviceChargeState").val(),
        serviceChargeDate:$("#serviceChargeDate").val(),
        closeAnAccountDate:$("#closeAnAccountDate").val()
    };
    postAjax(urlUpdate,false,postData,function (data) {
        alert("修改成功");
        $(".publicModal").hide();
        findAll(currentPage);
    })
}
//删除
function dels(id) {
    var urlDel = url + "dels";
    var postData = {
        ids:delId
    };
    postAjax(urlDel,false,postData,function (data) {
        alert("删除成功");
        findAll(currentPage);
    })
}