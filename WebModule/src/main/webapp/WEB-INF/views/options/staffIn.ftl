

<link href="${domainUrl}/assets/css/public.css" rel="stylesheet">
<link href="${domainUrl}/assets/css/options/options.css" rel="stylesheet">
<link href="${domainUrl}/assets/css/options/staffIn.css" rel="stylesheet">


<div class="oldman_tab">
    <h2>员工档案</h2>
    <!-- 选项卡标题 -->
    <ul class="nav nav-tabs" role="tablist">
        <div class="clearfix"></div>
    </ul>
    <!-- 选项卡内容 -->
    <div class="tab-content">
    <#--员工信息-->
        <div role="tabpanel" class="tab-pane active oldman" id="oldman">
            <ul>
                <li><span>姓名</span><input type="text" id="name"></li>
                <li><span>性别</span>
                    <select class="form-control select">
                        <option>男</option>
                        <option>女</option>
                    </select>
                </li>
                <li><span>婚姻状态</span>
                    <select class="form-control select">
                        <option>已婚</option>
                        <option>未婚</option>
                        <option>离异</option>
                    </select>
                </li>
                <script type="text/javascript">
                    $(function () {
                        $('.date_picker').date_input();
                    })
                </script>
                <li><span>出生年月</span><input type="text" id=" sdate"  class="date_picker birthday" ></li>
                <li><span>身份证号</span><input type="text" class="idcar" id="cardId"></li>
                <li><span>入职日期</span><input type="text" id=" sdate"  class="date_picker entryDate" ></li>
                <li><span>手机号</span><input type="text" id="tel"></li>
                <li><span>健康状态</span><input type="text" id="healthState"></li>
                <li><span>部门</span>
                    <select class="form-control select">
                        <option>护理部</option>
                        <option>行政部</option>
                        <option>财务部</option>
                    </select>
                </li>
                <li><span>职务</span>
                    <select class="form-control select">
                        <option>经理</option>
                        <option>主任</option>
                        <option>职员</option>
                    </select>
                </li>
                <li><span>专业</span><input type="text" id="education"></li>
                <li><span>学历</span><input type="text" id="major"></li>
                <li><span>工资</span><input type="text" id="salary"></li>
                <li style="display: none;"><input type="text" id="id"></li>
                <div class="clearfix"></div>
            </ul>
        </div>

    <div class="bottom">
        <button onclick="add()" id="addIs">确认添加</button>
        <button onclick="update()" id="updateIs">保存修改</button>
        <button class="modalClose">取消</button>
    </div>

</div>