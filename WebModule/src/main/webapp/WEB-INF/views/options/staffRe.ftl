
<div class="tally">
    <h2>员工请假</h2>
    <div class="feiyong">
        <div class="box">
            <ul>
                <li><span>姓名</span><input type="text" id="staffId"></li>
                <li><span>请假日期</span><input type="text" id="leaveDate"></li>
                <li><span>说明</span><input type="text" id="accountFor"></li>
                <li><span>操作人员</span><input type="text" id="handleStaffId"></li>
                <li><span>操作日期</span><input type="text" id="handleDate"></li>
                <li style="display: none"><input type="text" id="id"></li>
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
