<link href="${domainUrl}/assets/css/public.css" rel="stylesheet">
<link href="${domainUrl}/assets/css/options/options.css" rel="stylesheet">

<script>
    //    选项卡
    $('#myTab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
        $('#myTab a[href="#profile"]').tab('show') // Select tab by name
        $('#myTab a:first').tab('show') // Select first tab
        $('#myTab a:last').tab('show') // Select last tab
        $('#myTab li:eq(2) a').tab('show') // Select third tab (0-indexed)
    })
</script>
<div class="oldman_tab">
    <h2>老人档案</h2>
    <!-- 选项卡标题 -->
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" style="width:33%" class="active"><a href="#oldman" role="tab" data-toggle="tab">老人信息</a></li>
        <li role="presentation" style="width:33%" ><a href="#relatives" role="tab" data-toggle="tab">亲属信息</a></li>
        <li role="presentation" style="width:33%" ><a href="#stayin" role="tab" data-toggle="tab">入住初始费</a></li>
        <#--<li role="presentation"><a href="#paycost" role="tab" data-toggle="tab">缴费情况</a></li>-->
        <#--<li role="presentation"><a href="#nursing" role="tab" data-toggle="tab">护理记录</a></li>-->
        <div class="clearfix"></div>
    </ul>
    <script type="text/javascript">
        $(function () {
            $('.date_picker').date_input();
        })
    </script>
    <!-- 选项卡内容 -->
    <div class="tab-content">
    <#--老人信息-->
        <div role="tabpanel" class="tab-pane active oldman" id="oldman">
            <ul>
                <li><span>姓名</span><input type="text" id="name"></li>
                <li><span>性别</span>
                    <select class="form-control select" id="sex">

                    </select>
                </li>
                <li><span>入住时间</span><input type="text" id="sdate" class="date_picker checkInDate"></li>
                <li><span>身份证号</span><input type="text" id="cardId"></li>
                <li><span>出生日期</span><input type="text" id="birthday"></li>
                <li><span>手机</span><input type="text" id="tel"></li>
                <li><span>护理级别</span><select class="form-control select" id="nurse">

                </select></li>
                <li><span>户籍</span><input type="text" id="censusRegister"></li>
                <li><span>信仰</span>
                    <select class="form-control select" id="faith">

                    </select>
                </li>
                <li><span>民族</span><input type="text" id="nation"></li>
                <li><span>政治面貌</span>
                    <select class="form-control select">
                        <option>群众</option>
                        <option>团员</option>
                        <option>党员</option>
                    </select>
                </li>
                <li><span>本人成分</span><input type="text" id="selfIngredient"></li>
                <li><span>自理情况</span>
                    <select class="form-control select" id="takeCare">

                    </select>
                </li>
                <li><span>神志</span>
                    <select class="form-control select" id="mental">
                        <option>清醒</option>
                        <option>昏迷</option>
                        <option>半清醒</option>
                    </select>
                </li>
                <li><span>脉搏</span><input type="text" id="pluse"></li>
                <li><span>血压</span><input type="text" id="bloodPressure"></li>
                <li><span>过敏药物</span><input type="text" id="allergicDrug"></li>
                <li><span>主治医院</span><input type="text" id="indicationHospital"></li>
                <li><span>主治医生</span><input type="text" id="indicationDoctor" ></li>
                <li><span>主要疾病</span><input type="text" id="principalDisease"></li>
                <li><span>疾病史</span><input type="text" id="diseasesHistory"></li>
                <li><span>医院电话</span><input type="text" id="hospitalTel"></li>
                <li><span>饮食特点</span><input type="text" id="dietCharacteristics"></li>
                <li><span>性格</span><input type="text" id="disposition"></li>
                <li><span>爱好</span><input type="text" id="hobby"></li>
                <li><span>特殊要求</span><input type="text" id="specialRequirements"></li>
                <li><span>异常表现</span><input type="text" id="abnormalPatterns"></li>
                <li><span>老人状态</span>
                    <select class="form-control select" id="">
                        <option>良好</option>
                        <option>一般</option>
                        <option>较差</option>
                    </select>
                </li>
                <li><span>出院时间</span><input type="text" id="olderLeaveDate"></li>
                <div class="clearfix"></div>
                <li><span>大厦</span><input type="text" id="floor"></li>
                <li><span>房间</span><input type="text" id="room"></li>
                <li><span>床位</span><input type="text" id="bed"></li>
                <li style="display: none;"><input type="text" id="id"></li>
                <div class="clearfix"></div>
            </ul>
        </div>
    <#--亲属信息-->
        <div role="tabpanel" class="tab-pane relatives" id="relatives">
            <div class="box">
                <ul>
                    <li><span>姓名</span><input type="text" id="Sname"></li>
                    <li><span>联系电话</span><input type="text" id="Stel"></li>
                    <li><span>关系</span>
                        <select class="form-control select">
                            <option>儿子</option>
                            <option>女儿</option>
                            <option>亲戚</option>
                        </select>
                    </li>
                    <li><span>身份证号</span><input  id="ScardId" type="text"></li>
                    <li><span>工作单位</span><input  id="SjobName" type="text" ></li>
                    <li><span>住址</span><input id="ShomeAddress" type="text"></li>
                    <div class="clearfix"></div>
                </ul>
            </div>
        </div>

    <#--入住初始费-->
        <div role="tabpanel" class="tab-pane stayin" id="stayin">
            <div class="box">
                <ul>
                    <li><span>项目</span><select class="form-control select" id="CheckItem">
                        <option>儿子</option>
                        <option>女儿</option>
                        <option>亲戚</option>
                    </select></li>
                    <li><span>费用</span><input type="text" id="checkCost" ></li>
                    <div class="clearfix"></div>
                </ul>
            </div>
        </div>

    <#--缴费情况（月费用）-->
        <#--<div role="tabpanel" class="tab-pane paycost" id="paycost">-->
            <#--<div class="box">-->
                <#--<ul>-->
                    <#--<li><span>护理级别</span><div class="aa"></div></li>-->
                    <#--<li><span>管理费</span><div class="aa"></div></li>-->
                    <#--<li><span>服务费用</span><div class="aa"></div></li>-->
                    <#--<li><span>床位费用</span><div class="aa"></div></li>-->
                    <#--<li><span>伙食费用</span><div class="aa"></div></li>-->
                    <#--<li><span>总计</span><div class="aa"></div></li>-->
                    <#--<div class="clearfix"></div>-->
                <#--</ul>-->
            <#--</div>-->

        <#--</div>-->
    <#--护理记录（服务费用表）-->
        <#--<div role="tabpanel" class="tab-pane nursing" id="nursing">-->
            <#--<div class="box">-->
                <#--<ul>-->
                    <#--<li><span>服务项目</span><div class="aa"></div></li>-->
                    <#--<li><span>价格</span><div class="aa"></div></li>-->
                    <#--<li><span>健康状况</span><div class="aa"></div></li>-->
                    <#--<li><span>护理及用药情况</span><div class="aa"></div></li>-->
                    <#--<div class="clearfix"></div>-->
                <#--</ul>-->
            <#--</div>-->
        <#--</div>-->
    </div>
    <div class="bottom">
        <button onclick="add()" id="addIs">确认添加</button>
        <button onclick="update()" id="updateIs">保存修改</button>
        <button class="modalClose" >取消</button>
    </div>
</div>
<script src="${domainUrl}/assets/js/TotalModule/filter.js"></script>
<script src="${domainUrl}/assets/js/TotalModule/oldman/oldman.js"></script>
<script src="${domainUrl}/assets/js/TotalModule/oldman/oldSon.js"></script>
<script src="${domainUrl}/assets/js/TotalModule/oldman/stayIn.js"></script>

