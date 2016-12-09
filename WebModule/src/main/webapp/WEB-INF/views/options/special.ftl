<script type="text/javascript">
    $(function () {
        $('.date_picker').date_input();
    })
</script>
<div class="tally">
    <h2>服务费用记账</h2>
    <div class="feiyong">
        <div class="box">
            <ul>
                <li><span>老人</span><input type="text" id="olderId"></li>
                <li><span>特殊服务</span><input type="text" id="serviceCharge"></li>
                <li><span>说明</span><input type="text" id="serviceChargeContext"> </li>
                <li><span>费用状态</span><input type="text" id="serviceChargeState"></li>
                <li><span>产生时间</span><input type="text" class="serviceChargeDate date_picker" id="sdate" ></li>
                <li><span>结算时间</span><input type="text" class="closeAnAccountDate date_picker" id="sdate" ></li>
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
