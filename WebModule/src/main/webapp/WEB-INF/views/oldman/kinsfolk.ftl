<link href="${domainUrl}/assets/css/public.css" rel="stylesheet">
<link href="${domainUrl}/assets/css/oldman/oldman.css" rel="stylesheet">
<script src="${domainUrl}/assets/js/TotalModule/oldman/oldSon.js"></script>
<!--页面背景-->

<!---页面主体-->
<div class="overall" style="background-image: url(${domainUrl}/assets/images/backstage/bgg.jpg);">
<#--路径导航-->
    <div class="path">
        <ul>
            <li>您当前所在位置：</li>
            <li><a href="##">首页</a></li>
            <li><img src="${domainUrl}/assets/images/backstage/jiantou.png"></li>
            <li><a href="##">老人管理</a></li>
            <li><img src="${domainUrl}/assets/images/backstage/jiantou.png"></li>
            <li class="txt_color">老人信息</li>
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
<#--老人信息列表-->
    <div class="information">
        <div class="bs-example">
            <table class="table table-striped table-bordered" id="oldTable">
                <thead>
                <tr>
                    <th><input type="checkbox"  id="All"></th>
                    <th>老人姓名</th>
                    <th>亲属姓名</th>
                    <th>联系电话</th>
                    <th>关系</th>
                    <th>身份证号</th>
                    <th>工作单位</th>
                    <th>住址</th>
                    <th>说明</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody id="tbodyDelId">
                </tbody>
            </table>
        </div>
    </div>
<#--弹出老人信息弹窗-->
    <style>
        input[type="text"],select{
            color: #000000;
        }
    </style>
    <div style="width: 400px; height: 400px; background-color: #1b6d85; position: absolute; left: 30%; top: 20%;">
        <ul>
            <li><select name="" id="oldSelect"></select></li>
            <li><input type="text" id="name"></li>
            <li><select name="" id="son"></select></li>
            <li><input type="text" id="tel"></li>
            <li><input type="text" id="cardId"></li>
            <li><input type="text" id="jobName"></li>
            <li><input type="text" id="homeAddress"></li>
            <li><input type="text" id="accountFor"></li>
            <li style="display: none;"><input type="text" id="id"></li>
            <li><button onclick="add()" id="add">添加</button></li>
            <li><button onclick="update()" id="update">修改</button></li>
        </ul>
    </div>
    <div class="tcdPageCode">
    </div>
<#--增删改查按钮-->
    <div class="modify">
        <button class="pull-left btn-style btn-ma"  ><img src="${domainUrl}/assets/images/backstage/jia.png">增加</button>
        <button class="pull-left btn-style btn-ma" onclick="del()"><img src="${domainUrl}/assets/images/backstage/del.png">删除</button>
        <div class="clearfix"></div>
    </div>
</div>
<script src="${domainUrl}/assets/js/TotalModule/filter.js"></script>
