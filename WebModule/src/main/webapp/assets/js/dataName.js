$(function () {
    //添加到数组
   addOldName();
    addCheckInCost();
    addStaffName();
    addServeName();
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
//员工姓名/列表
var staffName = [];
var staff={};
var staffOption='';
function addStaffName() {
    var urlFindAll = domainUrl + "/serve/staff/findAll";
    var getData = {
        currentPage: currentPage,
        limit: limit
    };
    getAjax(urlFindAll, false, getData, function (data) {
        var num = data.aaData.length;
        var d;
        for(var i  = 0 ; i < num ; i++){
            d = data.aaData[i];
            staff = {id:d.id,name:d.name};
            staffName[i]=staff;
            staffOption += '<option value="'+d.id+'">'+d.name+'</option>'
        }
    })
}
function findStaffName(id) {
    var num = staffName.length;
    for(var i = 0 ; i < num ; i++){
        if(id == staffName[i].id){
            return staffName[i].name;
            break;
        }
    }
}
//特殊服务费
var serveName = [];
var serve={};
var serveOption='';
function addServeName() {
    var urlFindAll = domainUrl + "/serve/service_charge/findAll";
    var getData = {
        currentPage: currentPage,
        limit: limit
    };
    getAjax(urlFindAll, false, getData, function (data) {
        var num = data.aaData.length;
        var d;
        for(var i  = 0 ; i < num ; i++){
            d = data.aaData[i];
            serve = {id:d.id,name:d.item};
            serveName[i]=serve;
            serveOption += '<option value="'+d.id+'">'+d.item+'</option>'
        }
    })
}
function findServeName(id) {
    var num = serveName.length;
    for(var i = 0 ; i < num ; i++){
        if(id == serveName[i].id){
            return serveName[i].name;
            break;
        }
    }
}