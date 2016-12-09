<link href="${domainUrl}/assets/css/public.css" rel="stylesheet">
<link href="${domainUrl}/assets/css/order/costCount.css" rel="stylesheet">


<!--页面背景-->

<!---页面主体-->
<div class="overall" style="background-image: url(${domainUrl}/assets/images/backstage/bgg.jpg);">
<#--路径导航-->
    <div class="path">
        <ul>
            <li>您当前所在位置：</li>
            <li><a href="##">首页</a></li>
            <li><img src="${domainUrl}/assets/images/backstage/jiantou.png"></li>
            <li><a href="##">订单管理</a></li>
            <li><img src="${domainUrl}/assets/images/backstage/jiantou.png"></li>
            <li class="txt_color">费用结算</li>
            <div class="clearfix"></div>
        </ul>
    </div>
<#--查询导航-->
    <div class="query">
        <ul>
            <li>查询条件</li>
            <li>姓名<input type="text"></li>
            <script type="text/javascript">
                $(function () {
                    $('.date_picker').date_input();
                })
            </script>
            <li>入住时间<input type="text" id="sdate" class="date_picker" style="text-align: center"></li>
            <li>手机号<input type="text"></li>
            <li>身份证号<input type="text"></li>
            <button class="pull-right btn-style"><i class="glyphicon glyphicon-search"></i>查询</button>
            <div class="clearfix"></div>
        </ul>
    </div>
