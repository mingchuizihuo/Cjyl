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
        var takeCare='';
        var mental='';
        var state='';
        var son='';
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
            //自理情况
            if(d.tid == 122){
                takeCare += '<option value="'+d.id+'">'+d.dataName+'</option>'
            }
            //神志状况
            if(d.tid == 4){
                mental += '<option value="'+d.id+'">'+d.dataName+'</option>'
            }
            //老人状态
            if(d.tid == 125){
                state += '<option value="'+d.id+'">'+d.dataName+'</option>'
            }
            //亲属关系
            if(d.tid == 8){
                son += '<option value="'+d.id+'">'+d.dataName+'</option>'
            }
        }
        $("#sex").html(sex);
        $("#nurse").html(nurse);
        $("#faith").html(faith);
        $("#politics").html(politics);
        $("#takeCare").html(takeCare);
        $("#mental").html(mental);
        $("#son").html(son);
        $("#state").html(state);
    })
}