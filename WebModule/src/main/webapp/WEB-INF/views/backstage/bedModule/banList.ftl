<script src="${domainUrl}/assets/js/modules/bedModule/banList.js"></script>
<div id="now-position">
    您当前所在的位置：<span>楼门模块</span>
</div>

<div class="serve-banner">
    <an><input type="button" id="cao" value="添加楼门" data-toggle="modal" data-target="#myModal" onclick="clearModal()">
        <input type="button" value="平铺显示" id="tileShow">
        <input type="button" value="表格显示" id="tableShow" style="display: none;">
    </an>
</div>
<div class="main-module">

</div>
<#--分页-->
<div class="tcdPageCode" style="z-index: 9999">
</div>
<#--模态框-->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title  text-center" id="myModalLabel">
                    添加楼门
                </h3>
            </div>
            <div class="modal-body">
                <table class="add">
                    <tr>
                        <td>楼名</td>
                        <td><input type="text" id="entranceName" class="null" onkeyup="value=value.replace(/[^\d]/g,'')" maxlength="3"></td>
                    </tr>
                    <tr>
                        <td>楼门数</td>
                        <td><input type="text" id="entranceToalNum" onkeyup="value=value.replace(/[^\d]/g,'')" maxlength="6"></td>
                    </tr>
                    <tr>
                        <td>楼层</td>
                        <td><input type="text" id="floorToalNum" onkeyup="value=value.replace(/[^\d]/g,'')" maxlength="3"></td>
                    </tr>
                    <tr>
                        <td>楼门号</td>
                        <td><input type="text" id="entranceNum" class="null" onkeyup="value=value.replace(/[^\d]/g,'')" maxlength="6"><input type="text"id="lid"
                                                                                                                                             style="display: none;"></td>
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