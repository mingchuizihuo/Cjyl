<script src="${domainUrl}/assets/js/modules/foodModule/foodList.js"></script>
<div id="now-position">
    您当前所在的位置：<span>菜品列表</span>
</div>
<div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: #DDD; opacity: .5; z-index:999; display: none;" id="aaaa">
</div>
<div id="box">
    <div id="test" ></div>
</div>
<div class="serve-banner">
    <an><input type="button" id="cao" value="添加菜品" data-toggle="modal" data-target="#myModal" onclick="clearModal()" >
        <input type="button" value="平铺显示" id="tileShow">
        <input type="button" value="表格显示" id="tableShow" style="display: none;">
    </an>
</div>

<div class="main-module">

</div>
<#--分页-->
<div class="tcdPageCode" style="z-index: 9999">
</div>
<#--添加服务模态框-->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title  text-center" id="myModalLabel">
                    添加菜品
                </h3>
            </div>
            <div class="modal-body">
                <table class="add">
                    <tr>
                        <td>菜品名称</td>
                        <td><input type="text" id="dishesName" class="null"></td>
                    </tr>
                    <#--<tr>-->
                        <#--<td>菜品口味</td>-->
                        <#--<td><input type="text" id="dishesTaste"/></td>-->
                    <#--</tr>-->
                    <tr>
                        <td>菜品口味</td>
                        <td><select id="dishesTaste"></select></td>
                    </tr>
                    <tr  id="tr2" style="display: none;">
                        <td></td>
                        <td><select  id="dishesTaste2"></select></td>
                    </tr>
                    <#--<tr>-->
                        <#--<td>过敏原</td>-->
                        <#--<td><input type="text" id="dishesAllergen"></td>-->
                    <#--</tr>-->
                    <tr>
                        <td>过敏原</td>
                        <td><select id="dishesAllergen" ></select></td>
                    </tr>
                    <tr  id="tr22" style="display: none;">
                        <td></td>
                        <td><select id="dishesAllergen2" ></select></td>
                    </tr>
                    <tr>
                        <td>适合人群</td>
                        <td><input type="text" id="dishesSuitPeople" class="null"></td>
                    </tr>

                    <#--<tr>-->
                        <#--<td>营养价值</td>-->
                        <#--<td><input type="text" id="dishesNutritiveValue" class="null"></td>-->
                    <#--</tr>-->
                    <tr>
                        <td>营养价值</td>
                        <td><select id="dishesNutritiveValue"></select></td>
                    </tr>
                    <tr id="tr222" style="display: none;">
                        <td></td>
                        <td><select  id="dishesNutritiveValue2"></select></td>
                    </tr>
                    <tr>
                        <td>重量</td>
                        <td><input type="text" id="dishesWeight" class="null"></td>
                    </tr>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary" id="add-btn" onclick="add()">添加</button>
                <button type="button" class="btn btn-primary" id="update-btn" onclick="update()"
                        style="display: none;">修改
                </button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>
<#--添加模态框-->
<div class="modal fade" id="myModalCost" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title  text-center" id="myModalLabel">
                    添加计费模板
                </h3>
            </div>
            <div class="modal-body">
                <table class="add">
                    <tr>
                        <td>计费方式</td>
                        <td><select class="serveCost" id="serveCost2"></select></td>
                    </tr>
                    <tr>
                        <td>价格</td>
                        <td><input type="text" id="costPirce2"></td>
                    </tr>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary" id="add-cost"
                ">添加</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>