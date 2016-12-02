        <html>
<head>
    <link href="${domainUrl}/assets/css/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link href="${domainUrl}/assets/css/Normalize.css" rel="stylesheet">
    <link href="${domainUrl}/assets/css/animate.css" rel="stylesheet">
    <link href="${domainUrl}/assets/css/mainBody.css" rel="stylesheet">
    <link href="${domainUrl}/assets/css/mainShowTable.css" rel="stylesheet">
    <link href="${domainUrl}/assets/css/mainShowTile.css" rel="stylesheet">
    <link href="${domainUrl}/assets/css/classifyTree.css" rel="stylesheet">
    <link href="${domainUrl}/assets/css/costDiv.css" rel="stylesheet">
    <link href="${domainUrl}/assets/css/OutCss/page/page.css" rel="stylesheet">
    <link href="${domainUrl}/assets/css/OutCss/upload/diyUpload.css" rel="stylesheet">
    <link href="${domainUrl}/assets/css/OutCss/upload/webuploader.css" rel="stylesheet">
    <link href="${domainUrl}/assets/css/OutCss/date/jquery.data_input.pack.css" rel="stylesheet">
    <link href="${domainUrl}/assets/css/alone/chartShow.css" rel="stylesheet">
    <meta charset="utf-8"/>
    <title>承嘉智慧养老中心</title>
</head>
<script>
    var domainUrl = '${domainUrl}' + "/rest";
    var domainFile = '${domainUrl}';
</script>
<body>
<#--背景鼠标晃动效果-->
<div id="backSpially">
    <div id="large-header" class="large-header" style="background-image: url('${domainUrl}/assets/images/serve/shujuback2.jpg');  min-width: 1400px; height: 100%">
    </div>
</div>
<#--页面整体布局（绝对定位不出现页面滚动）-->
<div id="main-body" class="animated">
<#--页面头部-->
    <div id="main-head">
        <div id="logo">
            <a href="${domainUrl}"><img src="${domainUrl}/assets/images/index/logo2.png"></a>
        </div>
        <div id="user-status">
            <tui><a href="${domainUrl}">[ 退出 ]</a></tui>
            欢迎您：<b>${(userBean.loginName)!}</b>
        </div>
    </div>
