/**
 * Created by lgengjiajun on 2016/12/10.
 */
$(function () {
    findAllSelect()
});
//入住初始费

function  stayIn(){
    var url = domainUrl+"/serve/older_initial_fee/add";
    var postData = {

    };
    postAjax(url,false,postData,function (data) {

    })

}

function findAllSelect() {
    var url = domainUrl + "/serve/check_in_init_cost/findAll";
    var getData = {
        currentPage:currentPage,
        limit:limit
    }
    getAjax(url,false,getData,function (data) {
        console.log(JSON.stringify(data))
        var num = data.iTotalRecords;
        var html='<option>请选择</option>';
        var d='';
        for(var i=0;i<num;i++)
        {
            d=data.aaData[i];
            html+='<option value="'+d.id+'">'+d.item+'</option>';
        }
        $("#CheckItem").html(html);
        $("#CheckItem").click(function () {
            var id = $(this).val();
            for(var j = 0; j <num; j++){
                d=data.aaData[j];
                if(id == d.id){
                    $("#checkCost").val(d.money)
                }
            }
        })
    })

}
