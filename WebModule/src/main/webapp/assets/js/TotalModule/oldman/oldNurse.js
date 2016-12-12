/**
 * Created by Administrator on 2016/12/5.
 */
var url = domainUrl + "/serve/older_nurse_log/";
$(function () {
    findAll(1);
});
//查询
var pageNp = 1;
function findAll(currentPage) {
    var urlFindAll = url + "findAll";
    var getData = {
        currentPage: currentPage,
        limit: 8
    };
    getAjax(urlFindAll, false, getData, function (data) {
        console.log(JSON.stringify(data));
        var num = data.aaData.length;
        var pageList = Math.ceil(data.iTotalRecords / 9);
        var d;
        var html = '';
        for (var i = 0; i < num; i++) {
            d =  data.aaData[i];
            html += ' <div class="box"> <ul> <li><span>编号</span><input type="text" value="'+d.olderId+'"></li> <li><span>健康状况</span><input type="text" value="'+d.physicalCondition+'"></li> ' +
                '<li><span>用药情况</span><input type="text" value="'+d.nurseInfo+'"> </li> <li><span>护理时间</span><input type="text" value="'+d.nurseDate.substring(0,11)+'"></li> <li><span>护理人员</span><input type="text" value="'+d.staffId+'"></li> ' +
                '<div class="clearfix"></div> <button onclick="del('+d.id+')">删除</button></ul> </div>';
        }
        $(".specialServe").html(html);
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
        physicalCondition:$("#physicalCondition").val(),
        nurseInfo:$("#nurseInfo").val(),
        nurseDate:$(".nurseDate").val(),
        staffId:$("#staffId").val()
    };
    postAjax(urlAdd, false, postData, function (data) {
        alert("添加成功");
        $(".publicModal").hide();
        findAll(currentPage);
    })
}
//修改
function make(id) {
    oldUrl();
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

            }
        }
    })
}
function update() {
    var urlUpdate = url +"update";
    var postData = {

    }
    postAjax(urlUpdate,false,postData,function (data) {

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
        findAll(currentPage);
    })
}
