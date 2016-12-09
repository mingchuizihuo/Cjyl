/**
 * Created by horo on 2016/12/7.
 */
var url = domainUrl + "/serve/older_cost/";
$(function () {
    findAll();
    add();
});
function findAll() {
   var urlFindAll = url + "findAll";
   var getData = {
       currentPage:currentPage,
       limit:limit
   };
   getAjax(urlFindAll,false,getData,function (data) {
       console.log(JSON.stringify(data));
   })
}
function add() {
    var urlAdd = url +"add";
    var postData = {
        organizationLoginId:1,
        oldId:1,
        serviceCharge:1,
        serviceChargeContext:1,
        serviceChargeState:1,
        serviceChargeDate:"2016-05-02",
        closeAnAccountDate:"2014-05-23"
    };
    postAjax(urlAdd,false,postData,function (data) {
        alert("添加成功");
    })
}