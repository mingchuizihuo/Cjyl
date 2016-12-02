<#--右向箭头-->
<div class="side-button" id="right-canvas">
    <div class="breath_light"><img src="${domainUrl}/assets/images/report/right1.png" /></div>
</div>

<#--地图-->
<div id="start" class="animated">
    <div id="mainMap" style="height:100%;width: 100%;padding:7% 7% 7% 10%;">
    </div>
</div>
<#--地图配置js-->
<script src="${domainUrl}/assets/js/OutJs/map/charts/echarts.js"></script>
<script src="${domainUrl}/assets/js/OutJs/map/mapStart.js"></script>
<script>
    $(function () {
        $("#right-canvas").click(function () {
            $("#main-body").removeClass("fadeInLeft").addClass("fadeOutLeft");
            $(".chart-left").removeClass("fadeOutRight").addClass("fadeInRight").show();
            $("#left-canvas").show();
            $(".moduleaaDown").addClass("bounceInDown");
            $(".moduleaaLeft").addClass("bounceInLeft");
            $(".moduleaaRight").addClass("bounceInLeft");
            setTimeout(function () {
                $("#baobiaoHide").show();
            }, 700);
            setTimeout(function () {
                $(".moduleaaDown").removeClass("bounceInDown");
                $(".moduleaaLeft").removeClass("bounceInLeft");
                $(".moduleaaRight").removeClass("bounceInLeft");
            }, 2000);

        })
    })
</script>