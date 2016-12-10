
<link href="${domainUrl}/assets/css/public.css" rel="stylesheet">
<link href="${domainUrl}/assets/css/options/cost.css" rel="stylesheet">


<script>
    $('#myTab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
    $('#myTab a[href="#profile"]').tab('show') // Select tab by name
    $('#myTab a:first').tab('show') // Select first tab
    $('#myTab a:last').tab('show') // Select last tab
    $('#myTab li:eq(2) a').tab('show') // Select third tab (0-indexed)
</script>



<div class="cost">
    <h2>费用结算</h2>
    <div class="pull-left cost_l">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#detail" role="tab" data-toggle="tab">缴费明细</a></li>
            <li role="presentation"><a href="#service" role="tab" data-toggle="tab">特殊服务费</a></li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="detail">
                <table class="table table-bordered" id="costTable">

                </table>
            </div>

            <div role="tabpanel" class="tab-pane" id="service">
                <table class="table table-bordered" id="serviceChargeTable">
                    <thead>
                    <tr>
                        <th>编码</th>
                        <th>类型</th>
                        <th>状态</th>
                        <th>金额</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td> </td>
                        <td></td>

                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="pull-right cost_r">
        <h3>老人姓名</h3>
        <input type="text" id = "costOlderName" >
        <h3>合计金额</h3>
        <input type="text" id="moneyConut">
        <h3>现金收款</h3>
        <input type="text" id="moneyXian">
    </div>
    <div class="clearfix"></div>
    <div class="bottom">
        <button onclick="closeAnAccount()" id="addIs">结算</button>

        <button class="modalClose" >取消</button>
    </div>
</div>
<script src="${domainUrl}/assets/js/TotalModule/order/cost.js"></script>
<script src="${domainUrl}/assets/js/TotalModule/filter.js"></script>


