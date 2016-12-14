var url = domainUrl +  '/serve/login/';
var  delId = '';
$(function () {
   findAll();
});
function add() {
    var urlAdd = url + "add";
    var postData = {
        organizationLoginId:OStaffId,
        loginName:$("#staffName").val(),
        loginPassword:$("#staffPass").val(),
        loginType:$("#staffType").val()
    };
    console.log(postData)
    postAjax(urlAdd,false,postData,function (data) {
        alert("添加成功")
    })
}
function findAll() {
    var urlFindAll = url + "findAll";
    var getData ={
        currentPage:currentPage,
        limit:limit
    } ;
    getAjax(urlFindAll,false,getData,function (data) {
        console.log(JSON.stringify(data))
        var num = data.aaData.length;
        var html ='';
        var d='';
        for(var i = 0; i <num ; i++){
            d = data.aaData[i];
            switch (d.loginType){
                case 125:
                    d.loginType = "管理员";
                    break;
                case 126:
                    d.loginType = "员工";
                    break;
                case 127:
                    d.loginType = "游客";
                    break;
            }
            html+='  <tr> <td><input type="checkbox" name="del" value="'+d.id+'"></td> <td>'+d.loginName+'</td> <td><span id="block'+d.id+'" style="display: none;">'+d.loginPassword+'</span><span id="none'+d.id+'">********</span></td> ' +
                '<td>'+d.loginType+'</td> <td><button id="button'+d.id+'" onmousedown="look('+d.id+')">查看</button><button id="hide'+d.id+'" style="display: none" onmouseup ="hide('+d.id+')">隐藏</button></td> </tr>';
        }
        $("#tbodyDelId").html(html);
        many();
    })
}
function look(id) {
    var hidePass = "block"+id;
    var showPass = "none"+id;
    var button = "button"+id;
    var hide = "hide"+id;
    $("#"+hidePass+"").show();
    $("#"+showPass+"").hide();
    $("#"+button+"").hide();
    $("#"+hide+"").show();

}
function hide(id) {
    var hidePass = "block"+id;
    var showPass = "none"+id;
    var button = "button"+id;
    var hide = "hide"+id;
    $("#"+hidePass+"").hide();
    $("#"+showPass+"").show();
    $("#"+hide+"").hide();
    $("#"+button+"").show();

}
function del() {
    var urlDel = url + "dels";
    var postData = {
        id:delId
    };
    console.log(postData)
    postAjax(urlDel,false,postData,function (data) {
        alert("删除成功");
        findAll();
    })
}