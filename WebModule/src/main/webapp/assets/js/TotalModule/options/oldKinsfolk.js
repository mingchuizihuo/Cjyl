/**
 * Created by horo on 2016/12/7.
 */
var urlKin = domainUrl + "/serve/older_kinsfolk/";
$(function () {
    findAll();
});
function findAll() {
    var urlFindAll = urlKin + "findAll";
    var getData = {
        currentPage:currentPage,
        limit:limit
    };
    getAjax(urlFindAll,false,getData,function (data) {
        var d = data.aaData[0];
        $("#Kname").val(d.name);
        $("#Ktel").val(d.tel);
        $("#Krelation").val(d.relation);
        $("#KcardId").val(d.cardId);
        $("#KjobName").val(d.jobName);
        $("#KhomeAddress").val(d.homeAddress);
    })
}
function update2() {
    var olderId = parseInt(sessionStorage.getItem("olderId"));
    var urlAdd = urlKin +"update";
    var postData = {
        oldId:olderId,
        name:$("#Kname").val(),
        relation:$("#Ktel").val(),
        tel:$("#Krelation").val(),
        cardId:$("#KcardId").val(),
        jobName:$("#KjobName").val(),
        homeAddress:$("#KhomeAddress").val(),
        accountFor:1
    };
    postAjax(urlAdd,false,postData,function (data) {

    })
}