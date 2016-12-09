
<link href="${domainUrl}/assets/css/public.css" rel="stylesheet">
<link href="${domainUrl}/assets/css/report/chargeList.css" rel="stylesheet">

<!--页面背景-->

<!---页面主体-->
<div class="overall" style="background-image: url(${domainUrl}/assets/images/backstage/bgg.jpg);">
<#--路径导航-->
    <div class="path">
        <ul>
            <li>您当前所在位置：</li>
            <li><a href="##">首页</a></li>
            <li><img src="${domainUrl}/assets/images/backstage/jiantou.png"></li>
            <li><a href="##">报表管理</a></li>
            <li><img src="${domainUrl}/assets/images/backstage/jiantou.png"></li>
            <li class="txt_color">收费清单</li>
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

<#--老人收费清单-->
<div class="chargeList">
    <div class="pull-left one">
        <h4>合同号<span>01001</span></h4>
    </div>
    <div class="pull-left one">
        <h3>老人收费清单</h3>
        <h3><span>2016-03-30</span></h3>
    </div>
    <div class="pull-left one"></div>
    <div class="clearfix"></div>


    <div class="pull-left two">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th colspan="8">老人基本情况</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td >姓名</td>
                <td><span>白晓辉</span></td>
                <td>性别</td>
                <td><span>男</span></td>
                <td >出生年月</td>
                <td><span>1963-6</span></td>
                <td>床位</td>
                <td><span>1104-2</span></td>
            </tr>
            <tr>
                <td>月费用</td>
                <td><span>3000</span></td>
                <td colspan="2">日住日期</td>
                <td colspan="2"><span>2016-7-05</span></td>
                <td>护理级别</td>
                <td><span>三级</span></td>
            </tr>
            </tbody>
        </table>
    </div>

    <div class="pull-right two">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th colspan="8">老人家属情况</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td >姓名</td>
                <td><span>白飞燕</span></td>
                <td>与老人关系</td>
                <td><span>父女</span></td>
                <td >联系电话</td>
                <td><span>15854238542</span></td>
                <td>备注</td>
                <td><span></span></td>
            </tr>
            <tr>
                <td >姓名</td>
                <td><span>白飞燕</span></td>
                <td>与老人关系</td>
                <td><span>父女</span></td>
                <td >联系电话</td>
                <td><span>15854238542</span></td>
                <td>备注</td>
                <td><span></span></td>
            </tr>
            </tbody>
        </table>
    </div>
    <div class="clearfix"></div>

    <div class="pull-left three">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th colspan="8">缴费情况</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>日期</td>
                <td>类型</td>
                <td>状态</td>
                <td>金额</td>
                <td >说明</td>
            </tr>
            <tr>
                <td><span></span></td>
                <td><span> </span></td>
                <td><span> </span></td>
                <td><span> </span></td>
                <td><span> </span></td>
            </tr>
            <tr>
                <td colspan="1">合计</td>
                <td colspan="7"><span></span></td>
            </tr>
            </tbody>
        </table>
    </div>
    <div class="pull-right three">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th colspan="8">欠费情况</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>类型</td>
                <td>欠费金额</td>
                <td >说明</td>
            </tr>
            <tr>
                <td><span> </span></td>
                <td><span> </span></td>
                <td><span> </span></td>
            </tr>
            <tr>
                <td colspan="1">合计</td>
                <td colspan="7"><span></span></td>
            </tr>
            </tbody>
        </table>
    </div>
    <div class=" clearfix"></div>

</div>








</div>