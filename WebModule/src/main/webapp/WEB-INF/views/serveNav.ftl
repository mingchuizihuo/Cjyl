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
<script>
    function panduan() {
        var userAgent = navigator.userAgent,
                rMsie = /(msie\s|trident.*rv:)([\w.]+)/,
                rFirefox = /(firefox)\/([\w.]+)/,
                rOpera = /(opera).+version\/([\w.]+)/,
                rChrome = /(chrome)\/([\w.]+)/,
                rSafari = /version\/([\w.]+).*(safari)/;
        var browser;
        var version;
        var ua = userAgent.toLowerCase();
        function uaMatch(ua){
            var match = rMsie.exec(ua);
            if(match != null){
                return { browser : "IE", version : match[2] || "0" };
            }
            if (match != null) {
                return { browser : "", version : "0" };
            }
        }
        var browserMatch = uaMatch(userAgent.toLowerCase());
        console.log(browserMatch.version)
        if (browserMatch.browser){
            browser = browserMatch.browser;
            version = browserMatch.version;
        }
        if(browserMatch.version != 10.0 && browserMatch.version != 11.0){
            document.write("请选择新版本浏览器进行使用，暂不支持IE10以下浏览器");
        }
    }
</script>
<body onload="panduan()">
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
            <tui><a href="#"  onclick="loginOut()">[ 退出 ]</a></tui>
            欢迎您：<b>${(loginInfo.loginName)!}</b>
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
                        <li><a onclick="sideUrl('/checkIn/checkIn')"><img src="${domainUrl}/assets/images/backstage/dian.png" >入住登记</a></li>
                    </ul>
                </li>
                <li>
                    <div class="link">老人管理<xialaimg class="xialaImg"><img src="${domainUrl}/assets/images/backstage/xiala.png" ></xialaimg></div>
                    <ul class="submenu">
                        <li><a onclick="sideUrl('/oldman/oldman')"><img src="${domainUrl}/assets/images/backstage/dian.png" >老人信息</a></li>
                        <li><a onclick="sideUrl('/oldman/specialServe')"><img src="${domainUrl}/assets/images/backstage/dian.png" >特殊服务</a></li>
                        <li><a onclick="sideUrl('/oldman/nurseNotes')"><img src="${domainUrl}/assets/images/backstage/dian.png" >护理记录</a></li>
                        <li><a onclick="sideUrl('/oldman/kinsfolk')"><img src="${domainUrl}/assets/images/backstage/dian.png" >亲属信息</a></li>
                        <li><a onclick="sideUrl('/oldman/checkInCost')"><img src="${domainUrl}/assets/images/backstage/dian.png" >入住初始费</a></li>
                    </ul>
                </li>
                <li>
                    <div class="link">订单管理<xialaimg class="xialaImg"><img src="${domainUrl}/assets/images/backstage/xiala.png" ></xialaimg></div>
                    <ul class="submenu">
                        <li><a onclick="sideUrl('/order/costCount')"><img src="${domainUrl}/assets/images/backstage/dian.png" >费用结算</a></li>
                        <#--<li><a onclick="sideUrl('/order/dateil')"><img src="${domainUrl}/assets/images/backstage/dian.png" >明细查询</a></li>-->
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
                        <#--<li><a onclick="sideUrl('/report/chargeList')"><img src="${domainUrl}/assets/images/backstage/dian.png" >收费清单</a></li>-->
                        <li><a onclick="sideUrl('/statement/page/arrearageNote')"><img src="${domainUrl}/assets/images/backstage/dian.png" >欠费记录</a></li>
                        <li><a onclick="sideUrl('/report/report')"><img src="${domainUrl}/assets/images/backstage/dian.png" >其他报表</a></li>
                    </ul>
                </li>
                <#if loginInfo.loginType==125>
                    <li id="type">
                        <div class="link">系统管理<xialaimg class="xialaImg"><img src="${domainUrl}/assets/images/backstage/xiala.png" ></xialaimg></div>
                        <ul class="submenu">
                            <li><a onclick="sideUrl('/system/sonStaff')"><img src="${domainUrl}/assets/images/backstage/dian.png" >添加子员工</a></li>
                        </ul>
                    </li>
                </#if>
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
<script src="${domainUrl}/assets/js/dataName.js"></script>
<script src="${domainUrl}/assets/js/OutJs/page/page.js"></script>
<script src="${domainUrl}/assets/js/OutJs/date/jquery.date_input.pack.js"></script>
<script src="${domainUrl}/assets/js/OutJs/date/Week.js"></script><script>
function loginOut() {
    var url = domainUrl + "/serve/login/loginOut";
    var getData = {
        
    };
    getAjax(url,false,getData,function (data) {
            location.href = ""+domainFile+"";
    })
}
</script>
</body>
</html>