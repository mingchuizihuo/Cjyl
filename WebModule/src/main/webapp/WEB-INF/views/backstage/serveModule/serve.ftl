<script src="${domainUrl}/assets/js/modules/serveModule/serve.js"></script>
<script src="${domainUrl}/assets/js/modules/serveModule/serveClassFindAll.js"></script>

<div id="now-position">
    您当前所在的位置：<span>服务模块</span>
</div>
<div class="serve-banner">
    <an><input type="button" value="添加服务" data-toggle="modal" data-target="#myModal" onclick="clearModal()">
        <input type="button" value="平铺显示" id="tileShow" >
        <input type="button" value="表格显示" id="tableShow" >
    </an>
</div>
<div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: #DDD; opacity: .5; z-index:999; display: none;" id="aaaa">
</div>
<div id="box">
    <div id="test" ></div>
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
                    添加服务
                </h3>
            </div>
            <div class="modal-body">
                <table class="add">
                    <tr>
                        <td>服务类别</td>
                        <td><select id="sel1"></select></td>
                    </tr>
                    <tr style="display: none;" id="tr2">
                        <td></td>
                        <td><select id="sel2"></select></td>
                    </tr>
                    <tr style="display: none;" id="tr3">
                        <td></td>
                        <td><select id="sel3"></select></td>
                    </tr>
                    <tr>
                        <td>服务标题</td>
                        <td><input type="text" id="mingcheng" class="null"></td>
                    </tr>
                    <tr>
                        <td>计费方式</td>
                        <td><select id="serveCost"></select></td>
                    </tr>
                    <tr>
                        <td>价格</td>
                        <td><input type="text" id="costPirce" onkeyup="value=value.replace(/[^\d]/g,'')" maxlength="8"></td>
                    </tr>
                    <tr>
                        <td>限制条件</td>
                        <td><input type="text" id="tiaojian" class="null"></td>
                    </tr>
                    <tr>
                        <td>服务人数</td>
                        <td><input type="text" id="renshu" class="null" onkeyup="value=value.replace(/[^\d]/g,'')"  maxlength="3"></td>
                    </tr>
                    <tr>
                        <td style="position: absolute; margin-top: 5px;">服务简介</td>
                        <td><textarea id="jianjie" class="null"></textarea><input type="text" id="xid" style="display: none;">
                        </td>
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
<#--添加计费模态框-->
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
                <button type="button" class="btn btn-primary" id="add-cost">添加</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>