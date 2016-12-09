
<link href="${domainUrl}/assets/css/options/monthStart.css" rel="stylesheet">
<div class="tally">
    <h2>大厦管理</h2>
    <div class="feiyong">
        <div class="box">
            <ul>
                <li class="wi"><span>大厦名称</span><input type="text" id="name"></li>
                <li class="wi"><span >说明</span><input type="text" id="accountFor"></li>
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
