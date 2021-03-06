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
        <li role="presentation"  class="active foucsTishi"><a href="#oldman" role="tab" data-toggle="tab" onclick="updateFun(1)">老人信息</a></li>
        <li role="presentation"  class="hideLi foucsTishi"  ><a href="#relatives" role="tab" data-toggle="tab" onclick="updateFun(2)">亲属信息</a></li>
        <li role="presentation" class="hideLi foucsTishi" ><a href="#stayin" role="tab" data-toggle="tab" onclick="updateFun(3)">入住初始费</a></li>
        <li role="presentation" class="hideLi foucsTishi"><a href="#paycost" role="tab" data-toggle="tab" onclick="updateFun(4)">特殊服务</a></li>
        <li role="presentation" class="hideLi foucsTishi"><a href="#nursing" role="tab" data-toggle="tab" onclick="updateFun(5)">护理记录</a></li>
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
                <li style="display: none"><input type="text" id="bedId"></li>
                <li><span>姓名</span><input type="text" id="name" lass="foucsClick"></li>
                <li><span>性别</span>
                    <select class="form-control select" id="sex">
                    </select>
                </li>
                <li><span>入住时间</span><input type="text"  id="sdate" class="date_picker checkInDate"></li>
                <li><span>身份证号</span><input type="text" id="cardId"></li>
                <li><span>出生日期</span><input type="text" id="sdate" class="date_picker birthday"></li>
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
                <li><span>出院时间</span><input type="text" id="sdate" class="date_picker olderLeaveDate"></li>
                <div class="clearfix"></div>
                <li><span>大厦</span><input type="text" id="floor"></li>
                <li><span>房间</span><input type="text" id="room"></li>
                <li><span>床位</span><input type="text" id="bed"></li>
                <li style="display: none;"><input type="text" id="id"></li>
                <div class="clearfix"></div>
            </ul>
        </div>
    <#--亲属信息-->
        <div role="tabpanel" class="tab-pane relatives " id="relatives">
            <div class="box box1">
                <table class="table table-bordered">
                    <thead class="ceshi1">
                    <tr>
                        <th class="aa">姓名</th>
                        <th class="aa">联系电话</th>
                        <th class="aa">关系</th>
                        <th class="aa">身份证号</th>
                        <th class="aa">工作单位</th>
                        <th class="aa">住址</th>
                    </tr>
                    </thead>
                    <tbody class="ceshi2 ceshi3" id="">
                    <tr>
                        <td><input type="text" id="Sname"  class="foucsClick"></td>
                        <td><input type="text" id="Sson"></td>
                        <td><input type="text"  id="Stel"></td>
                        <td><input  type="text" id="ScardId"></td>
                        <td><input  type="text"  id="Sjobname"></td>
                        <td><input  type="text" id="ShomeAddress"></td>
                    </tr>
                    </tbody>
                </table>
            <#--<ul>-->
            <#--<li><span>姓名</span><input type="text" id="Sname"></li>-->
            <#--<li><span>联系电话</span><input type="text" id="Stel"></li>-->
            <#--<li><span>关系</span>-->
            <#--<select class="form-control select">-->
            <#--<option>儿子</option>-->
            <#--<option>女儿</option>-->
            <#--<option>亲戚</option>-->
            <#--</select>-->
            <#--</li>-->
            <#--<li><span>身份证号</span><input  id="ScardId" type="text"></li>-->
            <#--<li><span>工作单位</span><input  id="SjobName" type="text" ></li>-->
            <#--<li><span>住址</span><input id="ShomeAddress" type="text"></li>-->
            <#--<div class="clearfix"></div>-->
            <#--</ul>-->

            </div>
        </div>

    <#--入住初始费-->
        <div role="tabpanel" class="tab-pane stayin" id="stayin">
            <div class="box box1">
                <table class="table table-bordered">
                    <thead class="ceshi1">
                    <tr>
                        <th class="aa">项目</th>
                        <th class="aa">费用</th>
                        <th class="aa">入住时间</th>
                        <th class="aa">结算时间</th>
                    </tr>
                    </thead>
                    <tbody class="ceshi2 ceshi3" id="">
                    <tr>
                        <td><input type="text" id="checkInInitCostId"  class="foucsClick"></td>
                        <td><input type="text" id="checkInInitCostState"></td>
                        <td><input type="text" class=" initialFeeDate"></td>
                        <td><input type="text" class="closeAnAccount"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    <#--缴费情况（月费用）-->
        <div role="tabpanel" class="tab-pane paycost" id="paycost">
            <table class="table table-bordered">
                <thead class="ceshi1">
                <tr>
                    <th class="aa">服务项目</th>
                    <th class="aa">服务说明</th>
                    <th class="aa">产生时间</th>
                </tr>
                </thead>
                <tbody class="ceshi2 ceshi3 id="">
                <tr>
                    <td><input type="text" id="serviceCharge"  class="foucsClick"></td>
                    <td><input type="text" id="serviceChargeContext"></td>
                    <td><input type="text" id="serviceChargeState"></td>

                </tr>

                </tbody>
            </table>
        </div>
    <#--护理记录（服务费用表）-->
        <div role="tabpanel" class="tab-pane nursing" id="nursing">
            <table class="table table-bordered">
                <thead class="ceshi1">
                <tr>
                    <th class="aa">老人健康状况</th>
                    <th class="aa">护理用药情况</th>
                    <th class="aa">护理时间</th>
                    <th class="aa">护理人员</th>
                </tr>
                </thead>
                <tbody class="ceshi2 ceshi3" id="">
                <tr>
                    <td><input type="text" id="physicalCondition"  class="foucsClick"></td>
                    <td><input type="text" id="nurseInfo"></td>
                    <td><input type="text" id="sdate" class="date_picker nurseDate"></td>
                    <td><input type="text" id="staffId"></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="bottom">
        <button onclick="add()" id="addIs">确认添加</button>
        <span id="updateHtml"><button onclick="update1()" id="updateIs">保存修改</button></span>
        <button class="modalClose" >关闭窗口</button>
    </div>
