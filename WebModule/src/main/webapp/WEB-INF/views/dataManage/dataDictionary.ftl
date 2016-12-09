
<link href="${domainUrl}/assets/css/public.css" rel="stylesheet">
<link href="${domainUrl}/assets/css/dataManage/dataDictionary.css" rel="stylesheet">
<script src="${domainUrl}/assets/js/TotalModule/dataManage/dataDictionary.js"></script>




<div class="overall" style="background-image: url(${domainUrl}/assets/images/backstage/bgg.jpg);"><link href="${domainUrl}/assets/css/public.css" rel="stylesheet">

    <#--路径导航-->
        <div class="path">
            <ul>
                <li>您当前所在位置：</li>
                <li><a href="##">首页</a></li>
                <li><img src="${domainUrl}/assets/images/backstage/jiantou.png"></li>
                <li><a href="##">资料管理</a></li>
                <li><img src="${domainUrl}/assets/images/backstage/jiantou.png"></li>
                <li class="txt_color">数据字典</li>
                <div class="clearfix"></div>
            </ul>
        </div>

        <div id="dataMian">
            <div id="dataLeft">
                <ul id="dataFather">
                </ul>
                <input type="text" id="dataName" class="pull-left">
                <button onclick="add()" class="pull-left">添加</button>
                <div class="clearfix"></div>
            </div>
            <div id="dataRight">
                <ul id="dataSon">
                </ul>
                <input type="text" id="dataNameSon" class="pull-left">
                <button onclick="addSon()" class="pull-left" >添加</button>
                <div class="clearfix"></div>
                <input type="text" id="leaveSon" style="display: none;">
            </div>
        </div>


</div>