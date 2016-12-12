<link href="${domainUrl}/assets/css/public.css" rel="stylesheet">
<link href="${domainUrl}/assets/css/oldman/oldman.css" rel="stylesheet">
<link href="${domainUrl}/assets/css/options/nurse.css" rel="stylesheet">
<script src="${domainUrl}/assets/js/TotalModule/oldman/oldNurse.js"></script>
<!--页面背景-->
<script type="text/javascript">
    $(function () {
        $('.date_picker').date_input();
    })
</script>
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
            <li class="txt_color">护理记录</li>
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
                    <th>老人姓名</th>
                    <th>老人健康状况</th>
                    <th>护理用药情况</th>
                    <th>护理时间</th>
                    <th>护理人员</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody id="tbodyDelId">
                </tbody>
            </table>
        </div>
    </div>
<#--弹出老人信息弹窗-->
    <div class="tally">
        <h2>护理记录</h2>
        <div class="feiyong">
            <div class="box">
                <ul>
                    <li><span>老人姓名</span><select name="" id="oldSelect" ></select></li>
                    <li><span>老人健康状况</span><input type="text" id="physicalCondition"></li>
                    <li><span>护理时间</span><input type="text" class="nurseDate date_picker" id="sdate"></li>
                    <li><span>护理用药情况</span><input type="text" id="nurseInfo"></li>
                    <li><span>护理人员</span><select name="" id="staffId"></select></li>
                    <li style="display: none"><input type="text" id="id"></li>
                    <div class="clearfix"></div>
                </ul>
            </div>
        </div>
    <#--增删改查按钮-->
        <div class="bottom bottom1">
            <button style="margin:auto" onclick="add()" id="add">添加</button>
            <button  onclick="update()" id="update" style="display: none;margin: auto">修改</button>
            <button  id="close" style="margin: auto">关闭</button>
            <div class="clearfix"></div>
        </div>
    </div>

    <div class="tcdPageCode">
    </div>
<#--增删改查按钮-->
    <div class="modify">
        <button class="pull-left btn-style btn-ma" id="openOldAdd"  ><img src="${domainUrl}/assets/images/backstage/jia.png">增加</button>
        <button class="pull-left btn-style btn-ma" onclick="del()"><img src="${domainUrl}/assets/images/backstage/del.png">删除</button>
        <div class="clearfix"></div>
    </div>
</div>
<script src="${domainUrl}/assets/js/TotalModule/filter.js"></script>
