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
    })
})

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
function modalUrl(url) {
    var urlGet = domainUrl + url;
    $.ajax({
        type:"get",
        url:urlGet,
        success:function (data) {
            console.log(data)
            $(".publicModal").html(data);
        }
    })
}
function startSideUrl(url) {
    var url = domainUrl+url;
    $.ajax({
        type: "get",
        url: url,
        success: function (data) {
            $("#main-show").html(data);
        }
    });
}
