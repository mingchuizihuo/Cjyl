<script src="${domainUrl}/assets/js/modules/costModule/costList.js"></script>
<div id="now-position">
    您当前所在的位置：<span>费用模块</span>
</div>

<div class="serve-banner">
    <an><input type="button" id="cao" value="添加消费记录" data-toggle="modal" data-target="#myModal">
        <input type="button" value="平铺显示" id="tileShow">
        <input type="button" value="表格显示" id="tableShow">
    </an>
</div>
<div class="main-module">

</div>
<#--分页-->
<div class="tcdPageCode">
</div>
<#--模态框-->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title  text-center" id="myModalLabel">
                    添加消费记录
                </h3>
            </div>
            <div class="modal-body">
                <table class="add">
                    <tr>
                        <td>费用</td>
                        <td><input type="text" id="costNum" class="null"></td>
                    </tr>
                    <tr>
                        <td>费用类型</td>
                        <td><select type="text" id="costType"></select></td>
                    </tr>
                    <tr id="tr2" style="display: none;">
                        <td></td>
                        <td><select id="costType2" ></select></td>
                    </tr>
                    <#--<tr>-->
                        <#--<td>类型</td>-->
                        <#--<td>-->
                            <#--<select>-->
                                <#--<option value="">请选择</option>-->
                                <#--<option value="">洗漱用品</option>-->
                                <#--<option value="">服务费用</option>-->
                                <#--<option value="">睡衣费</option>-->
                                <#--<option value="">体检费</option>-->
                                <#--<option value="">门卡费</option>-->
                                <#--<option value="">手续费</option>-->
                            <#--</select>-->
                        <#--</td>-->
                    <#--</tr>-->
                    <tr>
                        <td>正常消费</td>
                        <td><select name="" id="costInOut">
                            <option value="">请选择</option>
                            <option value="1">收入</option>
                            <option value="2">支出</option>
                        </select></td>
                    </tr>
                    <script type="text/javascript">
                        $(function () {
                            $('.date_picker').date_input();
                        })
                    </script>
                    <tr>
                        <td>消费时间</td>
                        <td><input type="text" id="costDate" class="date_picker" style="text-align: center"><input type="text" id="lid" style="display: none;"></td>
                    </tr>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary" id="add-btn" onclick="add()">添加</button>
                <button type="button" class="btn btn-primary" id="update-btn" style="display: none;" onclick="update()">修改
                </button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>