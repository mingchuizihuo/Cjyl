/**
 * Created by xiao on 2016/12/9.
 */
$(function () {
    findAll();
});
function findAll() {
    var url  = domainUrl + "/serve/data_dictionary/findAll";
    var getData = {
        currentPage:1,
        limit:1000
    };
    var d='';
    getAjax(url,false,getData,function (data) {
        // console.log(JSON.stringify(data))
        var num = data.iTotalRecords;
        var sex='';
        var nurse='';
        var faith='';
        var politics='';
        for(var i = 0 ; i < num ; i++){
            d=data.aaData[i];
            console.log(d)
            //性别
            if(d.tid == 113){
                sex += '<option value="'+d.id+'">'+d.dataName+'</option>'
            }
            //护理
            if(d.tid == 118){
                nurse += '<option value="'+d.id+'">'+d.dataName+'</option>'
            }
            //信仰
            if(d.tid == 5){
                faith += '<option value="'+d.id+'">'+d.dataName+'</option>'
            }
            //政治面貌
            if(d.tid == 9){
                politics += '<option value="'+d.id+'">'+d.dataName+'</option>'
            }
        }
        $("#sex").html(sex);
        $("#nurse").html(nurse);
        $("#faith").html(faith);
        $("#politics").html(politics);
    })
}