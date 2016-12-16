/**
 * Created by Administrator on 2016/12/5.
 */
var url = domainUrl + "/serve/staff/";
var delId="";
$(function () {
    findAll(1);
})
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
            html += '<tr> <td><input type="checkbox" name="del" value="'+d.id+'"></td> <td>'+d.name+'</td> <td>'+d.sex+'</td> <td>'+d.birthday.substring(0,11)+'</td> <td>'+d.entryDate.substring(0,11)+'</td> <td>'+d.branch+'</td> <td>'+d.duty+'</td> <td>'+d.healthState+'</td> <td>'+d.tel+'</td> <td>'+d.marriage+'</td> <td>'+d.education+'</td> <td>'+d.major+'</td> <td>'+d.salary+'</td> <td><button onclick="make('+d.id+')">修改</button></td> </tr>';
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
        name:$("#name").val(),
        cardId:$("#cardId").val(),
        sex:1,
        birthday:$(".birthday").val(),
        entryDate:$(".entryDate").val(),
        branch:1,
        duty:1,
        healthState:$("#healthState").val(),
        tel:$("#tel").val(),
        marriage:1,
        education:$("#education").val(),
        major:$("#major").val(),
        salary:$("#salary").val()
    };
    console.log(postData)
    postAjax(urlAdd, false, postData, function (data) {
        alert("添加成功");
        $(".publicModal").hide();
        findAll(currentPage);
    })
}
//修改
function make(id) {
    staffInUrl();
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
                $("#id").val(id)
                $("#name").val(d.name);
                $("#birthday").val(d.birthday.substring(0,11));
                $("#cardId").val(d.cardId);
                $("#entryDate").val(d.entryDate.substring(0,11));
                $("#tel").val(d.tel);
                $("#healthState").val(d.healthState);
                $("#education").val(d.education);
                $("#major").val(d.major);
                $("#salary").val(d.salary);
            }
        }
    })
}
function update() {
    var urlUpdate = url +"update";
    var postData = {
        id:$("#id").val(),
        name:$("#name").val(),
        cardId:$("#cardId").val(),
        sex:$("#sex").val(),
        birthday:$("#birthday").val(),
        entryDate:$("#entryDate").val(),
        branch:$("#branch").val(),
        duty:$("#duty").val(),
        healthState:$("#healthState").val(),
        tel:$("#tel").val(),
        marriage:$("#marriage").val(),
        education:$("#education").val(),
        major:$("#major").val(),
        salary:$("#salary").val()
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