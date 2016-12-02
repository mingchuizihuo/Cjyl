<link href="${domainUrl}/assets/css/alone/foodWeek.css" rel="stylesheet">
<script src="${domainUrl}/assets/js/modules/foodModule/foodWeek.js"></script>
<div id="now-position">
    您当前所在的位置：<span>本周食譜</span>
</div>
<div class="serve-banner">
<#--时间控件-->
    <script type="text/javascript">
        $(function () {
            $('.date_picker').date_input();
        })
    </script>
    <div id="date-input">
        <date>时间范围</date>
        <input type="text" class="date_picker" value="2015-01-01" style="text-align: center">
        <date><input type="button" id="cao" value="搜索"></date>
    </div>
</div>
<div class="content">
    <div id="weekTitle"></div>
    <!--本周食谱一周-->
    <div class="recipesList animated">

    </div>


    <!--食物弹出详情-->
    <div class="introduce" id="introduce">
        <div class="list-group-item">
            <h4 class="list-group-item-heading">口味:</h4>
            <p class="list-group-item-text" id="dishesTaste">咸</p>
        </div>
        <div class="list-group-item">
            <h4 class="list-group-item-heading">过敏原:</h4>
            <p class="list-group-item-text" id="dishesAllergen">无</p>
        </div>
        <div class="list-group-item">
            <h4 class="list-group-item-heading">适合人群:</h4>
            <p class="list-group-item-text" id="dishesSuitPeople">1、高温、重体力劳动、经常出汗的人需要注意补充钠2、皮肤黏膜及指甲等颜色苍白，体力活动后感觉气促、骨质疏松、心悸症状的人群。</p>
        </div>
        <div class="list-group-item">
            <h4 class="list-group-item-heading">营养价值:</h4>
            <p class="list-group-item-text" id="dishesNutritiveValue">提供能量：油条含有蛋白质、脂肪、碳水化合物、维生素及钙、磷、钾等矿物质，是高热量、高油脂的食物。</p>
        </div>
        <div class="list-group-item">
            <h4 class="list-group-item-heading">重量:</h4>
            <p class="list-group-item-text" id="dishesWeight">1.1kg</p>
        </div>
        <input type="button" value="关闭" id="closeFoodDiv" class="btn" >
    </div>
    <!--底部预览上一周食谱跟下一周食谱-->
    <div class="review">
        <button class="pull-right" id="nextDate">下一周<i class="glyphicon glyphicon-arrow-right"></i></button>
        <button class="pull-right" id="lastDate"><i class="glyphicon glyphicon-arrow-left"></i>上一周</button>
        <div class="clearfix"></div>
    </div>
</div>

<!--菜品选择-->
<div class="choose" style="display: none;">
    <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">菜品选择</h4>
        </div>
        <div class="modal-body foodListShow">
            <#--<a class="">油条</a>-->
            <#--<a class="bb" >干煸大头菜心</a>-->
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn1" id="closeFoodAdd">关闭</button>
            <button type="button" class="btn btn1" value="111" id="foodOk" onclick="foodListAddUrl()">确认选择</button>
        </div>
    </div>
</div>
