/**
 * Created by horo on 2016/11/3.
 */
//全局变量
var currentPage = 1;
var limit = 9;
var findAllNum = 1;
//侧边栏样式
$(function () {
    $(".submenu li").click(function () {
        $(".submenu li").parents(".submenu").children("li").removeClass("back-color");
        $(this).addClass("back-color").siblings().removeClass("back-color");
    })
    $("#sideList div").click(function () {
        $("#sideList div").parents("li").children(".link").removeClass("yellow");
        $(this).addClass("yellow").siblings().removeClass("yellow");
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
/*上传图片显示*/
function uploadShow(id) {
    $(".parentFileBox").remove();
    $("#aaaa").show();
    $("#box").show();
    $('#test').diyUpload({
        url:domainUrl+'/uploads',
        success:function( data ) {
            console.info( data );
        },
        error:function( err ) {
            console.info( err );
        }
    });
    $("#box").css("background-color","#ffffff").css("width","530px").css("min-height","30px").css("padding-bottom","20px").css("border-radius","3px");
    var html='<input type="button" value="确认添加" onclick="upload('+id+')">'
    $("#test").append(html);
    $("#aaaa").click(function () {
        $("#aaaa").hide();
        $("#box").hide();
    });
}
//表格/平铺显示
function tableTileShow(tile,html) {
    //平铺显示
    $("#tileShow").click(function () {
        findAllNum = 2;
        $(".main-module").html(tile);
        $(this).hide();
        $("#tableShow").show();
    })
    //表格显示
    $("#tableShow").click(function () {
        findAllNum = 1;
        $(".main-module").html(html);
        $(this).hide();
        $("#tileShow").show();
    })
}

/*上传图片显示*/
function uploadShow(id) {
    $(".parentFileBox").remove();
    $("#aaaa").show();
    $("#box").show();
    $('#test').diyUpload({
        url:domainUrl+'/uploads',
        success:function( data ) {
            console.info( data );
        },
        error:function( err ) {
            console.info( err );
        }
    });
    $("#box").css("background-color","#ffffff").css("width","530px").css("min-height","30px").css("padding-bottom","20px").css("border-radius","3px");
    var html='<input type="button" value="确认添加" onclick="upload('+id+')">'
    $("#test").append(html);
    $("#aaaa").click(function () {
        $("#aaaa").hide();
        $("#box").hide();
    });
}