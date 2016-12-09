/**
 * Created by Administrator on 2016/12/5.
 */
var url = domainUrl + "/serve/staff_leave_log/";
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
        console.log(JSON.stringify(data));
        var num = data.iTotalRecords;
        var pageList = Math.ceil(data.iTotalRecords / 9);
        var d;
        var html = '';
        for (var i = 0; i < num; i++) {
            d =  data.aaData[i];
            html += '<tr> <td><input type="checkbox" name="del" value="'+d.id+'"></td> <td>'+d.staffId+'</td> <td>'+d.leaveDate.substring(0,11)+'</td> <td>'+d.accountFor+'</td> <td>'+d.handleStaffId+'</td> <td>'+d.handleDate.substring(0,11)+'</td> <td><button onclick="make('+d.id+')">修改</button></td> </tr>';
        }
        $("#tbodyDelId").html(html);
        //全选反选
        var CheckAll = document.getElementById('All');
        var tbodyDelId = document.getElementById('tbodyDelId');
        var CheckBox = tbodyDelId.getElementsByTagName('input');
        CheckAll.onclick = function () {
            if ($("#All").is(':checked') == true) {
                for (i = 0; i < CheckBox.length; i++) {
                    CheckBox[i].checked = true;
                    delId += CheckBox[i].value +",";
                }
            } else {
                for (i = 0; i < CheckBox.length; i++) {
                    CheckBox[i].checked = false;
                    delId ="";
                }
            };
        };
        //多选单选
        var obj = document.getElementsByName('del');
        tbodyDelId.onclick = function () {
            for(var i=0; i<obj.length; i++){
                if(obj[i].checked == true){
                    delId+=obj[i].value+','; //如果选中，将value添加到变量s中
                }
            }
        };
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
        staffId:$("#staffId").val(),
        leaveDate:$("#leaveDate").val(),
        accountFor:$("#accountFor").val(),
        handleStaffId:$("#handleStaffId").val(),
        handleDate:$("#handleDate").val()
    };
    postAjax(urlAdd, false, postData, function (data) {
        alert("添加成功");
        $(".publicModal").hide();
        findAll(currentPage);
    })
}
//修改
function make(id) {
    staffReUrl();
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
                $("#staffId").val(d.staffId);
                $("#leaveDate").val(d.leaveDate.substring(0,11));
                $("#accountFor").val(d.accountFor);
                $("#handleStaffId").val(d.handleStaffId);
                $("#handleDate").val(d.handleDate.substring(0,11));
                $("#id").val(id);
            }
        }
    })
}
function update() {
    var urlUpdate = url +"update";
    var postData = {
        id:$("#id").val(),
        organizationLoginId:1,
        staffId:$("#staffId").val(),
        leaveDate:$("#leaveDate").val(),
        accountFor:$("#accountFor").val(),
        handleStaffId:$("#handleStaffId").val(),
        handleDate:$("#handleDate").val()
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
    };
    postAjax(urlDel,false,postData,function (data) {
        alert("删除成功");
        findAll(currentPage);
    })
}