/**
 * Created by Administrator on 2016/12/5.
 */
var url = domainUrl + "/serve/older/";
$(function () {
    findAll();
});
//查询
//老人信息
function findAll() {
    var olderId = parseInt(sessionStorage.getItem("olderId"));
    var urlFindAll = url + "findVOById";
    var getData = {
        olderId:olderId
    };
    getAjax(urlFindAll, false, getData, function (data) {
        $("#name").val(data.name);
        $("#checkInDate").val(replaceDate(data.checkInDate));
        $("#cardId").val(data.cardId);
        $("#birthday").val(replaceDate(data.birthday));
        $("#tel").val(data.tel);
        $("#censusRegister").val(data.censusRegister);
        $("#nation").val(data.nation);
        $("#selfIngredient").val(data.selfIngredient);
        $("#pluse").val(data.pluse);
        $("#bloodPressure").val(data.bloodPressure);
        $("#allergicDrug").val(data.allergicDrug);
        $("#indicationHospital").val(data.indicationHospital);
        $("#indicationDoctor").val(data.indicationDoctor);
        $("#principalDisease").val(data.principalDisease);
        $("#diseasesHistory").val(data.diseasesHistory);
        $("#hospitalTel").val(data.hospitalTel);
        $("#dietCharacteristics").val(data.dietCharacteristics);
        $("#disposition").val(data.disposition);
        $("#hobby").val(data.hobby);
        $("#specialRequirements").val(data.specialRequirements);
        $("#abnormalPatterns").val(data.abnormalPatterns);
        $(".olderLeaveDate").val(replaceDate(data.olderLeaveDate))
    })
}
function update() {
    var urlUpdate = url +"update";
    var postData = {
        id:1,
        name:$("#name").val(),
        sex:$("#sex").val(),
        checkIndate:$("#checkInDate").val(),
        cardId:$("#cardId").val(),
        birthday:$("#birthday").val(),
        tel:$("#tel").val(),
        censusRegister:$("#censusRegister").val(),
        nation:$("#nation").val(),
        selfIngredient:$("#selfIngredient").val(),
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
        olderLeaveDate:$("#olderLeaveDate").val()

    };
    console.log(postData);
    postAjax(urlUpdate,false,postData,function (data) {
        alert("修改成功");
        findAll(currentPage);
    })
}
//删除
function del(id) {
    var urlDel = url + "del";
    var postData = {
        id:id
    };
    postAjax(urlDel,false,postData,function (data) {
        alert("删除成功");
        findAll(currentPage);
    })
}