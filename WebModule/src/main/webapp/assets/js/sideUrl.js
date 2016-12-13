/**
 * Created by horo on 2016/11/3.
 */
//全局变量
var currentPage = 1;
var limit = 9;
var findAllNum = 1;
//侧边栏样式
$(function () {
    $(".submenu").find("img").hide();
    $(".submenu li").click(function () {
        $(".submenu li").parents(".submenu").children("li").removeClass("back-color");
        $(this).addClass("back-color").siblings().removeClass("back-color");
        $(".submenu li").find("img").hide();
        $(this).find("img").show();
    })
    $("#sideList div").click(function () {
        $("#sideList div").parents("li").children(".link").removeClass("yellow");
        $(this).addClass("yellow").siblings().removeClass("yellow");
        $("#sideList div").parents("li").children(".link").children(".xialaImg").hide();
        $(this).children(".xialaImg").show();
    });

});
function modalClose() {
    //弹窗关闭
    $(".publicModal").show();
    $(".modalClose").click(function () {
        $(".publicModal").hide();
    })
}
function sideUrl(url) {
    var url = domainUrl+url;
    $.ajax({
        type: "get",
        url: url,
        success: function (data) {
            $("#main-show").html(data).css("background","-webkit-gradient(linear,0 50%,150% 50%,from(#060A28),to(#000))").addClass("animated fadeIn");
            setTimeout(function () {
                $("#main-show").removeClass("fadeIn")
            }, 1000);
            $("#tileShow").hide();
            $("#tableShow").hide();
            //表格/平铺显示
            if(findAllNum ==1){
                $("#tileShow").show();
            }
            else if (findAllNum ==2){
                $("#tableShow").show();
            }
        }
    });
}

// 入住弹窗
function modalUrl(floor,room,bed) {
    var urlGet = domainUrl + "/options/options";
    $.ajax({
        type:"get",
        url:urlGet,
        success:function (data) {
            $(".publicModal").html(data);
            $("#floor").val(floor);
            $("#room").val(room);
            $("#bed").val(bed);
            modalClose();
        }
    })
}
//老人信息弹窗
function oldUrl(is,bedId) {
    var urlGet = domainUrl + "/options/old";
    $.ajax({
        type:"get",
        url:urlGet,
        success:function (data) {
            $(".publicModal").html(data);
            $(".hideLi").hide();
            $("#bedId").val(bedId);
            modalClose();
            if(is == 1){
                $("#updateIs").hide();
            }else{
                $("#addIs").hide();
            }
        }
    })
}
//护理记录弹窗
function nurseUrl(is) {
    var urlGet = domainUrl + "/options/nurse";
    $.ajax({
        type:"get",
        url:urlGet,
        success:function (data) {
            $(".publicModal").html(data);
            modalClose();
            if(is == 1){
                $("#updateIs").hide();
            }else{
                $("#addIs").hide();
            }
        }
    })
}
//特殊服务弹窗
function specialUrl(is) {
    var urlGet = domainUrl + "/options/special";
    $.ajax({
        type:"get",
        url:urlGet,
        success:function (data) {
            $(".publicModal").html(data);
            modalClose();
            if(is == 1){
                $("#updateIs").hide();
            }else{
                $("#addIs").hide();
            }
        }
    })
}

// 费用结算弹窗
function tableUrl(id) {
    costOldId = id;
    var urlGet = domainUrl + "/options/cost";
    $.ajax({
        type:"get",
        url:urlGet,
        success:function (data) {
            $(".publicModal").html(data);
            modalClose();

        }
    })
}
// 员工信息弹窗
function staffInUrl(is) {
    var urlGet = domainUrl + "/options/staffIn";
    $.ajax({
        type:"get",
        url:urlGet,
        success:function (data) {
            $(".publicModal").html(data);
            modalClose();
            if(is == 1){
                $("#updateIs").hide();
            }else{
                $("#addIs").hide();
            }
        }
    })
}

//员工请假弹窗
function staffReUrl(is) {
    var urlGet = domainUrl + "/options/staffRe";
    $.ajax({
        type:"get",
        url:urlGet,
        success:function (data) {
            $(".publicModal").html(data);
            modalClose();
            if(is == 1){
                $("#updateIs").hide();
            }else{
                $("#addIs").hide();
            }
        }
    })
}
//月初始费弹窗
function monthStartUrl(is) {
    var urlGet = domainUrl + "/options/monthStart";
    $.ajax({
        type:"get",
        url:urlGet,
        success:function (data) {
            $(".publicModal").html(data);
            modalClose();
            if(is == 1){
                $("#updateIs").hide();
            }else{
                $("#addIs").hide();
            }
        }
    })
}

//入住初始费弹窗
function checkInStartUrl(is) {
    var urlGet = domainUrl + "/options/checkInStart";
    $.ajax({
        type:"get",
        url:urlGet,
        success:function (data) {
            $(".publicModal").html(data);
            modalClose();
            if(is == 1){
                $("#updateIs").hide();
            }else{
                $("#addIs").hide();
            }
        }
    })
}


//特殊服务费弹窗
function specialServeUrl(is) {
    var urlGet = domainUrl + "/options/specialServe";
    $.ajax({
        type:"get",
        url:urlGet,
        success:function (data) {
            $(".publicModal").html(data);
            modalClose();
            if(is == 1){
                $("#updateIs").hide();
            }else{
                $("#addIs").hide();
            }
        }
    })
}

//大厦添加费弹窗
function edificeUrl(is) {
    var urlGet = domainUrl + "/options/edifice";
    $.ajax({
        type:"get",
        url:urlGet,
        success:function (data) {
            $(".publicModal").html(data);
            modalClose();
            if(is == 1){
                $("#updateIs").hide();
            }else{
                $("#addIs").hide();
            }
        }
    })
}

//楼层添加费弹窗
function storeyUrl(is) {
    var urlGet = domainUrl + "/options/storey";
    $.ajax({
        type:"get",
        url:urlGet,
        success:function (data) {
            $(".publicModal").html(data);
            modalClose();
            if(is == 1){
                $("#updateIs").hide();
            }else{
                $("#addIs").hide();
            }
        }
    })
}

function many() {
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
}
