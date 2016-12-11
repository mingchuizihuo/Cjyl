<link href="${domainUrl}/assets/css/public.css" rel="stylesheet">
<link href="${domainUrl}/assets/css/oldman/oldman.css" rel="stylesheet">

<!--页面背景-->

<!---页面主体-->
<div class="overall" style="background-image: url(${domainUrl}/assets/images/backstage/bgg.jpg);">
<#--路径导航-->
    <div class="path">
        <ul>
            <li>您当前所在位置：</li>
            <li><a href="##">首页</a></li>
            <li><img src="${domainUrl}/assets/images/backstage/jiantou.png"></li>
            <li><a href="##">系统管理</a></li>
            <li><img src="${domainUrl}/assets/images/backstage/jiantou.png"></li>
            <li class="txt_color">添加子员工</li>
            <div class="clearfix"></div>
        </ul>
    </div>
<#--查询导航-->
    <#--<div class="query">-->
        <#--<ul>-->
            <#--<li>查询条件</li>-->
            <#--<li>姓名<input type="text"></li>-->
            <#--<script type="text/javascript">-->
                <#--$(function () {-->
                    <#--$('.date_picker').date_input();-->
                <#--})-->
            <#--</script>-->
            <#--<li>入职时间<input type="text" id="sdate" class="date_picker" style="text-align: center"></li>-->
            <#--<li>手机号<input type="text"></li>-->
            <#--<li>身份证号<input type="text"></li>-->
            <#--<button class="pull-right btn-style"><i class="glyphicon glyphicon-search"></i>查询</button>-->
            <#--<div class="clearfix"></div>-->
        <#--</ul>-->
    <#--</div>-->
<#--员工信息列表-->
    <div class="information">
        <div class="bs-example">
            <div style="width: 300px;height: 300px; margin: 10% auto;">
                    <ul id="loginDiv">
                        <li><input type="text" placeholder="员工帐号" id="staffName"></li>
                        <li><input type="password" placeholder="员工密码" id="staffPass"></li>
                        <li><input type="button" value="添加" onclick="add()"></li>
                    </ul>
                <style>
                    #loginDiv{
                        padding-top: 50px;
                    }
                    #loginDiv li{
                        margin-top: 20px;
                        margin-left: 30px;
                    }
                    #loginDiv input[type="text"]{
                        width: 240px;
                        height:30px;
                        font-size: 16px;
                        padding-left: 10px;
                        border: 1px solid #D7DADD;
                        color: #000;
                    }
                    #loginDiv input[type="password"]{
                        width: 240px;
                        height:30px;
                        font-size: 16px;
                        padding-left: 10px;
                        border: 1px solid #D7DADD;color: #000;
                    }
                    #loginDiv input[type="button"]{
                        width: 240px;
                        height:30px;
                        font-size: 16px;
                        background-color: #00A1E9;
                        color: #fff;
                        border: 0;
                        cursor: pointer;
                    }
                </style>
            </div>
        </div>
    </div>
<#--增删改查按钮-->
    <div class="modify">
        <div class="clearfix"></div>
    </div>

<#--页码-->
<div class="tcdPageCode">

</div>

</div>
<script src="${domainUrl}/assets/js/TotalModule/system/sonStaff.js"></script>