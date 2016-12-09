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
        for(var i = 0 ; i < num ; i++){
            d=data.aaData[i];
            console.log(d)
        }
    })
}