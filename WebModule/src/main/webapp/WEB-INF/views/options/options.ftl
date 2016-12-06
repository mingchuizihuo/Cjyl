


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

})</script>


<div class="oldman_tab">
    <h2>老人档案</h2>
    <!-- 选项卡标题 -->
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#oldman" role="tab" data-toggle="tab">老人信息</a></li>
        <li role="presentation"><a href="#relatives" role="tab" data-toggle="tab">亲属信息</a></li>
        <li role="presentation"><a href="#stayin" role="tab" data-toggle="tab">入住初始费</a></li>
        <li role="presentation"><a href="#paycost" role="tab" data-toggle="tab">缴费情况</a></li>
        <li role="presentation"><a href="#nursing" role="tab" data-toggle="tab">护理记录</a></li>
        <div class="clearfix"></div>
    </ul>
    <!-- 选项卡内容 -->
    <div class="tab-content">
        <#--老人信息-->
        <div role="tabpanel" class="tab-pane active oldman" id="oldman">
        <ul>
            <li><span>姓名</span><input type="text"></li>
            <li><span>性别</span>
                <select class="form-control select">
                    <option>男</option>
                    <option>女</option>
                </select>
            </li>
            <li><span>入住时间</span><input type="text"></li>
            <li><span>身份证号</span><input type="text" class="idcar"></li>
            <li><span>出生日期</span><input type="text"></li>
            <li><span>手机</span><input type="text"></li>
            <li><span>护理级别</span><select class="form-control select">
                <option>特级</option>
                <option>一级</option>
                <option>二级</option>
            </select></li>
            <li><span>户籍</span><input type="text"></li>
            <li><span>信仰</span>
                <select class="form-control select">
                    <option>无</option>
                    <option>基督教</option>
                    <option>佛教</option>
                    <option>天主教</option>
                    <option>道教</option>
                    <option>伊斯兰教</option>
                </select>
            </li>
            <li><span>民族</span><input type="text"></li>
            <li><span>政治面貌</span>
                <select class="form-control select">
                    <option>群众</option>
                    <option>团员</option>
                    <option>党员</option>
                </select>
            </li>
            <li><span>本人成分</span><input type="text"></li>
            <li><span>自理情况</span>
                <select class="form-control select">
                    <option>自理</option>
                    <option>半自理</option>
                    <option>瘫痪</option>
                </select>
            </li>
            <li><span>神志</span>
                <select class="form-control select">
                    <option>清醒</option>
                    <option>昏迷</option>
                    <option>半清醒</option>
                </select>
            </li>
            <li><span>脉搏</span><input type="text"></li>
            <li><span>血压</span><input type="text"></li>
            <li><span>过敏药物</span><input type="text"></li>
            <li><span>主治医院</span><input type="text"></li>
            <li><span>主治医生</span><input type="text"></li>
            <li><span>主要疾病</span><input type="text"></li>
            <li><span>疾病史</span><input type="text"></li>
            <li><span>医院电话</span><input type="text"></li>
            <li><span>饮食特点</span><input type="text"></li>
            <li><span>性格</span><input type="text"></li>
            <li><span>爱好</span><input type="text"></li>
            <li><span>特殊要求</span><input type="text"></li>
            <li><span>异常表现</span><input type="text"></li>
            <li><span>老人状态</span>
                <select class="form-control select">
                    <option>良好</option>
                    <option>一般</option>
                    <option>较差</option>
                </select>
            </li>
            <li><span>出院时间</span><input type="text"></li>
            <div class="clearfix"></div>
            <li><span>大厦</span><input type="text"></li>
            <li><span>房间</span><input type="text"></li>
            <li><span>床位</span><input type="text"></li>
            <div class="clearfix"></div>
        </ul>
        </div>
        <#--亲属信息-->
        <div role="tabpanel" class="tab-pane relatives" id="relatives">
            <div class="box">
                <ul>
                    <li><span>姓名</span><input type="text"></li>
                    <li><span>联系电话</span><input type="text"></li>
                    <li><span>关系</span>
                        <select class="form-control select">
                            <option>儿子</option>
                            <option>女儿</option>
                            <option>亲戚</option>
                        </select>
                    </li>
                    <li><span>身份证号</span><input type="text"></li>
                    <li><span>工作单位</span><input type="text" ></li>
                    <li><span>住址</span><input type="text"></li>
                    <div class="clearfix"></div>
                </ul>
            </div>
        </div>

        <#--入住初始费-->
        <div role="tabpanel" class="tab-pane stayin" id="stayin">
            <div class="box">
                <ul>
                    <li><span>项目</span><input type="text"></li>
                    <li><span>金额</span><input type="text"></li>
                    <li><span>出院退款</span>
                        <select class="form-control select">
                            <option>是</option>
                            <option>否</option>
                            <option>无</option>
                        </select>
                    </li>
                    <li><span>有效</span>
                        <select class="form-control select">
                            <option>是</option>
                            <option>否</option>
                        </select></li>

                    <div class="clearfix"></div>
                </ul>
           </div>
        </div>

        <#--缴费情况-->
        <div role="tabpanel" class="tab-pane paycost" id="paycost">
            <div class="box">
                <ul>
                    <li><span>日期</span><input type="text"></li>
                    <li><span>状态</span><input type="text"></li>
                    <li><span>类型</span>
                        <select class="form-control select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </li>
                    <li><span>金额</span><input type="text"></li>
                    <li><span>说明</span><input type="text"></li>
                    <div class="clearfix"></div>
                </ul>
            </div>
        </div>

         <#--护理记录-->
        <div role="tabpanel" class="tab-pane nursing" id="nursing">
            <div class="box">
                <ul>
                    <li><span>编码</span><input type="text"></li>
                    <li><span>日期</span><input type="text"></li>
                    <li><span>健康状况</span>
                        <select class="form-control select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </li>
                    <li><span>护理及用药情况</span><input type="text"></li>
                    <div class="clearfix"></div>
                </ul>
            </div>
        </div>
    </div>

    <div class="bottom">
        <button>保存修改</button>
        <button>添加床位</button>
        <button class="btn btn-default" data-dismiss="modal" data-dismiss="modal" >取消</button>
    </div>

</div>