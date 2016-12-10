/**
 * Created by lgengjiajun on 2016/12/10.
 */

//亲属信息

function addSon() {
    var url = domainUrl+"/serve/older_kinsfolk/add";
    var postData = {
        organizationLoginId:1,
        olderId:1,
        name:$("#Sname").val(),
        relation:$("#son").val(),
        tel:$("#Stel").val(),
        cardId:$("#ScardId").val(),
        jobName:$("#SjobName").val(),
        homeAddress:$("#ShomeAddress").val(),
        accountFor:1,
    };
    postAjax(url,false,postData,function (data) {
        alert("添加成功");
    })
}
// function findAll() {
//     var url = domainUrl+"/serve/older_kinsfolk/findAll";
//     var getData = {
//         currentPage:currentPage,
//         limit:limit
//     };
//     getAjax(url,false,getData,function (data) {
//
//     })
// }