/**
 * Created by Administrator on 2016/12/5.
 */
var url = domainUrl + "/serve/older/";
var delId="";
$(function () {
    findAll(1);
});

//查询
var pageNp = 1;
function findAll(currentPage) {
    var urlFindAll = url + "findAllBriefVO";
    var getData = {
        currentPage: currentPage,
        limit: limit
    }
    getAjax(urlFindAll, false, getData, function (data) {
        console.log(JSON.stringify(data))
        var num = data.aaData.length;
        var pageList = Math.ceil(data.iTotalRecords / 9);
        var d;
        var money = 0;
        var html = '<thead><tr><th><input type="checkbox" name="del" id="All" ></th> <th>姓名 </th> <th>入住时间</th> <th>护理人员</th> <th>大厦</th> <th>房间</th> <th>床位</th> <th>月费用</th> <th>民族</th> ' +
            '<th>出生日期</th> <th>自理情况</th>  <th>身份证号</th> <th>状态</th> <th>出院日期</th> <th>操作</th></tr> </thead><tbody id="tbodyDelId">'
        for (var i = 0; i < num; i++) {
            d =  data.aaData[i];
            if(d.checkInInitCostList != undefined){
                for(var j = 0; j<d.checkInInitCostList.length; j++){
                    money += d.checkInInitCostList[j].money;
                }
            }
                html += ' <tr> <td><input type="checkbox" name="del" value="'+d.id+'"></td><td>'+d.name+'</td>  <td>'+d.checkInDate.substring(0,11)+'</td> <td>'+d.staff.name+'</td>' +
                ' <td>'+d.mansion+'</td> <td>'+d.room+'</td> <td>'+d.bed+'</td> <td>'+money+'</td>  <td>'+d.nation+'</td> <td>'+d.birthday+'</td> <td>'+d.takeCareOfOneselfStr+'</td>' +
                ' <td>'+d.cardId+'</td> <td>'+d.olderStateStr+'</td> <td>'+d.olderLeaveDate+'</td><td><button onclick="make('+d.id+')">修改</button></td> </tr>';
        }
        html += '</tbody>';
        $("#oldTable").html(html);
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
function addOld() {
    var urlAdd = url + "add";
    var postData = {
        organizationLoginId:1,
        name:$("#name").val(),
        sex:$("#sex").val(),
        checkInDate:$(".checkInDate").val(),
        cardId:$("#cardId").val(),
        birthday:$("#birthday").val(),
        tel:$("#tel").val(),
        monthChargeId:1,
        censusRegister:$("#censusRegister").val(),
        belief:1,
        nation:$("#nation").val(),
        politicsStatus:1,
        selfIngredient:$("#selfIngredient").val(),
        takeCareOfOneself:1,
        mind:1,
        pluse:$("#pluse").val(),
        bloodPressure:$("#bloodPressure").val(),
        allergicDrug:$("#allergicDrug").val(),
        indicationHospital:$("#indicationHospital").val(),
        indicationDoctor:$("#indicationDoctor").val(),
        principalDisease:$("#principalDisease").val(),
        diseasesHistory:$("#diseasesHistory").val(),
        hospitalTel:$("#hospitalTel").val(),
        dietCharacteristics:$("#dietCharacteristics").val(),
        disposition:$("#disposition").val(),
        hobby:$("#hobby").val(),
        specialRequirements:$("#specialRequirements").val(),
        abnormalPatterns:$("#abnormalPatterns").val(),
        olderState:1,
        olderLeaveDate:$("#olderLeaveDate").val(),
        staffId:1,

    };
    postAjax(urlAdd, false, postData, function (data) {
        console.log(JSON.stringify(data))
    })
}
//修改
function make(id) {
    oldUrl();
    setTimeout(function () {
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
                    $("#id").val(id);
                    $("#name").val(d.name);
                    $("#checkInDate").val(d.checkInDate);
                    $("#cardId").val(d.cardId);
                    $("#birthday").val(d.birthday);
                    $("#tel").val(d.tel);
                    $("#censusRegister").val(d.censusRegister);
                    $("#nation").val(d.nation);
                    $("#selfIngredient").val(d.selfIngredient);
                    $("#pluse").val(d.pluse);
                    $("#bloodPressure").val(d.bloodPressure);
                    $("#allergicDrug").val(d.allergicDrug);
                    $("#indicationHospital").val(d.indicationHospital);
                    $("#indicationDoctor").val(d.indicationDoctor);
                    $("#principalDisease").val(d.principalDisease);
                    $("#diseasesHistory").val(d.diseasesHistory);
                    $("#hospitalTel").val(d.hospitalTel);
                    $("#dietCharacteristics").val(d.dietCharacteristics);
                    $("#disposition").val(d.disposition);
                    $("#hobby").val(d.hobby);
                    $("#specialRequirements").val(d.specialRequirements);
                    $("#abnormalPatterns").val(d.abnormalPatterns);
                    $("#olderLeaveDate").val(d.olderLeaveDate);
                    $("#floor").val(d.floor);
                    $("#room").val(d.room);
                    $("#bed").val(d.bed);
                }
            }
        })
    }, 100);

}
function update() {
    var urlUpdate = url +"update";
    var postData = {

    }
    postAjax(urlUpdate,false,postData,function (data) {

    })
}
//删除
function dels() {
    var urlDel = url + "dels";
    var postData = {
        ids:delId
    };
    console.log(postData)
    postAjax(urlDel,false,postData,function (data) {
        alert("删除成功");
        findAll(currentPage);
    })
}
function add() {
    addOld();
    addSon();
}