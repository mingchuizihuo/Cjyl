$(function () {
    //添加到数组
   addOldName();
    addCheckInCost();
});
//查询老人姓名/列表
var oldName = [];
var old={};
var oldOption='';
function addOldName() {
    var urlFindAll = domainUrl + "/serve/older/findAllBriefVO";
    var getData = {
        currentPage: currentPage,
        limit: limit
    };
    getAjax(urlFindAll, false, getData, function (data) {
        var num = data.aaData.length;
        var d;
        for(var i  = 0 ; i < num ; i++){
            d = data.aaData[i];
            old = {id:d.id,name:d.name};
            oldName[i]=old;
            oldOption += '<option value="'+d.id+'">'+d.name+'</option>'
        }
    })
}
function findOldName(id) {
    var num = oldName.length;
    for(var i = 0 ; i < num ; i++){
        if(id == oldName[i].id){
            return oldName[i].name;
            break;
        }
    }
}
//入住初始费用
var checkInCost = [];
var checkIn={};
var checkOption='';
function addCheckInCost() {
    var urlFindAll = domainUrl + "/serve/check_in_init_cost/findAll";
    var getData = {
        currentPage: currentPage,
        limit: limit
    };
    getAjax(urlFindAll, false, getData, function (data) {
        var num = data.aaData.length;
        var d;
        for(var i  = 0 ; i < num ; i++){
            d = data.aaData[i];
            checkIn = {id:d.id,name:d.money};
            checkInCost[i]=checkIn;
            checkOption += '<option value="'+d.id+'">'+d.item+'</option>'
        }
    })
}
function findCheckIn(id) {
    var num = checkInCost.length;
    for(var i = 0 ; i < num ; i++){
        if(id == checkInCost[i].id){
            return checkInCost[i].name;
            break;
        }
    }
}