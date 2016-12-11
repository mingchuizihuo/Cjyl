<link href="${domainUrl}/assets/css/public.css" rel="stylesheet">
<link href="${domainUrl}/assets/css/order/costCount.css" rel="stylesheet">


<!--页面背景-->

<!---页面主体-->
<div class="overall" style="background-image: url(${domainUrl}/assets/images/backstage/bgg.jpg);">
<#--路径导航-->
    <div class="path">
        <ul>
            <li>您当前所在位置：</li>
            <li><a href="##">首页</a></li>
            <li><img src="${domainUrl}/assets/images/backstage/jiantou.png"></li>
            <li><a href="##">订单管理</a></li>
            <li><img src="${domainUrl}/assets/images/backstage/jiantou.png"></li>
            <li class="txt_color">费用结算</li>
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
            <#--<li>入住时间<input type="text" id="sdate" class="date_picker" style="text-align: center"></li>-->
            <#--<li>手机号<input type="text"></li>-->
            <#--<li>身份证号<input type="text"></li>-->
            <#--<button class="pull-right btn-style"><i class="glyphicon glyphicon-search"></i>查询</button>-->
            <#--<div class="clearfix"></div>-->
        <#--</ul>-->
    <#--</div>-->
<#--费用结算老人信息列表-->
    <div class="information">
        <div class="bs-example">
            <table class="table table-striped table-bordered" id="oldTable">

            </table>
        </div>
    </div>
<#--弹出老人信息弹窗-->
    <div class="publicModal">
    </div>


<#--增删改查按钮-->
    <div class="modify">
        <button class="pull-left btn-style btn-ma" onclick="tableUrl(1)"><img src="${domainUrl}/assets/images/backstage/jia.png">月结</button>
        <button class="pull-left btn-style btn-ma"><img src="${domainUrl}/assets/images/backstage/del.png">删除</button>
        <div class="clearfix"></div>
    </div>




<#--页码-->
<div class="tcdPageCode">
</div>


</div>
<script src="${domainUrl}/assets/js/TotalModule/order/count.js"></script>