<#--费用结算老人信息列表-->
    <div class="information">
        <div class="bs-example">
            <table class="table table-striped table-bordered" id="oldTable">
                <thead>
                <tr>
                    <#--<th><input type="checkbox" style="background:#f00;color:#0f0;border:#0ff;" id="All"></th>-->
                    <th></th>
                    <th>ID</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>入住时间</th>
                    <th>护理人员</th>
                    <th>大厦</th>
                    <th>房间</th>
                    <th>床位</th>
                    <th>月费用</th>
                    <th>民族</th>
                    <th>出生日期</th>
                    <th>自理情况</th>
                    <th>护理级别</th>
                    <th>身份证号</th>
                    <th>状态</th>
                    <th>出院日期</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody id="tbodyDelId">
                <tr>
                    <td><input type="checkbox" name="del" value="del1"></td>
                    <td>15623</td>
                    <td>张三</td>
                    <td>男</td>
                    <td>2016年11月1日</td>
                    <td>李四</td>
                    <td>1号楼</td>
                    <td>302</td>
                    <td>2</td>
                    <td>1000</td>
                    <td>汉</td>
                    <td>1932年4月5日</td>
                    <td>瘫痪</td>
                    <td>二级</td>
                    <td>370605198236425648</td>
                    <td>良好</td>
                    <td>2016年12月1日</td>
                    <td><input type="button" class="button"  onclick="tableUrl()" value="修改"></td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="del"value="del1"></td>
                    <td>15623</td>
                    <td>张三</td>
                    <td>男</td>
                    <td>2016年11月1日</td>
                    <td>李四</td>
                    <td>1号楼</td>
                    <td>302</td>
                    <td>2</td>
                    <td>1000</td>
                    <td>汉</td>
                    <td>1932年4月5日</td>
                    <td>瘫痪</td>
                    <td>二级</td>
                    <td>370605198236425648</td>
                    <td>良好</td>
                    <td>2016年12月1日</td>
                    <td><input type="button" class="button"  onclick="tableUrl()" value="修改"></td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="del"value="del1"></td>
                    <td>15623</td>
                    <td>张三</td>
                    <td>男</td>
                    <td>2016年11月1日</td>
                    <td>李四</td>
                    <td>1号楼</td>
                    <td>302</td>
                    <td>2</td>
                    <td>1000</td>
                    <td>汉</td>
                    <td>1932年4月5日</td>
                    <td>瘫痪</td>
                    <td>二级</td>
                    <td>370605198236425648</td>
                    <td>良好</td>
                    <td>2016年12月1日</td>
                    <td><input type="button" class="button"  onclick="tableUrl()" value="修改"></td>

                </tr>
                <tr>
                    <td><input type="checkbox" name="del"value="del1"></td>
                    <td>15623</td>
                    <td>张三</td>
                    <td>男</td>
                    <td>2016年11月1日</td>
                    <td>李四</td>
                    <td>1号楼</td>
                    <td>302</td>
                    <td>2</td>
                    <td>1000</td>
                    <td>汉</td>
                    <td>1932年4月5日</td>
                    <td>瘫痪</td>
                    <td>二级</td>
                    <td>370605198236425648</td>
                    <td>良好</td>
                    <td>2016年12月1日</td>
                    <td><input type="button" class="button"  onclick="tableUrl()" value="修改"></td>

                </tr>
                <tr>
                    <td><input type="checkbox" name="del"value="del1"></td>
                    <td>15623</td>
                    <td>张三</td>
                    <td>男</td>
                    <td>2016年11月1日</td>
                    <td>李四</td>
                    <td>1号楼</td>
                    <td>302</td>
                    <td>2</td>
                    <td>1000</td>
                    <td>汉</td>
                    <td>1932年4月5日</td>
                    <td>瘫痪</td>
                    <td>二级</td>
                    <td>370605198236425648</td>
                    <td>良好</td>
                    <td>2016年12月1日</td>
                    <td><input type="button" class="button"  onclick="tableUrl()" value="修改"></td>

                </tr>
                <tr>
                    <td><input type="checkbox" name="del"value="del1"></td>
                    <td>15623</td>
                    <td>张三</td>
                    <td>男</td>
                    <td>2016年11月1日</td>
                    <td>李四</td>
                    <td>1号楼</td>
                    <td>302</td>
                    <td>2</td>
                    <td>1000</td>
                    <td>汉</td>
                    <td>1932年4月5日</td>
                    <td>瘫痪</td>
                    <td>二级</td>
                    <td>370605198236425648</td>
                    <td>良好</td>
                    <td>2016年12月1日</td>
                    <td><input type="button" class="button"  onclick="tableUrl()" value="修改"></td>

                </tr>
                <tr>
                    <td><input type="checkbox" name="del"value="del1"></td>
                    <td>15623</td>
                    <td>张三</td>
                    <td>男</td>
                    <td>2016年11月1日</td>
                    <td>李四</td>
                    <td>1号楼</td>
                    <td>302</td>
                    <td>2</td>
                    <td>1000</td>
                    <td>汉</td>
                    <td>1932年4月5日</td>
                    <td>瘫痪</td>
                    <td>二级</td>
                    <td>370605198236425648</td>
                    <td>良好</td>
                    <td>2016年12月1日</td>
                    <td><input type="button" class="button"  onclick="tableUrl()" value="修改"></td>

                </tr>
                <tr>
                    <td><input type="checkbox" name="del"value="del1"></td>
                    <td>15623</td>
                    <td>张三</td>
                    <td>男</td>
                    <td>2016年11月1日</td>
                    <td>李四</td>
                    <td>1号楼</td>
                    <td>302</td>
                    <td>2</td>
                    <td>1000</td>
                    <td>汉</td>
                    <td>1932年4月5日</td>
                    <td>瘫痪</td>
                    <td>二级</td>
                    <td>370605198236425648</td>
                    <td>良好</td>
                    <td>2016年12月1日</td>
                    <td><input type="button" class="button"  onclick="tableUrl()" value="修改"></td>

                </tr>
                <tr>
                    <td><input type="checkbox" name="del"value="del2"></td>
                    <td>15623</td>
                    <td>张三</td>
                    <td>男</td>
                    <td>2016年11月1日</td>
                    <td>李四</td>
                    <td>1号楼</td>
                    <td>302</td>
                    <td>2</td>
                    <td>1000</td>
                    <td>汉</td>
                    <td>1932年4月5日</td>
                    <td>瘫痪</td>
                    <td>二级</td>
                    <td>370605198236425648</td>
                    <td>良好</td>
                    <td>2016年12月1日</td>
                    <td><input type="button" class="button"  onclick="tableUrl()" value="修改"></td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="del"value="del2"></td>
                    <td>15623</td>
                    <td>张三</td>
                    <td>男</td>
                    <td>2016年11月1日</td>
                    <td>李四</td>
                    <td>1号楼</td>
                    <td>302</td>
                    <td>2</td>
                    <td>1000</td>
                    <td>汉</td>
                    <td>1932年4月5日</td>
                    <td>瘫痪</td>
                    <td>二级</td>
                    <td>370605198236425648</td>
                    <td>良好</td>
                    <td>2016年12月1日</td>
                    <td><input type="button" class="button"  onclick="tableUrl()" value="修改"></td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="del"value="del2"></td>
                    <td>15623</td>
                    <td>张三</td>
                    <td>男</td>
                    <td>2016年11月1日</td>
                    <td>李四</td>
                    <td>1号楼</td>
                    <td>302</td>
                    <td>2</td>
                    <td>1000</td>
                    <td>汉</td>
                    <td>1932年4月5日</td>
                    <td>瘫痪</td>
                    <td>二级</td>
                    <td>370605198236425648</td>
                    <td>良好</td>
                    <td>2016年12月1日</td>
                    <td><input type="button" class="button"  onclick="tableUrl()" value="修改"></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
<#--弹出老人信息弹窗-->
    <div class="publicModal">
    </div>


<#--增删改查按钮-->
    <div class="modify">
        <button class="pull-left btn-style btn-ma" onclick="tableUrl()"><img src="${domainUrl}/assets/images/backstage/jia.png">月结</button>
        <button class="pull-left btn-style btn-ma"><img src="${domainUrl}/assets/images/backstage/del.png">删除</button>
        <div class="clearfix"></div>
    </div>




<#--页码-->
<#--<div class="tcdPageCode">-->
<#--</div>-->


</div>