<#--中间部分-->
    <div id="center-flex">
    <#--页面侧边栏-->
        <div id="main-side">
            <ul id="sideList" class="accordion">
                <li>
                    <div class="link"><i class="glyphicon glyphicon-plus-sign"></i>服务模块<i
                            class="glyphicon glyphicon-chevron-up"></i></div>
                    <ul class="submenu">
                        <li><a onclick="sideUrl('/backstage/serveModule/serve')">服务</a></li>
                        <li><a onclick="sideUrl('/backstage/serveModule/classify')">类别</a></li>
                        <li><a onclick="sideUrl('/backstage/serveModule/cost')">计费</a></li>
                        <li><a onclick="sideUrl('/backstage/serveModule/staff')">员工</a></li>
                        <li><a onclick="sideUrl('/backstage/serveModule/nurseify')">护理</a></li>
                        <li><a onclick="sideUrl('/backstage/serveModule/pack')">打包</a></li>
                        <li><a onclick="sideUrl('/backstage/serveModule/upload')">上传</a></li>
                    </ul>
                </li>
                <li>
                    <div class="link"><i class="glyphicon glyphicon-plus-sign"></i>老人模块<i
                            class="glyphicon glyphicon-chevron-up"></i></div>
                    <ul class="submenu">
                        <li><a onclick="sideUrl('/backstage/oldModule/oldMan')">老人信息</a></li>
                        <li><a onclick="sideUrl('/backstage/oldModule/oldManType')">对象类型</a></li>
                        <li><a onclick="sideUrl('/backstage/oldModule/oldManState')">老人状态</a></li>
                    </ul>
                </li>
                <li>
                    <div class="link"><i class="glyphicon glyphicon-plus-sign"></i>饮食模块<i
                            class="glyphicon glyphicon-chevron-up"></i></div>
                    <ul class="submenu">
                        <li><a onclick="sideUrl('/backstage/foodModule/foodList')">饮食列表</a></li>
                        <li><a onclick="sideUrl('/backstage/foodModule/foodClassify')">饮食分类</a></li>
                        <li><a onclick="sideUrl('/backstage/foodModule/foodMaterial')">食材配料</a></li>
                        <li><a onclick="sideUrl('/backstage/foodModule/foodNutriment')">营养物质</a></li>
                        <li><a onclick="sideUrl('/backstage/foodModule/foodWeek')">本周食谱</a></li>
                    </ul>
                </li>
                <li>
                    <div class="link"><i class="glyphicon glyphicon-plus-sign"></i>床位管理<i
                            class="glyphicon glyphicon-chevron-up"></i></div>
                    <ul class="submenu">
                        <li><a onclick="sideUrl('/backstage/bedModule/banList')">楼门列表</a></li>
                        <li><a onclick="sideUrl('/backstage/bedModule/roomList')">房间列表</a></li>
                        <li><a onclick="sideUrl('/backstage/bedModule/roomClassify')">房间类型</a></li>
                        <li><a onclick="sideUrl('/backstage/bedModule/bedList')">床位列表</a></li>
                        <li><a onclick="sideUrl('/backstage/bedModule/bedClassify')">床位类型</a></li>
                        <li><a onclick="sideUrl('/backstage/bedModule/bedCost')">床位价格</a></li>
                    </ul>
                </li>
                <li>
                    <div class="link"><i class="glyphicon glyphicon-plus-sign"></i>检查项目表<i
                            class="glyphicon glyphicon-chevron-up"></i></div>
                    <ul class="submenu">
                        <li><a onclick="sideUrl('/backstage/inspectionModule/inspectionItem')">检查项目</a></li>
                        <li><a onclick="sideUrl('/backstage/inspectionModule/inspection')">检查项目列表</a></li>
                        <li><a onclick="sideUrl('/backstage/inspectionModule/inspectionInput')">检查项目表</a></li>
                    </ul>
                </li>
                <li>
                    <div class="link"><i class="glyphicon glyphicon-plus-sign"></i>资产模块<i
                            class="glyphicon glyphicon-chevron-up"></i></div>
                    <ul class="submenu">
                        <li><a onclick="sideUrl('/backstage/fixedModule/fixedList')">资产列表</a></li>
                        <li><a onclick="sideUrl('/backstage/fixedModule/fixedClassify')">资产分类</a></li>
                    </ul>
                </li>
                <li>
                    <div class="link"><i class="glyphicon glyphicon-plus-sign"></i>收费模块<i
                            class="glyphicon glyphicon-chevron-up"></i></div>
                    <ul class="submenu">
                        <li><a onclick="sideUrl('/backstage/costModule/costList')">费用列表</a></li>
                        <li><a onclick="sideUrl('/backstage/costModule/costClassify')">费用类型</a></li>
                    </ul>
                </li>
                <li>
                    <div class="link"><i class="glyphicon glyphicon-plus-sign"></i>库存模块<i
                            class="glyphicon glyphicon-chevron-up"></i></div>
                    <ul class="submenu">
                        <li><a onclick="sideUrl('/backstage/stockModule/stockList')">库存列表</a></li>
                        <li><a onclick="sideUrl('/backstage/stockModule/stockClassify')">库存类型</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    <#--页面主体-->
        <div id="main-show">

        </div>
</div>
<#--页面尾部-->
    <div id="main-foot">天津爱迪尔软件开发有限公司</div>
