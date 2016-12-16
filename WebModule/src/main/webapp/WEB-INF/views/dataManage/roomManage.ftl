
<link href="${domainUrl}/assets/css/public.css" rel="stylesheet">
<link href="${domainUrl}/assets/css/checkIn/checkIn.css" rel="stylesheet">
<script src="${domainUrl}/assets/js/TotalModule/checkIn/checkIn.js"></script>


<div class="overall" style="background-image: url(${domainUrl}/assets/images/backstage/bgg.jpg);">
<#--路径导航-->
    <div class="path">
        <ul>
            <li>您当前所在位置：</li>
            <li><a href="##">首页</a></li>
            <li><img src="${domainUrl}/assets/images/backstage/jiantou.png"></li>
            <li><a href="##">资料管理</a></li>
            <li><img src="${domainUrl}/assets/images/backstage/jiantou.png"></li>
            <li class="txt_color">房间管理</li>
            <div class="clearfix"></div>
        </ul>
    </div>
    <div class="floorDiv">
        <div class="floor">
            <ul id="side-floor">
            </ul>
        </div>
        <div class="roomTable">
            <table class="table" id="roomTable">
                <thead>
                <th>大厦</th><th>楼层</th><th>房间</th><th>床位</th>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        <div class="publicModal ">

        </div>
    </div>

</div>