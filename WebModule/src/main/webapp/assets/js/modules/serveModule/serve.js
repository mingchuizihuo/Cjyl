/**
 * Created by horo on 2016/11/23.
 */
var url = "/serve/services";
$(function () {
    findAll(currentPage);
})
var pageList;
var pageNp =1;
//查询
function findAll(currentPage) {
    var urlFindAll = domainUrl + url + "/findAll";
    var getData = {
        currentPage:currentPage,
        limit:limit,
    }
    var html = "<table id='main-show-table'><tbody> <tr> <th>服务标题</th> <th>服务类别</th> <th>限制条件</th> <th>服务人数</th> <th>服务简介</th> <th>操作</th> </tr> </tbody>";
    var tile ='';
    var picture='';
    getAjax(urlFindAll,false,getData,function (data) {
        console.log(JSON.stringify(data))
        pageList = Math.ceil(data.iTotalRecords / limit);
        var num = data.aaData.length;
        for (var i = 0; i < num; i++) {
            //表格显示
            html += '<tr><td>' + data.aaData[i].serveName.substring(0,12) + '...</td><td>' + data.aaData[i].serveClassify.serveClassname + '</td><td>' + data.aaData[i].serveLimit + '</td><td>' + data.aaData[i].servePeoples + '</td>';
            html += '<td>' + data.aaData[i].serveBiref.substring(0,36) + '...</td><td><i title="添加计费类别" data-toggle="modal"  data-target="#myModalCost"' +
                ' onclick="costAdd(' + data.aaData[i].id + ')" class="glyphicon' +
                ' glyphicon-plus"' +
                '   ></i><i class="glyphicon glyphicon-pencil bianji" title="编辑" data-toggle="modal"  data-target="#myModal" onclick="make(' + data.aaData[i].id + ')"></i><i' +
                ' class="glyphicon glyphicon-remove shanchu" title="删除" onclick="del(' + data.aaData[i].id + ')"></i></td></tr>';
            //平铺显示
            if(data.aaData[i].mainPicture.pictureAddress ==null){
                picture = '<img  src='+domainFile+'/assets/images/serve/service.png onclick="uploadShow('+data.aaData[i].id+')"/>';
            }else{
                picture ='<img  src="'+domainFile+'/assets/uploadimg/'+data.aaData[i].mainPicture.pictureAddress+'"  onclick="uploadShow('+data.aaData[i].id+')" />';
            }
            tile += ' <div class="main-modules"><i title="添加计费类别" data-toggle="modal"  data-target="#myModalCost" onclick="costAdd(' + data.aaData[i].id + ')" class="glyphicon' +
                ' glyphicon-plus" style="margin-right:60px;"></i>' +
                '<i class="glyphicon glyphicon-pencil bianji" title="编辑" data-toggle="modal" style="margin-right: 30px;"  data-target="#myModal" onclick="make(' + data.aaData[i].id + ')"></i> ' +
                ' <i     class=" glyphicon glyphicon-remove shanchu"  onclick="del(' + data.aaData[i].id + ')" title="删除"></i>';
            tile +='<ul><li class="servePicture">'+picture+'</li></ul>';
            tile += '<ul id="zuo-font"><li>服务标题<span>' + data.aaData[i].serveName.substring(0,4) + '...</span></li><li>服务类别<span>' + data.aaData[i].serveClassify.serveClassname + '</span></li> <li>限制条件<span>' + data.aaData[i].serveLimit + '</span></li> <li>服务人数<span>' + data.aaData[i].servePeoples + '</span></li></ul>';
            tile += '<ul id="you-font1"><li>服务简介</li> </ul> <ul id="you-font2"> <li>' + data.aaData[i].serveBiref.substring(0,25) + '....</li></ul></div>';
        }
        html+='</table>';
        if(findAllNum ==1){
            $(".main-module").html(html);
        }else{
            $(".main-module").html(tile);
        }
        if(pageNp == 1){
            pageNp =2 ;
            $(".tcdPageCode").createPage({
                pageCount: pageList,
                current: currentPage,
                backFn: function (p) {
                    findAll(p)
                }
            });
        }
        //调用显示方法
        tableTileShow(tile,html);
    })
}
var serveClassify ;
//添加
function add() {
    var urlAdd = domainUrl + url +"/add";
    var postData = {
        valuationId:$("#serveCost").val(),
        price:$("#costPirce").val(),
        serveName: $("#mingcheng").val(),
        serveLimit: $("#tiaojian").val(),
        servePeoples: $("#renshu").val(),
        serveBiref: $("#jianjie").val(),
        serveClassify: serveClassify,
        agencyId: 1
    };
    postAjax(urlAdd, false, postData, function (data) {
        alert("添加成功");
        findAll(currentPage);
        $('#myModal').modal("hide");
    })
}
//修改
function make(id) {
    findAll(currentPage);
    $("#update-btn").show();
    $("#add-btn").hide();
    var url = domainUrl + "/serve/services/findAll";
    var getData = {};
    var  name, biref, limit, peoples, xid,price;
    getAjax(url, false, getData, function (data) {
        var num = data.aaData.length;
        for (var i = 0; i < num; i++) {
            if (id == data.aaData[i].id) {
                price = data.aaData[i].price;
                name = data.aaData[i].serveName;
                biref = data.aaData[i].serveBiref;
                limit = data.aaData[i].serveLimit;
                peoples = data.aaData[i].servePeoples;
                xid = data.aaData[i].id;
                $("#costPirce").val(price);
                $("#mingcheng").val(name);
                $("#tiaojian").val(limit);
                $("#jianjie").val(biref);
                $("#renshu").val(peoples);
                $("#xid").val(xid)
            }
        }
    })
}
function update() {
    /*暂时不加图片*/
    var serveName = $("#mingcheng").val();
    var serveBiref = $("#jianjie").val();
    var serveLimit = $("#tiaojian").val();
    var servePeoples = $("#renshu").val();
    var id = $("#xid").val();
    var urlUpdate = domainUrl + url +"/update";
    var postData = {
        id: id,
        // pictureAddress:pictureAddress,
        serveName: serveName,
        serveLimit: serveLimit,
        servePeoples: servePeoples,
        serveBiref: serveBiref,
        serveClassify: serveClassify,
        agencyId: 1
    };
    postAjax(urlUpdate, false, postData, function (data) {
        alert("修改成功")
        findAll(currentPage);
        $('#myModal').modal("hide");
    })
}
//删除
function del(id) {
    var urlDel = domainUrl + url +"/del";
    var postData = {id: id};
    postAjax(urlDel, false, postData, function (data) {
        alert("删除成功!")
        findAll(currentPage);
    })
}
//清空添加框
function clearModal() {
    $("#costPirce").val("");
    $("#mingcheng").val("");
    $("#jianjie").val("");
    $("#tiaojian").val("");
    $("#renshu").val("");
}
//添加计费信息
function cost() {
    var url = domainUrl + "/serve/service_classes_valuation/findAll"
    var getData = {currentPage:1,limit:1000};
    getAjax(url,false,getData,function (data) {
        var num = data.aaData.length;
        var html="<option>请选择</option>";
        for(var i =0;  i < num ; i++){
            html +='<option value="'+data.aaData[i].id+'">'+data.aaData[i].classesValuationName+'</option>';
        }
        $("#serveCost").html(html);
        $("#serveCost2").html(html);
    })
}
function costAdd(id) {
    $("#add-cost").click(function () {
        var url=domainUrl +'/serve/service_classes_valuation_relation/add';
        var serveCost = $("#serveCost2").val();
        var price = $("#costPirce2").val();
        var serveId = id;
        var postData = {
            valuationId:serveCost,
            price:price,
            serveId:serveId,
        };
        postAjax(url,false,postData,function (data) {
            alert("添加成功");
            findAll(currentPage);
            $('#myModalCost').modal("hide");
        })
    })
}
//上传图片
function upload(id) {
    $("#aaaa").hide();
    $("#box").hide();
    var url =domainUrl+'/serve/services_picture/adds';
    var postData ={
        serviceId:id,
        pictureAddress:pathList,
    };
    postAjax(url,false,postData,function (data) {
        alert("上传成功");
        findAll(currentPage);
    })
}