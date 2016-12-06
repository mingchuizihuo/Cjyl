/**
 * Created by Administrator on 2016/12/5.
 */
var url = domainUrl + "/serve/check_in_init_cost/";
$(function () {
    findAll(1);
})
//查询
var pageNp = 1;
function findAll(currentPage) {
    var urlFindAll = url + "findAll";
    console.log(urlFindAll)
    var getData = {
        currentPage: currentPage,
        limit: limit
    }
    getAjax(urlFindAll, false, getData, function (data) {
        console.log(JSON.stringify(data))
        var num = data.iTotalRecords;
        var pageList = Math.ceil(data.iTotalRecords / 9);
        var d;
        var html = '';
        for (var i = 0; i < num; i++) {
            d =  data.aaData[i];
            html += '';
        }
        $("#oldTable").html(html);
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

    }
    postAjax(urlAdd, false, postData, function (data) {
        console.log(JSON.stringify(data));
        alert("添加成功");
    })
}
//修改
function make(id) {

}
function update() {
    var urlUpdate = url +"update";
    var postData = {

    }
    postAjax(urlUpdate,false,postData,function (data) {
    alert("修改成功");
    })
}
//删除
function del(id) {
    var urlDel = url + "del";
    var postData = {
        id:id
    }
    postAjax(urlDel,false,postData,function (data) {
        alert("删除成功");
    })
}