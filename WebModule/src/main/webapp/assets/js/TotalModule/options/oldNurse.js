/**
 * Created by horo on 2016/12/7.
 */
var url = domainUrl + "/serve/older_nurse_log/";
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
        physicalCondition:1,
        nurseInfo:1,
        nurseDate:"2016-05-14",
        staffId:1,
    };
    postAjax(urlAdd,false,postData,function (data) {
        alert("添加成功");
    })
}