<link href="${domainUrl}/assets/css/alone/oldMan.css" rel="stylesheet">
<script src="${domainUrl}/assets/js/modules/inspectionModule/jcInspectionItem.js"></script>
<div id="now-position">
    您当前所在的位置：<span>检查模块</span>
</div>
<div class="serve-banner">
    <an><input type="button" id="cao" value="添加检查项目" data-toggle="modal" data-target="#myModal">
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
                    添加检查项目
                </h3>
            </div>
            <div class="modal-body">
                <table class="add">
                    <tr>
                        <td>健康状况名</td>
                        <td><input type="text" id="inspectionItemName"></td>
                    </tr>
                    <tr>
                        <td>正常值上限</td>
                        <td><input type="text" id="normalValueUpperLimit"></td>
                    </tr>
                    <tr>
                        <td>正常值下限</td>
                        <td><input type="text" id="normalValueUpperFloor"></td>
                    </tr>
                    <tr>
                        <td>值类型</td>
                        <td>
                            <select id="inspectionItemValueType" style="margin-left: 20px;">
                                <option>请选择</option>
                                <option value="1">文本框</option>
                                <option value="2">复选框</option>
                                <option value="3">单选框</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>单位</td>
                        <td><input type="text" id="unit" placeholder="单位"></td>
                    </tr>
                    <tr style="display: none;">
                        <td>状况</td>
                        <td><input type="text" id="inspectionItemNameKey"></td>
                    </tr>
                    <tr>
                        <td>描述</td>
                        <td><textarea type="text" id="inspectionItemDescribe"  style="margin-left: 20px;"></textarea></td>
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
<div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title  text-center" id="myModalLabel">
                    添加选项值框
                </h3>
            </div>
            <div class="modal-body">
                <form id="form">
                <table class="add">
                    <tr id="startOption">
                        <td>健康状况名</td>
                        <td><input type="text" name="name" id="inspectionItemName"></td>
                        <td><input type="button" class="btn"  value="增加选项" id="addOption"></td>
                        <td style="display: none;"><input type="text" id="typeId"></td>
                    </tr>
                </table>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary" id="add-btn" onclick="addValue()">添加</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>