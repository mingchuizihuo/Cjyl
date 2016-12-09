
<link href="${domainUrl}/assets/css/options/monthStart.css" rel="stylesheet">

<div class="tally">
    <h2>月初始费</h2>
    <div class="feiyong">
        <div class="box">
            <ul>
                <li><span>护理级别</span><input type="text" id="nursingGrades"></li>
                <li><span class="ma">管理费</span><input type="text" id="administrativeFee"></li>
                <li><span>服务费用</span><input type="text" id="serviceCharge"> </li>
                <li><span class="ma">床位费用</span><input type="text" id="bedCost"></li>
                <li><span>伙食费用</span><input type="text" id="foodCost"></li>
                <li><span class="ma">总计</span><input type="text" id="total"></li>
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