</div>
    <div class="chart-left animated" id="shujuback">
    <#--返回按钮-->
        <div class="side-button-left" id="left-canvas" style="display: none;">
            <img src="${domainUrl}/assets/images/report/left1.png"  />
        </div>
        <div id="baobiaoHide" style="display: none;">
        <div class="top">
            <div class="module moduleaaLeft animated moduleaa">
                <div class="mo_t red1" ></div>
                <h2>入住管理</h2>
                <div class="aa red2 blur"></div>
                <div class="mo_b">
                    <div class="pull-left icon"> <img src="${domainUrl}/assets/images/report/qun.png"  /></div>
                    <div class="pull-right txt">
                        <h3>床位入住率</h3>
                        <!--进度条-->
                        <div class="progress">
                            <div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
                                <span class="sr-only">60% Complete</span>
                            </div>
                        </div>
                        <h4>60%</h4>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
            <div class="module moduleaaDown  animated  moduleaa">
                <div class="mo_t yellow1"></div>
                <h2>服务收益</h2>
                <div class="aa yellow2 blur"></div>
                <div class="mo_b">
                    <div class="pull-left icon"> <img src="${domainUrl}/assets/images/report/shouyi.png"  /></div>
                    <div class="pull-right txt">
                        <h3 style="margin-bottom:0px;">年度服务收益</h3>
                        <!--柱状图-->
                        <div id='canvasDiv1' class="pull-right"></div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
            <div class="module animated  moduleaaRight moduleaa">
                <div class="mo_t cheng1"></div>
                <h2>库存容量</h2>
                <div class="aa cheng2 blur"></div>
                <div class="mo_b">
                    <div class="pull-left icon"> <img src="${domainUrl}/assets/images/report/kucun.png" /></div>
                    <div class="pull-right txt">
                        <h3>仓库存量显示</h3>
                        <!--进度条-->
                        <div class="progress">
                            <div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 80%;">
                                <span class="sr-only">80% Complete</span>
                            </div>
                        </div>
                        <h4>80%</h4>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
            <div class="module bb">
                <div class="mo_t blue1"></div>
                <h2>人员年龄性别比例</h2>
                <div class="cc blue2 blur"></div>
                <ul class="mo_b mo_b1">
                    <div class='wrapper pull-left  animated bounceInLeft ' style="width:50%"  id="quxianbiao">
                        <canvas height='350' id='canvas' width='800'></canvas>
                    </div>
                    <!--饼状图-->
                    <div class="pull-right bing">
                        <div class="pull-left tu animated bounceInUp" id="bing"></div>
                        <div class="pull-right txt animated bounceInRight">
                            <div class="alert alert-success" role="alert">今天请假员工<span>3</span>人<span class="pull-right">2016年11月4日</span><div class="clearfix"></div></div>
                            <div class="alert alert-info" role="alert">今天请假员工<span>7</span>人<span class="pull-right">2016年11月3日</span><div class="clearfix"></div></div>
                            <div class="alert alert-warning" role="alert">今日员工全部出勤<span class="pull-right">2016年11月2日</span><div class="clearfix"></div></div>
                            <div class="alert alert-danger" role="alert">今日员工全部出勤<span class="pull-right">2016年11月1日</span><div class="clearfix"></div></div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="clearfix"></div>
            </div>
        </div>
        <div class="clearfix"></div>
        </div>
    </div>

