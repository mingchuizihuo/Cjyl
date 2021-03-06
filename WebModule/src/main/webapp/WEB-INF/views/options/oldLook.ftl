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
        <li role="presentation"  class="active"><a href="#oldman" role="tab" data-toggle="tab">老人信息</a></li>
        <li role="presentation"  class="hideLi" ><a href="#relatives" role="tab" data-toggle="tab">亲属信息</a></li>
        <li role="presentation"class="hideLi" ><a href="#stayin" role="tab" data-toggle="tab">入住初始费</a></li>
        <li role="presentation"class="hideLi"><a href="#paycost" role="tab" data-toggle="tab">缴费情况</a></li>
        <li role="presentation"class="hideLi"><a href="#nursing" role="tab" data-toggle="tab">护理记录</a></li>
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
        <style>
            #oldman input,#oldman select{
                background-color: #E7E7E7;
            }
        </style>
        <div role="tabpanel" class="tab-pane active oldman" id="oldman">
            <ul>
                <li style="display: none"><input type="text" id="bedId" readOnly="true" ></li>
                <li><span>姓名</span><input type="text" id="name" readOnly="true"  class="foucsClick"></li>
                <li><span>性别</span>
                    <select class="form-control select" id="sex" disabled="disabled" >
                    </select>
                </li>
                <li><span>入住时间</span><input type="text"  id="sdate" readOnly="true"  class="date_picker checkInDate"></li>
                <li><span>身份证号</span><input type="text" id="cardId" readOnly="true" ></li>
                <li><span>出生日期</span><input type="text" id="sdate" readOnly="true"  class="date_picker birthday"></li>
                <li><span>手机</span><input type="text" id="tel"></li>
                <li><span>护理级别</span><select class="form-control select" disabled="disabled"   id="nurse">

                </select></li>
                <li><span>户籍</span><input type="text" id="censusRegister" readOnly="true" ></li>
                <li><span>信仰</span>
                    <select class="form-control select" id="faith" disabled="disabled" >

                    </select>
                </li>
                <li><span>民族</span><input type="text" id="nation"readOnly="true" ></li>
                <li><span>政治面貌</span>
                    <select class="form-control select" disabled="disabled" >
                        <option>群众</option>
                        <option>团员</option>
                        <option>党员</option>
                    </select>
                </li>
                <li><span>本人成分</span><input type="text" id="selfIngredient"readOnly="true" ></li>
                <li><span>自理情况</span>
                    <select class="form-control select" id="takeCare "disabled="disabled" >

                    </select>
                </li>
                <li><span>神志</span>
                    <select class="form-control select" id="mental" disabled="disabled" >
                        <option>清醒</option>
                        <option>昏迷</option>
                        <option>半清醒</option>
                    </select>
                </li>
                <li><span>脉搏</span><input type="text" id="pluse"readOnly="true" ></li>
                <li><span>血压</span><input type="text" id="bloodPressure"readOnly="true" ></li>
                <li><span>过敏药物</span><input type="text" id="allergicDrug"readOnly="true" ></li>
                <li><span>主治医院</span><input type="text" id="indicationHospital"readOnly="true" ></li>
                <li><span>主治医生</span><input type="text" id="indicationDoctor" readOnly="true" ></li>
                <li><span>主要疾病</span><input type="text" id="principalDisease"readOnly="true" ></li>
                <li><span>疾病史</span><input type="text" id="diseasesHistory"readOnly="true" ></li>
                <li><span>医院电话</span><input type="text" id="hospitalTel"readOnly="true" ></li>
                <li><span>饮食特点</span><input type="text" id="dietCharacteristics"readOnly="true" ></li>
                <li><span>性格</span><input type="text" id="disposition"readOnly="true" ></li>
                <li><span>爱好</span><input type="text" id="hobby"readOnly="true" ></li>
                <li><span>特殊要求</span><input type="text" id="specialRequirements"readOnly="true" ></li>
                <li><span>异常表现</span><input type="text" id="abnormalPatterns"readOnly="true" ></li>
                <li><span>老人状态</span>
                    <select class="form-control select" disabled="disabled" >
                        <option>良好</option>
                        <option>一般</option>
                        <option>较差</option>
                    </select>
                </li>
                <li><span>出院时间</span><input type="text" id="sdate" class="date_picker olderLeaveDate"readOnly="true" ></li>
                <div class="clearfix"></div>
                <li style="display: none;"><input type="text" id="id"></li>
                <div class="clearfix"></div>
            </ul>
        </div>


    <#--亲属信息-->
        <div role="tabpanel" class="tab-pane relatives" id="relatives">
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
                    <tbody class="ceshi2" id="sonFind">
                    <tr>
                        <td><i id=""></i></td>
                        <td><i id=""></i></td>
                        <td><i id=""></i></td>
                        <td><i id=""></i></td>
                        <td><i id=""></i></td>
                        <td><i id=""></i></td>
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
                    </tr>
                    </thead>
                    <tbody class="ceshi2" id="checkInCostTable">
                    <tr>
                        <td><i id=""></i></td>
                        <td><i id=""></i></td>
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
                <tbody class="ceshi2" id="findAllServe">
                <tr>
                    <td><i id=""></i></td>
                    <td><i id=""></i></td>
                    <td><i id=""></i></td>
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
                <tbody class="ceshi2" id="findNurse">
                <tr>
                    <td><i id=""></i></td>
                    <td><i id=""></i></td>
                    <td><i id=""></i></td>
                    <td><i id=""></i></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="bottom">
        <button class="modalClose" >取消</button>
    </div>
</div>
<script src="${domainUrl}/assets/js/TotalModule/filter.js"></script>