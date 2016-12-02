<script src="${domainUrl}/assets/js/modules/stockModule/stockList.js"></script>
<div id="now-position">
    您当前所在的位置：<span>库存模块</span>
</div>

<div class="serve-banner">
    <an><input type="button" value="添加资产" data-toggle="modal" data-target="#myModal" onclick="clearModal()">
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
                    添加库存
                </h3>
            </div>
            <div class="modal-body">
                <table class="add">
                    <tr>
                        <td>库存名称</td>
                        <td><input type="text" id="stockName" class="null"></td>
                    </tr>
                    <tr>
                        <td>库存类型</td>
                        <td><select type="text" id="stockTypeId"></select></td>
                    </tr>
                    <tr id="tr2" style="display: none;">
                        <td></td>
                        <td><select id="stockTypeId2" ></select></td>
                    </tr>
                    <tr>
                        <td>库存数量</td>
                        <td><input type="text" id="stockNum" onkeyup="value=value.replace(/[^\d]/g,'')" maxlength="8"></td>
                    </tr>

                    <script type="text/javascript">
                        $(function () {
                            $('.date_picker').date_input();
                        })
                    </script>
                    <tr>
                        <td>入库时间</td>
                        <td><input type="text" id="stockUpdateDate" class="date_picker" placeholder="时间"
                                   style="text-align: center"><input type="text" id="lid" style="display: none;"></td>
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
<#--模态框-->
<div class="modal fade" id="myModalDaily" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title  text-center" id="myModalLabel">
                    操作日志
                </h3>
            </div>
            <div class="modal-body">
                <table class="add">
                    <tr>
                        <td>库存名称</td>
                        <td id="stockNameLog"></td>
                    </tr>
                    <tr>
                        <td>库存数量</td>
                        <td id="stockNumLog"></td>
                    </tr>
                    <tr>
                        <td>库存状况</td>
                        <td>在库</td>
                    </tr>
                    <tr>
                        <td>操做记录</td>
                        <td id="stockDateLog"></td>
                    </tr>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>