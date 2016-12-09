<link href="${domainUrl}/assets/css/public.css" rel="stylesheet">
<link href="${domainUrl}/assets/css/order/dateil.css" rel="stylesheet">

<!--页面背景-->

<!---页面主体-->
<div class="overall" style="background-image: url(${domainUrl}/assets/images/backstage/bgg.jpg);">

<#--路径导航-->
    <div class="path">
        <ul>
            <li>您当前所在位置：</li>
            <li><a href="##">首页</a></li>
            <li><img src="${domainUrl}/assets/images/backstage/jiantou.png"></li>
            <li><a href="##">订单管理</a></li>
            <li><img src="${domainUrl}/assets/images/backstage/jiantou.png"></li>
            <li class="txt_color">明细查询</li>
            <div class="clearfix"></div>
        </ul>
    </div>
<#--查询导航-->
    <div class="query">
        <ul>
            <li>查询条件</li>
            <li>姓名<input type="text"></li>
            <script type="text/javascript">
                $(function () {
                    $('.date_picker').date_input();
                })
            </script>
            <li>入住时间<input type="text" id="sdate" class="date_picker" style="text-align: center"></li>
            <li>手机号<input type="text"></li>
            <li>身份证号<input type="text"></li>
            <button class="pull-right btn-style"><i class="glyphicon glyphicon-search"></i>查询</button>
            <div class="clearfix"></div>
        </ul>
    </div>

    <div class="dateil">
        <div class="aa">
            <table class="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>缴费单号</th>
                    <th>日期</th>
                    <th>类型</th>
                    <th>状态</th>
                    <th>姓名</th>
                    <th>金额</th>
                    <th>说明</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>123054</td>
                    <td>2016-10-5</td>
                    <td>服务费</td>
                    <td>良好</td>
                    <td>白晓辉</td>
                    <td>3000</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>123066</td>
                    <td>2016-10-6</td>
                    <td>服务费</td>
                    <td>良好</td>
                    <td>陈泽</td>
                    <td>3000</td>
                    <td>无</td>
                </tr>
                </tbody>
            </table>
        </div>


    </div>






</div>