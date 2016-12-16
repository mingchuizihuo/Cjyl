/**
 * Created by lgengjiajun on 2016/12/10.
 */
var url = domainUrl + "/serve/older_nurse_log/";
var delId='';
//护理记录
$(function () {
    findAll();
    $("#oldSelect").html(oldOption);
    $("#staffId").html(staffOption);
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
        physicalCondition:$("#physicalCondition").val(),
        nurseInfo:$("#nurseInfo").val(),
        nurseDate:$("#nurseDate").val(),
        staffId:$("#staffId").val(),
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
    var name='' ;
    var staffName='';
    getAjax(urlFindAll,false,getData,function (data) {
        var pageList = Math.ceil(data.iTotalRecords / 9);
        var num = data.aaData.length;
        var d;
        for(var i = 0; i < num ; i ++){
            d = data.aaData[i];
            name = findOldName(d.olderId);
            staffName = findStaffName(d.staffId)
            html += '<tr><td><input type="checkbox" name="del" value="'+d.id+'"></td><td>'+name+'</td><td>'+d.physicalCondition+'</td><td>'+d.nurseInfo+'</td><td>'+d.nurseDate+'</td><td>'+staffName+'</td>' +
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
                $("#physicalCondition").val(d.physicalCondition);
                $("#nurseInfo").val(d.nurseInfo);
                $(".nurseDate").val(d.nurseDate);
            }
        }
    })
}
function update() {
    var urlAdd = url+"update";
    var postData = {
        id:$("#id").val(),
        olderId:$("#oldSelect").val(),
        physicalCondition:$("#physicalCondition").val(),
        nurseInfo:$("#nurseInfo").val(),
        nurseDate:$("#nurseDate").val(),
        staffId:$("#staffId").val(),
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