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
            <li><a href="##">员工管理</a></li>
            <li><img src="${domainUrl}/assets/images/backstage/jiantou.png"></li>
            <li class="txt_color">员工信息</li>
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
            <table class="table table-striped table-bordered" id="oldTable">
                <thead>
                <tr>
                <th><input type="checkbox" style="background:#f00;color:#0f0;border:#0ff;" id="All"></th>
                    <#--<th></th>-->
                    <th>姓名</th>
                    <th>性别</th>
                    <th>出生年月</th>
                    <th>入职日期</th>
                    <th>部门</th>
                    <th>职务</th>
                    <th>健康状况</th>
                    <th>电话</th>
                    <th>婚姻状况</th>
                    <th>学历</th>
                    <th>专业</th>
                    <th>工资</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody id="tbodyDelId">
                <tr>
                    <td><input type="checkbox" name="del" value="del1"></td>
                    <td>白晓辉</td>
                    <td>男</td>
                    <td>1986-05-5-05</td>
                    <td>2016-10-05</td>
                    <td>护理部</td>
                    <td>职员</td>
                    <td>良好</td>
                    <td>14862579835</td>
                    <td>未婚</td>
                    <td>本科</td>
                    <td>烹饪</td>
                    <td>3000</td>
                    <td><input type="button" class="button" onclick="staffInUrl()" value="修改"></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
<#--弹出老人信息弹窗-->
    <div class="tcdPageCode">

    </div>
    <div class="publicModal">
    </div>
<#--增删改查按钮-->
    <div class="modify">
        <button class="pull-left btn-style btn-ma" onclick="staffInUrl(1)"><img src="${domainUrl}/assets/images/backstage/jia.png">增加</button>
        <button class="pull-left btn-style btn-ma" onclick="dels()"><img src="${domainUrl}/assets/images/backstage/del.png">删除</button>
        <div class="clearfix"></div>
    </div>

<#--页码-->
<#--<div class="tcdPageCode">-->

<#--</div>-->

</div>
<script src="${domainUrl}/assets/js/TotalModule/staff/staffInformation.js"></script>