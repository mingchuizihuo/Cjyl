
<link href="${domainUrl}/assets/css/public.css" rel="stylesheet">
<link href="${domainUrl}/assets/css/dataManage/monthStartCost.css" rel="stylesheet">

<script src="${domainUrl}/assets/js/TotalModule/dataManage/monthStartCost.js"></script>


<!--页面背景-->
<!---页面主体-->
<div class="overall" style="background-image: url(${domainUrl}/assets/images/backstage/bgg.jpg);">
<#--路径导航-->
    <div class="path">
        <ul>
            <li>您当前所在位置：</li>
            <li><a href="##">首页</a></li>
            <li><img src="${domainUrl}/assets/images/backstage/jiantou.png"></li>
            <li><a href="##">资料管理</a></li>
            <li><img src="${domainUrl}/assets/images/backstage/jiantou.png"></li>
            <li class="txt_color">月初始费</li>
            <div class="clearfix"></div>
        </ul>
    </div>
    <#--月初始费-->
    <div class="month">
        <div class="bs-example">
            <table class="table table-striped table-bordered" id="oldTable">
                <thead>
                <tr>
                <th><input type="checkbox" style="background:#f00;color:#0f0;border:#0ff;" id="All"></th>
                    <th>护理级别</th>
                    <th>管理费</th>
                    <th>服务费用</th>
                    <th>床位费用</th>
                    <th>伙食费用</th>
                    <th>总计</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody id="tbodyDelId">
                <tr>
                    <td><input type="checkbox" name="del" value="del1"></td>
                    <td>一级</td>
                    <td>200</td>
                    <td>1200</td>
                    <td>300</td>
                    <td>600</td>
                    <td>2300</td>
                    <td><input type="button" class="button" value="修改"  onclick="monthStartUrl()"></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

<#--月初始弹出信息弹窗-->
    <div class="publicModal">
    </div>
    <div class="tcdPageCode">

    </div>
<#--增删改查按钮-->
    <div class="modify">
        <button class="pull-left btn-style btn-ma"   onclick="monthStartUrl(1)" ><img src="${domainUrl}/assets/images/backstage/jia.png">增加</button>
        <button class="pull-left btn-style btn-ma" onclick="dels()"><img src="${domainUrl}/assets/images/backstage/del.png">删除</button>
        <div class="clearfix"></div>
    </div>

</div>