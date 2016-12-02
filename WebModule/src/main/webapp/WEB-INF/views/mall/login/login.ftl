<html>
<head>
    <script src="${domainUrl}/assets/js/jQuery-2.1.4/jquery-2.1.4.min.js"></script>
    <link rel="stylesheet" href="${domainUrl}/assets/css/mall/login/login.css">
    <link rel="stylesheet" href="${domainUrl}/assets/css/mall/publicStyle.css">
    <script src="${domainUrl}/assets/js/common.js"></script>
    <script type="text/javascript" src="${domainUrl}/assets/js/mall/login/login.js"></script>
    <title>登录</title>
</head>
<body>
<script>
    var domainUrl = '${domainUrl}'+"/rest";
</script>
<div class="po"><img src="${domainUrl}/assets/images/serve/shujuback2.jpg" ></div>
<!--头部-->
<div class="login-head"></div>
<!--页面-->
<div class="login-main">
    <div class="login-div">
        <ul>
            <li>
                <div class="personal-login">登录系统</div>
                <#--<div class="seller-login back-gray">机构登陆</div>-->
            </li>
            <li>
                <div  class="login-input-img"><img src="${domainUrl}/assets/images/login/login-user.jpg"></div>
                <input type="text" placeholder="手机号"  id="loginName" class="login-input">
            </li>
            <li>
                <div class="login-input-img"style="margin-top: 25px;"><img src="${domainUrl}/assets/images/login/login-pass.jpg"></div>
                <input type="password" placeholder="密码"  id="loginPassword" class="login-input" style="margin-top: 25px; height: 45px;">
            </li>
            <li><input type="button" value="登录" id="login-btn" onclick="login()"></li>
            <li><span><a href="${domainUrl}/rest/mall/login/sellerRegister">管理员注册</a></li>
            <#--<a href="${domainUrl}/rest/mall/login/register">个人注册</a></span>-->
        </ul>
    </div>
</div>
<!--底部-->
<div class="login-foot" ></div>
</body>
</html>
