
<link href="${domainUrl}/assets/css/options/monthStart.css" rel="stylesheet">

<div class="tally">
    <h2>特殊服务费</h2>
    <div class="feiyong">
        <div class="box">
            <ul>
                <li><span>服务项目</span><input type="text" id="serviceCharge"></li>
                <li><span class="ma">状态</span><input type="text" id="serviceChargeContext"></li>
                <li class="wi"><span>说明</span><input type="text" id="serviceChargeState"> </li>
                <li><span>产生时间</span><input type="text" id="serviceChargeDate"></li>
                <li><span>结算时间</span><input type="text" id="closeAnAccountDate"></li>
                <li style="display: none;"><input type="text" id="id"></li>
                <div class="clearfix"></div>
            </ul>
        </div>
    </div>
<#--增删改查按钮-->
    <div class="bottom">
        <button onclick="add()" id="addIs">确认添加</button>
        <button onclick="update()" id="updateIs">保存修改</button>
        <button class="modalClose" >取消</button>
    </div>
</div>
