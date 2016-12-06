/**
 * Created by Administrator on 2016/12/5.
 */
var url = domainUrl + "/serve/older/";
$(function () {
    findAll(1);
    //全选反选
    var delId="";
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
    var obj = document.getElementsByName('del');
    //多选单选
    var dels='';
    tbodyDelId.onclick = function () {
        dels='';
        for(var i=0; i<obj.length; i++){
            if(obj[i].checked == true){
                dels+=obj[i].value+','; //如果选中，将value添加到变量s中
            }
        }
    };
})

//查询
var pageNp = 1;
function findAll(currentPage) {
    var urlFindAll = url + "findAll";
    var getData = {
        currentPage: currentPage,
        limit: limit
    }
    getAjax(urlFindAll, false, getData, function (data) {
        console.log(JSON.stringify(data))
        var num = data.iTotalRecords;
        var pageList = Math.ceil(data.iTotalRecords / 9);
        var d;
        var html = '<thead><tr><th><input type="checkbox" name="del" style="background:#f00;color:#0f0;border:#0ff;"></th> <th>ID</th> <th>姓名 </th> ' +
            '<th>性别</th> <th>入住时间</th> <th>护理人员</th> <th>大厦</th> <th>房间</th> <th>床位</th> <th>月费用</th> <th>民族</th> ' +
            '<th>出生日期</th> <th>自理情况</th> <th>护理级别</th> <th>身份证号</th> <th>状态</th> <th>出院日期</th> <th>操作</th></tr> </thead><tbody id="tbodyDelId">'
        for (var i = 0; i < num; i++) {
            d =  data.aaData[i];
            html += ' <tr> <td><input type="checkbox" name="del"></td> <td>'+d.organizationLoginId+'</td> <td>'+d.name+'</td> <td>'+d.sex+'</td> <td>'+d.checkInDate+'</td> <td>李四</td>' +
                ' <td>1号楼</td> <td>302</td> <td>2</td> <td>1000</td>  <td>汉</td> <td>1932年4月5日</td> <td>瘫痪</td> <td>二级</td>' +
                ' <td>370605198236425648</td> <td>良好</td> <td>2016年12月1日</td><td><input type="button" value="修改" onclick="make('+data.id+')"></td> </tr>';
        }
        html += '</tbody>';
        $("#oldTable").html(html);
        if (pageNp == 1) {
            pageNp = 2;
            $(".tcdPageCode").createPage({
                pageCount: 3,
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
        console.log(JSON.stringify(data))
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