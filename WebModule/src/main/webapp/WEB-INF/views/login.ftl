<html>
<meta charset="utf-8"/>
<title>承嘉智能养老管理系统</title>
<head></head>
<link href="${domainUrl}/assets/css/OutCss/chaxun/quickQuery.css" rel="stylesheet">
<script src="${domainUrl}/assets/js/jQuery-2.1.4/jquery-2.1.4.min.js"></script>
<script src="${domainUrl}/assets/js/common.js"></script>
<script src="${domainUrl}/assets/js/OutJs/chaxun/quickQuery-packer.js"></script>
<script>
    var domainUrl = '${domainUrl}' + "/rest";
</script>
<style>
    *{
        margin: 0;
        padding: 0;
        font-family: "微软雅黑";
    }
    ul li{
        list-style: none;
        margin-left: 30px;
        margin-top: 30px;
    }
    #main{
        width: 100%;
        height: 100%;
        min-width: 1400px;
        min-height: 600px;
        position: absolute;
    }
    #loginDiv{
        width: 400px; height: 400px; background-color: #EDF9FF;position: absolute; top: 30%; right: 15%
    }
    #loginDiv input[type="text"]{
        width: 340px;
        height:40px;
        font-size: 16px;
        padding-left: 10px;
        border: 1px solid #D7DADD;
    }
    #loginDiv input[type="password"]{
        width: 340px;
        height:40px;
        font-size: 16px;
        padding-left: 10px;
        border: 1px solid #D7DADD;
    }
    #loginDiv input[type="button"]{
        width: 340px;
        height:40px;
        font-size: 16px;
        background-color: #00A1E9;
        color: #fff;
        border: 0;
        cursor: pointer;
    }
    #quickQuery_resultNum_box{
        display: none!important;
    }
</style>
<script type="text/javascript">
    var Oid='';
    var Oname='';
    var arriveCityArray = new Array("","","");
    window.onload = function(){
        $quickQuery(arriveCityArray);
    };
    $(function () {
        OfindAll();
        $("#login").mouseover(function () {
            Oname = $("#q1").val();
            var url  = domainUrl + "/serve/login/findAllOrganizationName";
            var getData = {
                currentPage:1,
                limit:100000
            };
            getAjax(url,false,getData,function (data) {
                var num = data.iTotalRecords;
                for(var i = 0; i <num ;i++){
                    if(Oname == data.aaData[i].name){
                        Oid = data.aaData[i].id;
                        sessionStorage.setItem("OStaffId", Oid);
                    }
                }
                console.log(Oid)

            });
        })
    });
    function OfindAll() {
        var url  = domainUrl + "/serve/login/findAllOrganizationName";
        var getData = {
            currentPage:1,
            limit:100000
        };
        getAjax(url,false,getData,function (data) {
            console.log(JSON.stringify(data))
            var num = data.iTotalRecords;
            for(var i = 0; i <num ;i++){
                arriveCityArray[i] = new Array("", ""+data.aaData[i].name+"", "");
            }
        })
    }
    function login() {
        var url  = domainUrl + "/serve/login/login";
        if(Oid == ""){
            alert("请清楚浏览器缓存重新登录");
        }else{
            var getData = {
                organizationLoginId:Oid,
                loginName:$("#loginName").val(),
                loginPassword:$("#loginPass").val()
            };
            getAjax(url,false,getData,function (data) {
                if(data.result != null){
                    alert("帐号或密码错误，请重新输入");
                }else{
                    location.href = domainUrl+"/page/background";
                }
            })
        }

    }
</script>
<body>
    <div id="main">
        <img src="${domainUrl}/assets/images/login/loginBack.png" style="width: 100%;height: 100%;position: absolute">
        <div id="loginDiv">
            <ul>
                <li style="font-size: 22px; font-weight: 600;color: #7F8080">账户登录</li>
                <li><input type="text" placeholder="机构"  id="q1" class="quickQuery$focus"></li>
                <li><input type="text" placeholder="用户名" id="loginName"></li>
                <li><input type="password" placeholder="密码" id="loginPass"></li>
                <li><input type="button" value="登录" onclick="login()" id="login"></li>
            </ul>
        </div>
    </div>
</body>
</html>
<#--选择机构-->
<#--↓-->
<#--查询（搜索功能）-->
<#--管理员类型 普通类型 访客类型-->