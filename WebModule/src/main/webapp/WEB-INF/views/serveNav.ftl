        <html>
<head>
    <link href="${domainUrl}/assets/css/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link href="${domainUrl}/assets/css/Normalize.css" rel="stylesheet">
    <link href="${domainUrl}/assets/css/mainBody.css" rel="stylesheet">
    <link href="${domainUrl}/assets/css/OutCss/page/page.css" rel="stylesheet">
    <link href="${domainUrl}/assets/css/OutCss/date/jquery.data_input.pack.css" rel="stylesheet">
    <meta charset="utf-8"/>
    <title>承嘉智慧养老中心</title>
</head>
<script>
    var domainUrl = '${domainUrl}' + "/rest";
    var domainFile = '${domainUrl}';
</script>
<body>
<#--页面整体布局（绝对定位不出现页面滚动）-->
<div id="main-body" class="animated">
<#--页面头部-->
    <div id="main-head">
        <img src="${domainUrl}/assets/images/backstage/top.png" class="top_bg">
       <div class="lo-user">
        <div id="logo">
            <a href="${domainUrl}"><img src="${domainUrl}/assets/images/backstage/logo.png" class="one"></a>
            <img src="${domainUrl}/assets/images/backstage/pingtai.png" class="two">
        </div>
        <div id="user-status">
            <tui><a href="${domainUrl}">[ 退出 ]</a></tui>
            欢迎您：<b>${(userBean.loginName)!}</b>
        </div>
        </div>
    </div>
<#--中间部分-->
    <div id="center-flex">
    <#--页面侧边栏-->
        <div id="main-side">
            <img src="${domainUrl}/assets/images/backstage/l.png" style="width:100%;height:100%;">
            <ul id="sideList" class="accordion">
                <li>
                    <div class="link">入住管理<xialaimg class="xialaImg"><img src="${domainUrl}/assets/images/backstage/xiala.png" ></xialaimg></div>
                    <ul class="submenu">
                        <li><a onclick="sideUrl('/bed/bed')"><img src="${domainUrl}/assets/images/backstage/dian.png" >入住登记</a></li>
                    </ul>
                </li>
                <li>
                    <div class="link">老人管理<xialaimg class="xialaImg"><img src="${domainUrl}/assets/images/backstage/xiala.png" ></xialaimg></div>
                    <ul class="submenu">
                        <li><a onclick="sideUrl('/oldman/oldman')"><img src="${domainUrl}/assets/images/backstage/dian.png" >老人信息</a></li>
                        <li><a onclick="sideUrl('/oldman/specialServe')"><img src="${domainUrl}/assets/images/backstage/dian.png" >特殊服务</a></li>
                        <li><a onclick="sideUrl('/oldman/nursNotes')"><img src="${domainUrl}/assets/images/backstage/dian.png" >护理记录</a></li>
                    </ul>
                </li>
                <li>
                    <div class="link">订单管理<xialaimg class="xialaImg"><img src="${domainUrl}/assets/images/backstage/xiala.png" ></xialaimg></div>
                    <ul class="submenu">
                        <li><a onclick="sideUrl('/order/arrearageNote')"><img src="${domainUrl}/assets/images/backstage/dian.png" >费用结算</a></li>
                        <li><a onclick="sideUrl('/order/chargeList')"><img src="${domainUrl}/assets/images/backstage/dian.png" >收费清单</a></li>
                        <li><a onclick="sideUrl('/order/costCount')"><img src="${domainUrl}/assets/images/backstage/dian.png" >欠费记录</a></li>
                        <li><a onclick="sideUrl('/order/dateil')"><img src="${domainUrl}/assets/images/backstage/dian.png" >明细查询</a></li>
                    </ul>
                </li>
                <li>
                    <div class="link">员工管理<xialaimg class="xialaImg"><img src="${domainUrl}/assets/images/backstage/xiala.png" ></xialaimg></div>
                    <ul class="submenu">
                        <li><a onclick="sideUrl('/staff/staffInFormation')"><img src="${domainUrl}/assets/images/backstage/dian.png" >员工信息</a></li>
                        <li><a onclick="sideUrl('/staff/staffRecess')"><img src="${domainUrl}/assets/images/backstage/dian.png" >员工请假</a></li>
                    </ul>
                </li>
                <li>
                    <div class="link">资料管理<xialaimg class="xialaImg"><img src="${domainUrl}/assets/images/backstage/xiala.png" ></xialaimg></div>
                    <ul class="submenu">
                        <li><a onclick="sideUrl('/dataManage/monthStartCost')"><img src="${domainUrl}/assets/images/backstage/dian.png" >月初始费</a></li>
                        <li><a onclick="sideUrl('/dataManage/checkInStartCost')"><img src="${domainUrl}/assets/images/backstage/dian.png" >入住初始费</a></li>
                        <li><a onclick="sideUrl('/dataManage/specialServeCost')"><img src="${domainUrl}/assets/images/backstage/dian.png" >特殊服务费</a></li>
                        <li><a onclick="sideUrl('/dataManage/dataDictionary')"><img src="${domainUrl}/assets/images/backstage/dian.png" >数据字典</a></li>
                        <li><a onclick="sideUrl('/dataManage/edificeManage')"><img src="${domainUrl}/assets/images/backstage/dian.png" >大厦管理</a></li>
                        <li><a onclick="sideUrl('/dataManage/storeyManage')"><img src="${domainUrl}/assets/images/backstage/dian.png" >楼层管理</a></li>
                        <li><a onclick="sideUrl('/dataManage/roomManage')"><img src="${domainUrl}/assets/images/backstage/dian.png" >房间管理</a></li>

                    </ul>
                </li>
                <li>
                    <div class="link">报表管理<xialaimg class="xialaImg"><img src="${domainUrl}/assets/images/backstage/xiala.png" ></xialaimg></div>
                    <ul class="submenu">
                        <li><a onclick="sideUrl('/')"></a></li>
                    </ul>
                </li>
                <li>
                    <div class="link">系统管理<xialaimg class="xialaImg"><img src="${domainUrl}/assets/images/backstage/xiala.png" ></xialaimg></div>
                    <ul class="submenu">
                        <li><a onclick="sideUrl('/system/updatePass')"><img src="${domainUrl}/assets/images/backstage/dian.png" >修改密码</a></li>
                    </ul>
                </li>
                <li>
                </li>
                    </ul>
            </ul>
            <#--功能弹出-->

        </div>
    <#--页面主体-->
        <div id="main-show">
            <!--页面背景-->
            <div class="right-bg">
                <img src="${domainUrl}/assets/images/backstage/bgg.jpg" class="bg" >
                <img src="${domainUrl}/assets/images/backstage/qiu.png" class="qiu" >
            </div>
        </div>
</div>
<#--页面尾部-->
    <div id="main-foot">
        <img src="${domainUrl}/assets/images/backstage/bottom.png" >
        <h4>天津爱迪尔软件开发有限公司</h4>
    </div>
</div>
<script src="${domainUrl}/assets/js/jQuery-2.1.4/jquery-2.1.4.min.js"></script>
<script src="${domainUrl}/assets/js/bootstrap/bootstrap.min.js"></script>
<script src="${domainUrl}/assets/js/common.js"></script>
<script src="${domainUrl}/assets/js/sideUrl.js"></script>
<script src="${domainUrl}/assets/js/OutJs/page/page.js"></script>
<script src="${domainUrl}/assets/js/OutJs/date/jquery.date_input.pack.js"></script>
<script src="${domainUrl}/assets/js/OutJs/date/Week.js"></script>
<!--功能按钮效果弹出-->


</body>
</html>