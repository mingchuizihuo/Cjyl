<script type="text/javascript">
    $(function () {
        $('.date_picker').date_input();
    })
</script>
<div class="tally">
    <h2>护理费用记账</h2>
    <div class="feiyong">
        <div class="box">
            <ul>
                <li><span>编码</span><input type="text" id="olderId"></li>
                <li><span>健康状况</span><input type="text" id="physicalCondition"> </li>
                <li><span>用药情况</span><input type="text" id="nurseInfo"></li>
                <li><span>护理时间</span><input type="text" class="nurseDate date_picker" id="sdate"></li>
                <li><span>护理人员</span><input type="text" id="staffId"></li>
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