<#--弹出层-->
<!--人员管理-->
<div id="reportShadeOld"  class="animated reportShade ">
    <div class="pull-left re_l">
        <div class="pull-left module  box1 pull-left ">
            <div class="mo_t zi1"></div>
            <h2>当日入住情况</h2>
            <div class="he zi2 blur"></div>
            <div class="mo_b" style="margin-top:-220px;">
                <img src="${domainUrl}/assets/images/report/qun.png" class="pull-left"  />
                <div class="pull-left" style="margin-top:3%;margin-left:7%;">
                    <h4>时间：<span>2016年11月24日</span></h4>
                    <h4>入住人数：<span>38人</span></h4>
                    <h4>退床人数：<span>2人</span></h4>
                </div>
                <div class="clearfix"></div>

            </div>
        </div>
        <div class="pull-left module box1">
            <div class="mo_t zi1"></div>
            <h2>本周入住情况</h2>
            <div class="he zi2 blur"></div>
            <div class="mo_b">
                <div id='canvasDiv2' class="zhexian" ></div>
            </div>
        </div>
        <div class="pull-left module box2">
            <div class="mo_t zi1"></div>
            <h2>历史入住管理表</h2>
            <div class="he zi2 blur"></div>
            <div class="mo_b ma2">
                <!--柱状表-->
                <div class="histogram" >
                    <div id="chart_buttons"></div>
                    <div id="chart" style="width:800;"></div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
    <div class="pull-right re_r">
        <div class="module box3">
            <div class="mo_t zi1"></div>
            <h2>实时入住情况</h2>
            <div class="he zi2 blur"></div>
            <div class="mo_b ma3">
                <div class="alert alert-success" role="alert">姓名：<span>王月</span>性别：<span>男</span>年龄：<span>56</span>入住时间：<span>2016-11-4，17:30，AM</span>备注：<span>健康</span>
                </div>
                <div class="alert alert-success" role="alert">姓名：<span>陈锋</span>性别：<span>男</span>年龄：<span>78</span>入住时间：<span>2016-11-4，17:10，AM</span>备注：<span>健康</span>
                </div>
                <div class="alert alert-info" role="alert">姓名：<span>李武</span>性别：<span>男</span>年龄：<span>67</span>入住时间：<span>2016-11-4，16:30，AM</span>备注：<span>良好</span>
                </div>
                <div class="alert alert-success" role="alert">姓名：<span>白升</span>性别：<span>男</span>年龄：<span>80</span>入住时间：<span>2016-11-4，16:10，AM</span>备注：<span>健康</span>
                </div>
                <div class="alert alert-success" role="alert">姓名：<span>陈齐</span>性别：<span>男</span>年龄：<span>72</span>入住时间：<span>2016-11-4，15:50，AM</span>备注：<span>健康</span>
                </div>
                <div class="alert alert-danger" role="alert">姓名：<span>王二</span>性别：<span>男</span>年龄：<span>88</span>入住时间：<span>2016-11-4，14:10，AM</span>备注：<span>较弱</span>
                </div>
                <div class="alert alert-success" role="alert">姓名：<span>王五</span>性别：<span>男</span>年龄：<span>66</span>入住时间：<span>2016-11-4，12:20，AM</span>备注：<span>健康</span>
                </div>
                <div class="alert alert-success" role="alert">姓名：<span>赵六</span>性别：<span>男</span>年龄：<span>66</span>入住时间：<span>2016-11-4，11:40，AM</span>备注：<span>健康</span>
                </div>
                <div class="alert alert-warning" role="alert">姓名：<span>李四</span>性别：<span>男</span>年龄：<span>75</span>入住时间：<span>2016-11-4，11:20，AM</span>备注：<span>一般</span>
                </div>
                <div class="alert alert-success" role="alert">姓名：<span>张三</span>性别：<span>女</span>年龄：<span>65</span>入住时间：<span>2016-11-4，10:50，AM</span>备注：<span>健康</span>
                </div>
                <div class="alert alert-success" role="alert">姓名：<span>陈胜</span>性别：<span>男</span>年龄：<span>61</span>入住时间：<span>2016-11-4，8:10，AM</span>备注：<span>健康</span>
                </div>
            </div>
        </div>

    </div>
    <div class="clearfix"></div>
    <i class="glyphicon glyphicon-remove closeMain" id="closeOld" style="position: absolute; top: 10; right: 10; font-size: 35px; cursor: pointer;"></i>
</div>

<!--服务收益-->
<div id="reportShadeCost" class="animated reportShade" >
    <h1>收支信息报表</h1>
    <div class="module box1">
        <div class="mo_t zi1"></div>
        <h2>月度收支报表</h2>
        <div class="he zi2 blur"></div>
        <div class="mo_b ma1">
            <div id='canvasDiv5' ></div>
        </div>
    </div>
    <div class="module box1">
        <div class="mo_t zi1"></div>
        <h2>季度收支报表</h2>
        <div class="he zi2 blur"></div>
        <div class="mo_b ma2">
            <div id='canvasDiv6' class="pull-left zhexian" ></div>
            <ul class="pull-left">
                <li><span class="yanse1"></span>总收入</li>
                <li><span class="yanse2"></span>总支出</li>
                <li><span class="yanse3"></span>人员报销</li>
            </ul>
            <div class="clearfix"></div>
        </div>
    </div>
    <div class="module box2">
        <div class="mo_t zi1"></div>
        <h2>年度收支报表</h2>
        <div class="he zi2 blur"></div>
        <div class="mo_b ma2">
            <div id='canvasDiv7' class="" ></div>
        </div>
    </div>
    <div class="clearfix"></div>
    <i class="glyphicon glyphicon-remove closeMain" id="closeCost" style="position: absolute; top: 10; right: 10; font-size: 35px; cursor: pointer;"></i>
