/**
 * Created by horo on 2016/12/12.
 */
function findAllOldMess(id) {
    findAllSon(id);
    findAllCost(id);
    findAllServe(id);
    findAllNurse(id);
}
function findAllSon(id) {
    var url = domainUrl + "/serve/older_kinsfolk/findAll";
    var getData = {
        currentPage:currentPage,
        limit:limit
    };
    var html = '';
    var name = '';
    getAjax(url,false,getData,function (data) {
        console.log(JSON.stringify(data))
        var num = data.aaData.length;
        var d;
        for(var i = 0; i < num ; i ++){
            d = data.aaData[i];
            name = findOldName(d.olderId);
            if(id == d.olderId){
                html+='<tr><td><input type="text" value="'+name+'" ></td> <td><input type="text" value="'+d.tel+'" ></td><td><input type="text" value="'+d.relation+'"></td>' +
                    '  <td><input  type="text" value="'+d.cardId+'" ></td> <td><input type="text" value="'+d.jobName+'" ></td> <td><input  type="text" value="'+d.homeAddress+'"></td>  </tr>'
            }
        }
        $("#sonFind").html(html);
    })
}
function findAllCost(id) {
    var urlFindAll = domainUrl+"/serve/older_initial_fee/findAll";
    var getData = {
        currentPage:currentPage,
        limit:limit
    };
    var html = '';
    var name ='' ;
    var money='';
    getAjax(urlFindAll,false,getData,function (data) {
        console.log(JSON.stringify(data))
        var num = data.aaData.length;
        var d;
        for (var i = 0; i < num; i++) {
            d = data.aaData[i];
            name = findOldName(d.olderId);
            money = findCheckIn(d.checkInInitCostId);
            if (d.checkInInitCostState == 101) {
                d.checkInInitCostState = "已交"
            } else if (d.checkInInitCostState == 102) {
                d.checkInInitCostState = "未交"
            }
            if(id == d.olderId){
                html+='<tr><td><input type="text" value="'+name+'"></td> <td><input type="text" value="'+money+'"></td></tr>';
            }
        }
        $("#checkInCostTable").html(html)
    })
}
function findAllServe(id) {
    var urlFindAll = domainUrl+"/serve/older_cost/findAll";
    var getData = {
        currentPage:currentPage,
        limit:limit
    };
    var html = '';
    var name ='';
    var serve = '';
    getAjax(urlFindAll,false,getData,function (data) {
        console.log(JSON.stringify(data))
        var num = data.aaData.length;
        var d;
        for(var i = 0; i < num ; i ++){
            d = data.aaData[i];
            name = findOldName(d.olderId);
            serve  = findServeName(d.serviceChargeId)
            if(id == d.olderId){
                 html+=' <td><input type="text" value="'+serve+'"></td> <td><input type="text" value="'+d.serviceChargeContext+'"></td> <td><input type="text" value="'+d.serviceChargeDate+'">';
            }

        }
        $("#findAllServe").html(html)
    })
}
function findAllNurse(id) {
    var urlFindAll = domainUrl+"/serve/older_nurse_log/findAll";
    var getData = {
        currentPage:currentPage,
        limit:limit
    };
    var html = '';
    var name='' ;
    var nurseName='';
    getAjax(urlFindAll,false,getData,function (data) {
        console.log(JSON.stringify(data))
        var num = data.aaData.length;
        var d;
        for(var i = 0; i < num ; i ++){
            d = data.aaData[i];
            name = findOldName(d.olderId);
            nurseName = findStaffName(d.staffId);
            if(id == d.olderId){
                html +=' <tr> <td><input type="text" value="'+d.physicalCondition+'"></td> <td><input type="text" value="'+d.nurseInfo+'"></td> <td><input type="text" value="'+d.nurseDate+'">' +
                    '</td> <td><input type="text" value="'+nurseName+'"></td> </tr>'
            }

        }
        $("#findNurse").html(html)

    })
}