/**
 * Created by horo on 2016/12/7.
 */
var url = domainUrl + "/serve/older_initial_fee/";
$(function () {
    findAll();
});
function findAll() {
   var urlFindAll = url + "findAll";
   var getData = {
       currentPage:currentPage,
       limit:limit
   };
   getAjax(urlFindAll,false,getData,function (data) {
       console.log(JSON.stringify(data));
       var d = data.aaData[0];
       $("#checkInInitCostId").val(d.checkInInitCostId);
       $("#checkInInitCostState").val(d.checkInInitCostState);
       $(".initialFeeDate").val(d.initialFeeDate);
       $(".closeAnAccountDate").val(d.closeAnAccountDate);
   })
}
function update3() {
    var urlAdd = url +"update";
    var postData = {
        id:1,
        organizationLoginId:1,
        oldId:1,
        checkInInitCostId:$("#checkInInitCostId").val(),
        checkInInitCostState:$("#checkInInitCostId").val(),
        initialFeeDate:$(".initialFeeDate").val(),
        closeAnAccountDate:$(".closeAnAccountDate").val(),
    };
    postAjax(urlAdd,false,postData,function (data) {

    })
}