/**
 * Created by xiao on 2016/12/10.
 */
var url = domainUrl + "/serve/older/";
var costOldId='';
$(function () {
    findAll(1);
})
//查询
var pageNp = 1;
function findAll(currentPage) {
    var urlFindAll = url + "findAllBriefVO";
    var getData = {
        currentPage: currentPage,
        limit: limit
    };
    getAjax(urlFindAll, false, getData, function (data) {
        var num = data.aaData.length;
        // console.log(JSON.stringify(data));
        var pageList = Math.ceil(data.iTotalRecords / 9);
        var d;
        var money = 0;
        var html = '<thead><tr><th></th>  <th>姓名 </th> ' +
            ' <th>入住时间</th> <th>护理人员</th> <th>大厦</th> <th>房间</th> <th>床位</th> <th>月费用</th> <th>民族</th> ' +
            '<th>出生日期</th> <th>自理情况</th>  <th>身份证号</th> <th>状态</th> <th>出院日期</th> <th>操作</th></tr> </thead><tbody id="tbodyDelId">';
        if(data.aaData.length<num){
            num = data.aaData.length;
        }
        for (var i = 0; i < num; i++) {
            d =  data.aaData[i];
            for(var j = 0; j<d.checkInInitCostList.length; j++){
                money += d.checkInInitCostList[j].money;
            }
            if(d.staff == null){
                d.staff = {
                    name:"正在指派"
                };
            }
            html += ' <tr> <td><input type="checkbox" name="del"></td><td>'+d.name+'</td>  <td>'+d.checkInDate.substring(0,11)+'</td> <td>'+d.staff.name+'</td>' +
                ' <td>'+d.mansion+'</td> <td>'+d.room+'</td> <td>'+d.bed+'</td> <td>'+money+'</td>  <td>'+d.nation+'</td> <td>'+d.birthday+'</td> <td>'+d.takeCareOfOneselfStr+'</td>' +
                ' <td>'+d.cardId+'</td> <td>'+d.olderStateStr+'</td> <td>'+d.olderLeaveDate+'</td><td><input type="button" value="月结" onclick="tableUrl('+d.id+')"></td> </tr>';
        }
        html += '</tbody>';
        $("#oldTable").html(html);
        if (pageNp == 1) {
            pageNp = 2;
            $(".tcdPageCode").createPage({
                pageCount: pageList,
                current: currentPage,
                backFn: function (p) {
                    findAll(p)
                }
            });
        }
    })
}