</div>


<!--库存容量-->
<div id="reportShadeStock" class="animated reportShade " >
    <h1>库存容量信息表</h1>
    <div class="pull-left"  >
        <div id='canvasDiv3' class=" ma" ></div>
    </div>
    <div class="pull-left">
        <div id='canvasDiv4' class=" ma" ></div>
    </div>
    <div class="clearfix"></div>
    <i class="glyphicon glyphicon-remove closeMain" id="closeStock" style="position: absolute; top: 10; right: 10; font-size: 35px; cursor: pointer;"></i>
</div>


<script src="${domainUrl}/assets/js/jQuery-2.1.4/jquery-2.1.4.min.js"></script>
<script src="${domainUrl}/assets/js/bootstrap/bootstrap.min.js"></script>
<script src="${domainUrl}/assets/js/common.js"></script>
<script src="${domainUrl}/assets/js/sideUrl.js"></script>
<script src="${domainUrl}/assets/js/OutJs/page/page.js"></script>
<script src="${domainUrl}/assets/js/OutJs/upload/diyUpload.js"></script>
<script src="${domainUrl}/assets/js/OutJs/upload/webuploader.html5only.min.js"></script>
<script src="${domainUrl}/assets/js/OutJs/date/jquery.date_input.pack.js"></script>
<script src="${domainUrl}/assets/js/OutJs/date/Week.js"></script>
<!--曲线表-->
<script src="${domainUrl}/assets/js/OutJs/linear/Chart.min.js"></script>
<script src="${domainUrl}/assets/js/OutJs/linear/prefixfree.min.js"></script>
<script src="${domainUrl}/assets/js/OutJs/linear/linear.js"></script>
<!--d3插件-->
<script src="${domainUrl}/assets/js/OutJs/histogram/d3.min.js"></script>
<script src="${domainUrl}/assets/js/OutJs/histogram/histogram.js"></script>
<script src="${domainUrl}/assets/js/OutJs/histogram/bing.js"></script>
<!--报表专用插件-->
<script src="${domainUrl}/assets/js/OutJs/ichart/ichart.1.2.min.js"></script>
<!--首页报表柱状图-->
<script src="${domainUrl}/assets/js/OutJs/ichart/zhu1.js"></script>
<!--弹出层折线表-->
<script src="${domainUrl}/assets/js/OutJs/ichart/zhexian1.js"></script>
<!--弹出层收益图表-->
<script src="${domainUrl}/assets/js/OutJs/ichart/costChart.js"></script>
<!--弹出层库存图表-->
<script src="${domainUrl}/assets/js/OutJs/ichart/stockChart.js"></script>



<script>
    $(function () {
        startSideUrl('/backstage/chart/chartShow')
        $("#left-canvas").click(function () {
            $("#main-body").removeClass("fadeOutLeft").addClass("fadeInLeft");
            $("#backSpially").show();
            $(".chart-left").removeClass("fadeInRight").addClass("fadeOutRight").hide(500);
            $("#left-canvas").hide();
        });
        /*弹出层*/
        $(".moduleaaLeft").click(function () {
            $("#reportShadeOld").removeClass("fadeOut").addClass("fadeIn").show();

        })
        $("#closeOld").click(function () {
            $("#reportShadeOld").removeClass("fadeIn").addClass("fadeOut").hide();
        })
        $(".moduleaaRight").click(function () {
            $("#reportShadeStock").removeClass("fadeOut").addClass("fadeIn").show();
        })
        $("#closeStock").click(function () {
            $("#reportShadeStock").removeClass("fadeIn").addClass("fadeOut").hide();
        })
        $(".moduleaaDown").click(function () {
            $("#reportShadeCost").removeClass("fadeOut").addClass("fadeIn").show();

        })
        $("#closeCost").click(function () {
            $("#reportShadeCost").removeClass("fadeIn").addClass("fadeOut").hide();
        })
        //隐藏底层
        $(".moduleaa").click(function () {
            $("#shujuback").hide();
        })
        $(".closeMain").click(function () {
            $("#shujuback").show();

        })
    })

</script>
</body>
</html>