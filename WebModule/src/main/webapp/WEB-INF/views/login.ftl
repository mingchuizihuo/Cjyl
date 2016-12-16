<html>
<meta charset="utf-8"/>
<title>承嘉智能养老管理系统</title>
<head></head>
<link href="${domainUrl}/assets/css/bootstrap/css/bootstrap.css" rel="stylesheet">
<link href="${domainUrl}/assets/css/OutCss/chaxun/quickQuery.css" rel="stylesheet">
<link href="${domainUrl}/assets/css/login.css" rel="stylesheet">
<script src="${domainUrl}/assets/js/jQuery-2.1.4/jquery-2.1.4.min.js"></script>
<script src="${domainUrl}/assets/js/common.js"></script>
<script src="${domainUrl}/assets/js/OutJs/chaxun/quickQuery-packer.js"></script>
<script>
    var domainUrl = '${domainUrl}' + "/rest";
</script>
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
                var num = data.aaData.length;
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
            var num = data.aaData.length;
            for(var i = 0; i <num ;i++){
                arriveCityArray[i] = new Array("", ""+data.aaData[i].name+"", "");
            }
        })
    }
    function login() {
        var url  = domainUrl + "/serve/login/login";
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
    function _login() {
        var url  = domainUrl + "/serve/login/login";
        var getData = {
            organizationLoginId:Oid,
            loginName:$("#loginName").val(),
            loginPassword:$("#loginPass").val()
        };
        getAjax(url,false,getData,function (data) {
            if(data.result != null){

            }else{
                location.href = domainUrl+"/page/background";
            }
        })
    }
</script>
<body onload="_login()">
    <div id="main">
        <img src="${domainUrl}/assets/images/login/loginBack.png" style="width: 100%;height: 100%;position: absolute">
        <div id="loginDiv">
            <ul>
                <li style="font-size: 22px; font-weight: 600;color: #7F8080">账户登录</li>
                <li>
                    <div class="input-group">
                        <span class="input-group-addon" style="color:#fff;">@</span>
                        <input type="text" class="quickQuery$focus form-control"  id="q1"  placeholder="机构">
                    </div>
                </li>
                <li>
                    <div class="input-group">
                        <span class="input-group-addon glyphicon glyphicon-user" style="color:#fff;"></span>
                        <input type="text" class="form-control"  id="loginName"  placeholder="用户名">
                    </div>
                </li>
                <li>
                    <div class="input-group">
                        <span class="input-group-addon glyphicon glyphicon-lock" style="color:#fff;"></span>
                        <input type="password" class="form-control"  id="loginPass"  placeholder="密码">
                    </div>
                </li>
                <li>
                    <button onclick="login()" id="login"><span>登</span>陆</button>
                </li>
            </ul>
        </div>
    </div>
</body>
</html>
<#--选择机构-->
<#--↓-->
<#--查询（搜索功能）-->
<#--管理员类型 普通类型 访客类型-->