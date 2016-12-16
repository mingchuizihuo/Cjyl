/**
 * Created by horo on 2016/12/7.
 */
var urlInit = domainUrl + "/serve/older_initial_fee/";
$(function () {
    findAll();
});
function findAll() {
   var urlFindAll = urlInit + "findAll";
   var getData = {
       currentPage:currentPage,
       limit:limit
   };
   getAjax(urlFindAll,false,getData,function (data) {
       var d = data.aaData[0];
       $("#checkInInitCostId").val(d.checkInInitCostId);
       $("#checkInInitCostState").val(d.checkInInitCostState);
       $(".initialFeeDate").val(d.initialFeeDate);
       $(".closeAnAccountDate").val(d.closeAnAccountDate);
   })
}
function update3() {
    var olderId = parseInt(sessionStorage.getItem("olderId"));
    var urlAdd = urlInit +"update";
    var postData = {
        id:1,
        oldId:olderId,
        checkInInitCostId:$("#checkInInitCostId").val(),
        checkInInitCostState:$("#checkInInitCostId").val(),
        initialFeeDate:$(".initialFeeDate").val(),
        closeAnAccountDate:$(".closeAnAccountDate").val(),
    };
    postAjax(urlAdd,false,postData,function (data) {

    })
}