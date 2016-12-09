
<link href="${domainUrl}/assets/css/options/monthStart.css" rel="stylesheet">

<div class="tally">
    <h2>入住初始费用</h2>
    <div class="feiyong">
        <div class="box">
            <ul>
                <li><span>初始项目</span><input type="text" id="item"></li>
                <li><span class="ma">是否可退款</span>
                    <select class="form-control select">
                        <option>是</option>
                        <option>否</option>
                    </select></li>
                <li><span>费用</span><input type="text" id="money"> </li>
                <li><span class="ma">说明</span><input type="text" id="accountFor"></li>
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
