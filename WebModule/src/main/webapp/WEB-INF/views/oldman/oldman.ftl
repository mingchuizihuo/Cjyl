<link href="${domainUrl}/assets/css/public.css" rel="stylesheet">
<link href="${domainUrl}/assets/css/oldman/oldman.css" rel="stylesheet">
<script src="${domainUrl}/assets/js/TotalModule/oldman/oldman.js"></script>
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
    <div class="query">
        <ul>
            <li>查询条件</li>
            <li>姓名<input type="text"></li>
            <script type="text/javascript">
                $(function () {
                    $('.date_picker').date_input();
                })
            </script>
            <li>入住时间<input type="text" id="sdate" class="date_picker" style="text-align: center"></li>
            <li>手机号<input type="text"></li>
            <li>身份证号<input type="text"></li>
            <button class="pull-right btn-style"><i class="glyphicon glyphicon-search"></i>查询</button>
            <div class="clearfix"></div>
        </ul>
    </div>
<#--老人信息列表-->
    <div class="information">
        <div class="bs-example">
            <table class="table table-striped table-bordered" id="oldTable">
                <thead>
                <tr>
                    <th><input type="checkbox"  id="All"></th>
                     <#--<th></th>-->
                    <th>ID</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>入住时间</th>
                    <th>护理人员</th>
                    <th>大厦</th>
                    <th>房间</th>
                    <th>床位</th>
                    <th>月费用</th>
                    <th>民族</th>
                    <th>出生日期</th>
                    <th>自理情况</th>
                    <th>护理级别</th>
                    <th>身份证号</th>
                    <th>状态</th>
                    <th>出院日期</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody id="tbodyDelId">
                </tbody>
            </table>
        </div>
    </div>
<#--弹出老人信息弹窗-->
    <div class="publicModal">

    </div>
    <div class="tcdPageCode">
    </div>
<#--增删改查按钮-->
    <div class="modify">
        <button class="pull-left btn-style btn-ma" onclick="oldUrl(1)" ><img src="${domainUrl}/assets/images/backstage/jia.png">增加</button>
        <button class="pull-left btn-style btn-ma" onclick="dels()"><img src="${domainUrl}/assets/images/backstage/del.png">删除</button>
        <div class="clearfix"></div>
    </div>
</div>
<script src="${domainUrl}/assets/js/TotalModule/oldman/oldFindAll.js"></script>