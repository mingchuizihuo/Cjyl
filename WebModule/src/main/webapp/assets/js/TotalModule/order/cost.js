/**
 * Created by xiao on 2016/12/10.
 */
var url = domainUrl + "/serve/older_month_charge/";
var money=0;
var moneyLog = [];
var costsIds = [];
$(function () {
    findAll(1);
});
//查询
var pageNp = 1;
function findAll(currentPage) {
    var urlFindAll = url + "findByExample";
    var getData = {
        olderId: costOldId,
        olderMonthChargeState: 102,
        currentPage: currentPage,
        limit: limit
    }
    getAjax(urlFindAll, false, getData, function (data) {

        var num = data.iTotalRecords;

        var pageList = Math.ceil(num / 9);
        var d = data;

        var html = '<thead> <tr> <th>编码</th> <th>类型</th> <th>状态</th> <th>金额</th> </tr> </thead>'
        html += '<tbody> ';
        if(data.aaData.length<num){
            num = data.aaData.length;
        }
        for (var i = 0; i < num; i++) {
            var totalMoney=0;
            if(d.aaData[i].monthCharge==null){
                totalMoney = 100;

            }else{
                totalMoney = d.aaData[i].monthCharge.total
            }
            costsIds.push(d.aaData[i].id);
           html+= '<tr> ' +
            '<td id="costTabletdid'+d.aaData[i].id+'">'+d.aaData[i].id+'</td> ' +
            '<td>'+d.aaData[i].olderMonthChargeStateStr+'</td> ' +
            '<td> ' +
            '<select class="form-control select aaa" onchange="costSelect('+d.aaData[i].id+','+totalMoney+')" id = "costSelect'+d.aaData[i].id+'"></select>' +
            '</td>' +
            '<td>'+totalMoney+'</td> '+
            '</tr>';
            money+=totalMoney;
        }
        html +='</tbody>';
        $("#costOlderName").val(data.aaData[0].older.name);
        $("#moneyConut").val(money)
        $("#moneyXian").val(money)
        console.log(html);
        $("#costTable").html(html);
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

var moneyP=0;

function costSelect(id,moneyM){
    var type = $("#costSelect"+id).val();
   if(type!=104){
       var count=0;
       for(var i=0;i<moneyLog.length;i++){

           if(moneyLog[i].indexOf(id+"-"+"10")!=-1){
               count=1;
           }
           if(id+"+"+moneyM+"+"+type ==moneyLog[i]){
               count=0;

           }


       }
       if(count==0){
           money = money-moneyM;
           moneyLog.push(id+"-"+moneyM+"-"+type);
           for(var i=0;i<moneyLog.length;i++){

               if( moneyLog[i].indexOf(id+"+"+moneyM)!=-1){
                   moneyLog.splice(i,1);

               }


           }
       }

   }else{
       var count=0;
       for(var i=0;i<moneyLog.length;i++){
           if(id+"+"+moneyM+"+"+type==moneyLog[i] ){
               count=1;
           }
       }
       if(count==0){
           money = money+moneyM;
           moneyLog.push(id+"+"+moneyM+"+"+type);
           for(var i=0;i<moneyLog.length;i++){
               if(moneyLog[i].indexOf(id+"-")!=-1){
                   moneyLog.splice(i,1);
               }
           }
       }


   }
    $("#moneyConut").val(money)
    $("#moneyXian").val(money)
}
function closeAnAccount(){

   for(var i=0; i<costsIds.length;i++){
       var costId = $("#costTabletdid"+costsIds[i]).text();
       var costSelectValue = $("#costSelect"+costsIds[i]).val();
       var id = costId;
       var olderMonthChargeState=101;
       var olderMonthChargeEndType = costSelectValue;
       var data = {
           id:id,
           olderMonthChargeState:olderMonthChargeState,
           olderMonthChargeEndType:olderMonthChargeEndType,
       }
       update(data);
   }

}
function update(data) {
    var urlUpdate = url + "update";
    var postData = data;
    postAjax(urlUpdate, false, postData, function (data) {
        console.log(JSON.stringify(data));
    })
}