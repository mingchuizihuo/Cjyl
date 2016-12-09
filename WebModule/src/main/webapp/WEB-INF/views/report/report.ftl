
<link href="${domainUrl}/assets/css/public.css" rel="stylesheet">
<link href="${domainUrl}/assets/css/report/report.css" rel="stylesheet">
<script src="${domainUrl}/assets/js/OutJs/ichart/ichart.1.2.min.js"></script>
<script src="${domainUrl}/assets/js/report/report.js"></script>

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
            <li class="txt_color">其他报表</li>
            <div class="clearfix"></div>
        </ul>
    </div>
    <div class="report">
        <div class="pull-left re_l">
            <div id='canvasDiv'></div>
        </div>
        <div class="pull-right re_r">
            <div id='canvasDiv1'></div>
        </div>
        <div class="clearfix"></div>
    </div>







</div>