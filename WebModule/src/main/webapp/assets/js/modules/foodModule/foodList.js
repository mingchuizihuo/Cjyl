/**
 * Created by horo on 2016/11/3.
 */
/*菜品列表*/
/*添加*/
$(function () {

    findAll(currentPage);
    foodClassify();
    foodMeterial();
    foodNutriment();
})
function clearModal() {
    $("#dishesName").val("");
    $("#dishesSuitPeople").val("");
    $("#dishesWeight").val("");

}
function add() {
    var url = domainUrl+"/serve/dishes/add";
    var dishesName = $("#dishesName").val();
    var dishesTaste = $("#dishesTaste").val();
    var dishesAllergen = $("#dishesAllergen").val();
    var dishesSuitPeople = $("#dishesSuitPeople").val();
    var dishesNutritiveValue = $("#dishesNutritiveValue").val();
    var dishesWeight = $("#dishesWeight").val();
    var postData = {
        dishesName:dishesName,
        dishesTaste:foodClassify,
        dishesAllergen:foodMeterial,
        dishesSuitPeople:dishesSuitPeople,
        dishesNutritiveValue:foodNutriment,
        dishesWeight:dishesWeight
    };
    console.log(postData)
    postAjax(url,false,postData,function (data) {
        alert("添加成功");
        findAll(currentPage);
        $("#myModal").modal("hide");
    })
}
/*查询*/
var pageNp = 1;
function findAll(currentPage) {
    var url = domainUrl+"/serve/dishes/findAll";
    var getData={currentPage:currentPage,limit:9,};
    var tile='';
    var html  = '<table><tbody><th>菜品名称</th><th>菜品口味</th><th>过敏原</th><th>营养价值</th><th>适合人群</th><th>重量</th><th>操作</th></tbody>'
    getAjax(url,false,getData,function (data) {
        pageList = Math.ceil(data.iTotalRecords / 9);
        console.log(JSON.stringify(data))
        var num = data.aaData.length;
        var picture;
        for(var i = 0; i <num ; i++){
            html+='<tr><td>' + data.aaData[i].dishesName + '</td><td>' + data.aaData[i].dishesTaste + '</td><td>' + data.aaData[i].dishesAllergen + '</td>' +
                '<td>' + data.aaData[i].dishesNutritiveValue + '</td><td>' + data.aaData[i].dishesSuitPeople + '</td><td>'+data.aaData[i].dishesWeight+'</td>' +
                '<td><i class="glyphicon glyphicon-pencil bianji" title="编辑"  style="margin-right: 30px;" data-toggle="modal"  data-target="#myModal"   onclick="make(' + data.aaData[i].id + ')"></i>' +
                '<i class=" glyphicon glyphicon-remove shanchu"    onclick="del(' + data.aaData[i].id + ')" title="删除"></td></tr>';

            if(data.aaData[i].mainPicture.pictureAddress ==null){
                picture = '<img  src='+domainFile+'/assets/images/serve/service.png onclick="uploadShow('+data.aaData[i].id+')"/>';
            }else{
                picture ='<img  src="'+domainFile+'/assets/uploadimg/'+data.aaData[i].mainPicture.pictureAddress+'" onclick="uploadShow('+data.aaData[i].id+')" />';
            }
            tile += ' <div class="main-modules"><i class="glyphicon glyphicon-pencil bianji" title="编辑"  style="margin-right: 30px;" data-toggle="modal"  data-target="#myModal"   onclick="make(' + data.aaData[i].id + ')"></i> ' +
                ' <i class=" glyphicon glyphicon-remove shanchu"    onclick="del(' + data.aaData[i].id + ')" title="删除"></i>';
            tile +='<ul><li class="servePicture">'+picture+'</li></ul>';
            tile += '<ul id="zuo-font"><li>菜品名称<span>' + data.aaData[i].dishesName + '</span></li><li>菜品口味<span>' + data.aaData[i].dishesTaste + '</span></li>' +
                ' <li>过敏原<span>' + data.aaData[i].dishesAllergen + '</span></li> <li>营养价值<span>' + data.aaData[i].dishesNutritiveValue + '</span></li></ul>';
            tile += '<ul id="you-font1"><li>适合人群</li><li>重量</li> </ul> <ul id="you-font2"> <li>' + data.aaData[i].dishesSuitPeople + '</li><li>'+data.aaData[i].dishesWeight+'</li></ul></div>';
        }
        html+='</table>';
        if(findAllNum ==1){
            $(".main-module").html(html);
        }else{
            $(".main-module").html(tile);
        }
        tableTileShow(tile,html)
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
/*删除*/
function del(id) {
    var url = domainUrl+"/serve/dishes/del";
    var postData = {
        id:id,
    }
    postAjax(url,false,postData,function (data) {
        alert("删除成功");
        $("#shanchu-yes").show();
        $("#shanchu-no").hide();
        findAll(currentPage);
    })
}
/*修改*/
function make(id) {
    $("#fid").val(id);
    $("#update-btn").show();
    $("#add-btn").hide();
    var url = domainUrl +'/serve/dishes/findAll';
    var getData = {
        currentPage:currentPage,
        limit:limit,
    };
    getAjax(url,false,getData,function (data) {
        var num = data.aaData.length;
        for(var i = 0; i< num ; i++){
            if(id == data.aaData[i].id){
                $("#dishesName").val(data.aaData[i].dishesName);
                $("#dishesSuitPeople").val(data.aaData[i].dishesSuitPeople);
                $("#dishesWeight").val(data.aaData[i].dishesWeight);
            }
        }
    })
}
function clearModal() {
    $("#fixedTypeName").val("");
}
function update() {
    var url = domainUrl+"/serve/dishes/update";
    var dishesName = $("#dishesName").val();
    var dishesTaste = $("#dishesTaste").val();
    var dishesAllergen = $("#dishesAllergen").val();
    var dishesSuitPeople = $("#dishesNutritiveValue").val();
    var dishesNutritiveValue = $("#dishesSuitPeople").val();
    var dishesWeight = $("#dishesWeight").val();
    var postData = {
        id:id,
        dishesName:dishesName,
        dishesTaste:dishesTaste,
        dishesAllergen:dishesAllergen,
        dishesSuitPeople:dishesSuitPeople,
        dishesNutritiveValue:dishesNutritiveValue,
        dishesWeight:dishesWeight
    };
    postAjax(url,false,postData,function (data) {
        alert("修改成功");
        findAll(currentPage);
    })
}
/*图片上传*/
function upload(id) {
    $("#aaaa").hide();
    $("#box").hide();
    var url =domainUrl+'/serve/dishes_picture/adds';
    var postData ={
        dishesId:id,
        dishespictureService:pathList,
    };
    postAjax(url,false,postData,function (data) {
        alert("上传成功");
        findAll(currentPage);
    })
}
/*树*/
//菜品分类
var foodClassify;
function foodClassify() {
    var url = domainUrl+"/serve/dishes_type/findTreeAll";
    var getData = {currentPage: currentPage, limit: limit};
    var html = '<option value="请选择">请选择</option>'
    getAjax(url, false, getData, function (data) {
        var num = data.aaData[0].length;
        for (var i = 0; i < num; i++) {
            html += '<option  value="' + data.aaData[0][i].id + '">' + data.aaData[0][i].dishesTypeName + '</option>';
        }
        $("#dishesTaste").html(html);
        var type = document.getElementById('dishesTaste');
        type.onchange = function () {
            // var id = this.value;
            // if (data.aaData[1] != undefined && id != "请选择") {
            //     for (var i = 0; i < data.aaData[1].length; i++) {
            //         if (data.aaData[1][i].tid != null) {
            //             $("#tr2").show();
            //             foodClassify2(id);
            //             foodClassify = null;
            //         } else {
            //             var selectIndex = document.getElementById("dishesTaste").selectedIndex;//获得是第几个被选中了
            //             var selectText = document.getElementById("dishesTaste").options[selectIndex].value //获得被选中的项目
            //             foodClassify = selectText;
            //             $("#tr2").hide();
            //         }
            //     }
            // } else {
                var selectIndex = document.getElementById("dishesTaste").selectedIndex;//获得是第几个被选中了
                var selectText = document.getElementById("dishesTaste").options[selectIndex].value //获得被选中的项目
                foodClassify = selectText;
            //     $("#tr2").hide();
            // }
        }
    })
}
// function foodClassify2(id) {
//     var url = domainUrl+"/serve/dishes_type/findTreeAll";
//     var getData = {currentPage: currentPage, limit: limit};
//     var html = '<option>请选择</option>'
//     getAjax(url, false, getData, function (data) {
//         console.log(JSON.stringify(data));
//         var num = data.aaData[1].length;
//         for (var i = 0; i < num; i++) {
//             if(id == data.aaData[1][i].tid){
//             html += '<option  value="' + data.aaData[1][i].id + '">' + data.aaData[1][i].dishesTypeName + '</option>';
//             }
//         }
//         $("#dishesTaste2").html(html);
//         var type = document.getElementById('dishesTaste2');
//         type.onchange = function () {
//             var selectIndex = document.getElementById("dishesTaste2").selectedIndex;//获得是第几个被选中了
//             var selectText = document.getElementById("dishesTaste2").options[selectIndex].value //获得被选中的项目
//             foodClassify = selectText;
//         }
//     })
// }
//营养价值
var foodMeterial;
function foodMeterial() {
    var url = domainUrl+"/serve/food_meterial/findTreeAll";
    var getData = {currentPage: currentPage, limit: limit};
    var html = '<option value="请选择">请选择</option>'
    getAjax(url, false, getData, function (data) {
        var num = data.aaData[0].length;
        for (var i = 0; i < num; i++) {
            html += '<option  value="' + data.aaData[0][i].id + '">' + data.aaData[0][i].meterialTypeName + '</option>';
        }
        $("#dishesAllergen").html(html);
        var type = document.getElementById('dishesAllergen');
        type.onchange = function () {
            // var id = this.value;
            // if (data.aaData[1] != undefined && id != "请选择") {
            //     for (var i = 0; i < data.aaData[1].length; i++) {
            //         if (data.aaData[1][i].tid != null) {
            //             $("#tr22").show();
            //             foodMeterial2(id);
            //             foodMeterial = null;
            //         } else {
            //             var selectIndex = document.getElementById("dishesAllergen").selectedIndex;//获得是第几个被选中了
            //             var selectText = document.getElementById("dishesAllergen").options[selectIndex].value //获得被选中的项目
            //             foodMeterial = selectText;
            //             $("#tr22").hide();
            //         }
            //     }
            // } else {
                var selectIndex = document.getElementById("dishesAllergen").selectedIndex;//获得是第几个被选中了
                var selectText = document.getElementById("dishesAllergen").options[selectIndex].value //获得被选中的项目
                foodMeterial = selectText;
            //     $("#tr22").hide();
            // }
        }
    })
}
// function foodMeterial2(id) {
//     var url = domainUrl+"/serve/food_meterial/findTreeAll";
//     var getData = {currentPage: currentPage, limit: limit};
//     var html = '<option>请选择</option>'
//     getAjax(url, false, getData, function (data) {
//         console.log(JSON.stringify(data));
//         var num = data.aaData[1].length;
//         for (var i = 0; i < num; i++) {
//             if(id == data.aaData[1][i].tid){
//                 html += '<option  value="' + data.aaData[1][i].id + '">' + data.aaData[1][i].meterialTypeName + '</option>';
//             }
//         }
//         $("#dishesAllergen2").html(html);
//         var type = document.getElementById('dishesAllergen2');
//         type.onchange = function () {
//             var selectIndex = document.getElementById("dishesAllergen2").selectedIndex;//获得是第几个被选中了
//             var selectText = document.getElementById("dishesAllergen2").options[selectIndex].value //获得被选中的项目
//             foodMeterial = selectText;
//         }
//     })
// }
//食材配料
var foodNutriment;
function foodNutriment() {
    var url = domainUrl+"/serve/nutriment/findTreeAll";
    var getData = {currentPage: currentPage, limit: limit};
    var html = '<option value="请选择">请选择</option>'
    getAjax(url, false, getData, function (data) {
        var num = data.aaData[0].length;
        for (var i = 0; i < num; i++) {
                html += '<option  value="' + data.aaData[0][i].id + '">' + data.aaData[0][i].nutrimentName + '</option>';
        }
        $("#dishesNutritiveValue").html(html);
        var type = document.getElementById('dishesNutritiveValue');
        type.onchange = function () {
            var id = this.value;
            if (data.aaData[1] != undefined && id != "请选择") {
                for (var i = 0; i < data.aaData[1].length; i++) {
                    if (id == data.aaData[1][i].tid) {
                        $("#tr222").show();
                        foodNutriment2(id);
                        foodNutriment = null;
                    } else {
                        var selectIndex = document.getElementById("dishesNutritiveValue").selectedIndex;//获得是第几个被选中了
                        var selectText = document.getElementById("dishesNutritiveValue").options[selectIndex].value //获得被选中的项目
                        foodNutriment = selectText;
                        $("#tr222").hide();
                    }
                }
            } else {
                var selectIndex = document.getElementById("dishesNutritiveValue").selectedIndex;//获得是第几个被选中了
                var selectText = document.getElementById("dishesNutritiveValue").options[selectIndex].value //获得被选中的项目
                foodNutriment = selectText;
                $("#tr222").hide();
            }
        }
    })
}
function foodNutriment2(id) {
    var url = domainUrl+"/serve/nutriment/findTreeAll";
    var getData = {currentPage: currentPage, limit: limit};
    var html = '<option>请选择</option>'
    getAjax(url, false, getData, function (data) {
        console.log(JSON.stringify(data));
        var num = data.aaData[1].length;
        for (var i = 0; i < num; i++) {
            if(id == data.aaData[1][i].tid){
                html += '<option  value="' + data.aaData[1][i].id + '">' + data.aaData[1][i].nutrimentName + '</option>';
            }
        }
        $("#dishesNutritiveValue2").html(html);
        var type = document.getElementById('dishesNutritiveValue2');
        type.onchange = function () {
            var selectIndex = document.getElementById("dishesNutritiveValue2").selectedIndex;//获得是第几个被选中了
            var selectText = document.getElementById("dishesNutritiveValue2").options[selectIndex].value //获得被选中的项目
            foodNutriment = selectText;
        }
    })
}
