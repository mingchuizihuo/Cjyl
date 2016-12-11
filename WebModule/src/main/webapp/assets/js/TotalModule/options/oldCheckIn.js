/**
 * Created by horo on 2016/12/7.
 */
var url = domainUrl + "/serve/month_charge/";
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
        $("#MnursingGrades").text(d.nursingGrades);
        $("#MadministrativeFee").text(d.administrativeFee);
        $("#MserviceCharge").text(d.serviceCharge);
        $("#MbedCost").text(d.bedCost);
        $("#MfoodCost").text(d.foodCost);
        $("#Mtotal").text(d.total);
    })
}