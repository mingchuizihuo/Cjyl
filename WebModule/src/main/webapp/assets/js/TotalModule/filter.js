/**
 * Created by xiao on 2016/12/9.
 */
$(function () {
    setTimeout(function () {
        findAllDate();
    }, 100);

});

function findAllDate() {
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
        var nurseLeave = '';
        var faith='';
        var politics='';
        var takeCare='';
        var mental='';
        var state='';
        var son='';
        var aaa='';

        for(var i = 0 ; i < num ; i++){
            d=data.aaData[i];
            //性别
            if(d.tid == 13){
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
            if(d.tid == 107){
                takeCare += '<option value="'+d.id+'">'+d.dataName+'</option>'
            }
            //神志状况
            if(d.tid == 4){
                mental += '<option value="'+d.id+'">'+d.dataName+'</option>'
            }
            //老人状态
            if(d.tid == 110){
                state += '<option value="'+d.id+'">'+d.dataName+'</option>'
            }
            //亲属关系
            if(d.tid == 8){
                son += '<option value="'+d.id+'">'+d.dataName+'</option>'
            }
            //亲属关系
            if(d.tid == 103){
                aaa += '<option value="'+d.id+'">'+d.dataName+'</option>'
            }
            //护理级别
            if(d.tid == 114){
                nurseLeave += '<option value="'+d.id+'">'+d.dataName+'</option>'
            }

        }
        $("#sex").html(sex);
        $("#nurse").html(nurse);
        $("#nursingGrades").html(nurseLeave);
        $("#faith").html(faith);
        $("#politics").html(politics);
        $("#takeCare").html(takeCare);
        $("#mental").html(mental);
        $("#son").html(son);
        $("#state").html(state);
        $(".aaa").html(aaa);
    })
}