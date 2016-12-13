<link href="${domainUrl}/assets/css/public.css" rel="stylesheet">
<link href="${domainUrl}/assets/css/oldman/oldman.css" rel="stylesheet">
<link href="${domainUrl}/assets/css/options/nurse.css" rel="stylesheet">
<script src="${domainUrl}/assets/js/TotalModule/oldman/stayIn.js"></script>

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
            <li class="txt_color">入住初始费</li>
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
                    <th>初始费用</th>
                    <th>费用状态</th>
                    <th>产生时间</th>
                    <th>结算时间</th>
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
        <h2>入住初始费</h2>
        <div class="feiyong">
            <div class="box">
                <ul>
                    <#--<li><span>老人姓名</span>-->
                        <#--<input type="text" list="oldSelect" name="link" >-->
                        <#--<datalist id="oldSelect" >-->
                            <#--<option value="">-->
                            <#--<option value="">-->
                            <#--<option value="">-->
                            <#--<option value="">-->
                        <#--</datalist>-->
                     <#--</li>-->
                    <li><span>老人姓名</span><select name="" id="oldSelect"></select></li>
                    <li><span>初始费</span><select name="" id="checkInInitCostId"></select></li>
                    <li><span>费用状态</span><input type="text"  id="checkInInitCostState" ></li>
                    <li></li>
                    <li><span>产生时间</span><input type="text"  class="initialFeeDate date_picker" id="sdate"></li>
                    <li><span>结算时间</span><input type="text" class="closeAnAccount date_picker" id="sdate"></li>
                    <li style="display: none"><input type="text" id="id"></li>
                    <div class="clearfix"></div>
                </ul>
            </div>
        </div>

    <#--增删改查按钮-->
        <div class="bottom bottom1">
            <button style="margin:auto;" onclick="add()" id="add">添加</button>
            <button  onclick="update()" id="update" style="display: none;margin: auto">修改</button>
            <button  id="close" style="margin: auto">关闭</button>
            <div class="clearfix"></div>
        </div>
    </div>

    <div class="tcdPageCode">
    </div>
<#--增删改查按钮-->
    <div class="modify">
        <button class="pull-left btn-style btn-ma" id="openOldAdd" ><img src="${domainUrl}/assets/images/backstage/jia.png">增加</button>
        <button class="pull-left btn-style btn-ma" onclick="del()"><img src="${domainUrl}/assets/images/backstage/del.png">删除</button>
        <div class="clearfix"></div>
    </div>
</div>

<script src="${domainUrl}/assets/js/TotalModule/filter.js"></script>
