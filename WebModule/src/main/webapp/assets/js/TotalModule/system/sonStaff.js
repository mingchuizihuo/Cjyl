function add() {
    var url = domainUrl + "/serve/login/add";
    var postData = {
        organizationLoginId:OStaffId,
        loginName:$("#staffName").val(),
        loginPassword:$("#staffPass").val()
    };
    console.log(postData)
    postAjax(url,false,postData,function (data) {
        alert("添加成功")
    })
}