</div>
<script src="${domainUrl}/assets/js/TotalModule/filter.js"></script>
<script>
    var foucsNum=0;
    $(function () {
        $(".foucsClick").click(function () {
            foucsNum = 1;
        });
        $(".foucsTishi").mouseover(function () {
            if(foucsNum == 1){
                alert("本页已修改，请先保存在进行操作");
                foucsNum = 0;
            }
        })
    });
    function updateFun(num) {
                var updateIs = 'update'+num;
                var html ='<button onclick="update'+num+'()" id="updateIs">保存修改</button>';
                $("#updateHtml").html(html)
    }
    function add() {
        var urlAdd = domainUrl + "/serve/older/add";
        var postData = {
            organizationLoginId:1,
            name:$("#name").val(),
            sex:$("#sex").val(),
            checkInDate:$(".checkInDate").val(),
            cardId:$("#cardId").val(),
            birthday:$(".birthday").val(),
            tel:$("#tel").val(),
            monthChargeId:1,
            censusRegister:$("#censusRegister").val(),
            belief:1,
            nation:$("#nation").val(),
            politicsStatus:1,
            selfIngredient:$("#selfIngredient").val(),
            takeCareOfOneself:1,
            mind:1,
            pluse:$("#pluse").val(),
            bloodPressure:$("#bloodPressure").val(),
            allergicDrug:$("#allergicDrug").val(),
            indicationHospital:$("#indicationHospital").val(),
            indicationDoctor:$("#indicationDoctor").val(),
            principalDisease:$("#principalDisease").val(),
            diseasesHistory:$("#diseasesHistory").val(),
            hospitalTel:$("#hospitalTel").val(),
            dietCharacteristics:$("#dietCharacteristics").val(),
            disposition:$("#disposition").val(),
            hobby:$("#hobby").val(),
            specialRequirements:$("#specialRequirements").val(),
            abnormalPatterns:$("#abnormalPatterns").val(),
            olderState:1,
            olderLeaveDate:$(".olderLeaveDate").val(),
            staffId:1,
            bedId:$("#bedId").val()
        };
        postAjax(urlAdd, false, postData, function (data) {
            alert("添加成功");
            $(".publicModal").hide();
            console.log(floorTableNUm1,floorTableNUm2,floorTableName,floorTableFloor)
            table(floorTableNUm1,floorTableNUm2,floorTableName,floorTableFloor)
        })
    }
</script>