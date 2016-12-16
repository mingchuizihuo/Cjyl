/**
 * Created by Administrator on 2016/12/5.
 */
var url = domainUrl + "/serve/month_charge/";
var delId="";
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
        var num = data.aaData.length;
        var pageList = Math.ceil(data.iTotalRecords / 9);
        var d;
        var html = '';
        for (var i = 0; i < num; i++) {
            d =  data.aaData[i];
            html += '<tr> <td><input type="checkbox" name="del" value="'+d.id+'"></td> <td>'+d.nursingGrades+'</td> <td>'+d.administrativeFee+'</td> <td>'+d.serviceCharge+'</td> <td>'+d.bedCost+'</td> <td>'+d.foodCost+'</td> <td>'+d.total+'</td> <td><button onclick="make('+d.id+')">修改</button></td> </tr>';
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
        nursingGrades:$("#nursingGrades").val(),
        administrativeFee:$("#administrativeFee").val(),
        serviceCharge:$("#serviceCharge").val(),
        bedCost:$("#bedCost").val(),
        foodCost:$("#foodCost").val(),
        total:$("#total").val()
    };
    postAjax(urlAdd, false, postData, function (data) {
        alert("添加成功");
        $(".publicModal").hide();
        findAll(currentPage);
    })
}
//修改
function make(id) {
    monthStartUrl();
    var urlFindAll = url + "findAll";
    var getData = {
        currentPage: currentPage,
        limit: limit
    };
    getAjax(urlFindAll,false,getData,function (data) {
        var num = data.aaData.length;
        var d;
        for(var i = 0; i < num ; i++){
            d =  data.aaData[i];
            if(d.id == id){
                $("#id").val(id);
                $("#nursingGrades").val(d.nursingGrades);
                $("#administrativeFee").val(d.administrativeFee);
                $("#serviceCharge").val(d.serviceCharge);
                $("#bedCost").val(d.bedCost);
                $("#foodCost").val(d.foodCost);
                $("#total").val(d.total);
            }
        }
    })
}
function update() {
    var urlUpdate = url +"update";
    var postData = {
        id:$("#id").val(),
        nursingGrades:$("#nursingGrades").val(),
        administrativeFee:$("#administrativeFee").val(),
        serviceCharge:$("#serviceCharge").val(),
        bedCost:$("#bedCost").val(),
        foodCost:$("#foodCost").val(),
        total:$("#total").val()
    };
    postAjax(urlUpdate,false,postData,function (data) {
        alert("修改成功");
        $(".publicModal").hide();
        findAll(currentPage);
    })
}
//删除
function dels() {
    var urlDel = url + "dels";
    var postData = {
        ids:delId
    }
    postAjax(urlDel,false,postData,function (data) {
        alert("删除成功");
        findAll(currentPage);
    })
}