/**
 * Created by horo on 2016/12/7.
 */
var urlNur = domainUrl + "/serve/older_nurse_log/";
$(function () {
    findAll();
});
function findAll() {
    var urlFindAll = urlNur + "findAll";
    var getData = {
        currentPage:currentPage,
        limit:limit
    };
    getAjax(urlFindAll,false,getData,function (data) {
        var d = data.aaData[0];
        $("#NphysicalCondition").text(d.physicalCondition);
        $("#NnurseInfo").text(d.nurseInfo);
        $("#NnurseDate").text(d.nurseDate.substring(0,11));
        $("#NstaffId").text(d.staffId)
    })
}