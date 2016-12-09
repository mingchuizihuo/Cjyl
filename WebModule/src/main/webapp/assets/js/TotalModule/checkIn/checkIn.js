/**
 * Created by Administrator on 2016/12/5.
 */
var url = domainUrl + "/serve/mansion/";
$(function () {
    findAll(1);
})
//查询
var pageNp = 1;
function findAll(currentPage) {
    var urlFindAll = url + "findAllVO";
    var getData = {
        currentPage: currentPage,
        limit: limit
    }
    getAjax(urlFindAll, false, getData, function (data) {
        // console.log(JSON.stringify(data))
        var num = data.aaData.length;
        var pageList = Math.ceil(data.iTotalRecords / 9);
        var d;
        var html = '';
        for (var i = 0; i < num; i++) {
            d =  data.aaData[i];
            html += ' <li><div><img src="'+domainFile+'/assets/images/jianzhu.png">'+d.name+'</div> <ul class="room">';
            for(var j = 0 ; j < d.floorTierierList.length; j++){
                html+=' <li onclick="table('+i+','+j+',&quot;'+d.name+'&quot;,&quot;'+d.floorTierierList[j].floorTier+'&quot;)">'+'<img src="'+domainFile+'/assets/images/floor.png">'+d.floorTierierList[j].floorTier+'</li> ';
            }
            html+='</ul> </li>';
        }
        $("#side-floor").html(html);
        $("#side-floor div").click(function () {
            $(this).parent("li").find(".room").toggle(300);
        })
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
function table(num,num2,name,floor) {
    var urlFindAll = url + "findAllVO";
    var getData = {
        currentPage: currentPage,
        limit: limit
    }
    getAjax(urlFindAll,false,getData,function (data) {
        var d = data.aaData[num].floorTierierList[num2].roomList;
        var table='';
        var button='';
        for(var i =0 ; i < d.length ; i++){
            table+='<tr><td>'+name+'</td><td>'+floor+'</td><td>'+d[i].roomNum+'</td><td>'+d[i].roomType+'</td><td>';
            for(var j = 0; j < d[i].bedList.length;j++){
                if(d[i].bedList[j].bedState == 1){
                    button ='<input type="button" value="空闲" onclick="modalUrl(&quot;'+name+'&quot;,&quot;'+floor+'&quot;,&quot;'+d[i].roomNum+'&quot;)">';
                }else{
                    button ='<input type="button" value="使用">';
                }
                table+=''+button+'';
            }
            table+='</td></tr>';
        }
        $("#roomTable").find("tbody").html(table);
    })
}
//添加
function add() {
    var urlAdd = url + "add";
    var postData = {

    }
    postAjax(urlAdd, false, postData, function (data) {
        alert("添加成功");
        findAll(currentPage);
    })
}
//修改
function make(id) {

}
function update() {
    var urlUpdate = url +"update";
    var postData = {

    }
    postAjax(urlUpdate,false,postData,function (data) {

    })
}
//删除
function del(id) {
    var urlDel = url + "del";
    var postData = {
        id:id
    }
    postAjax(urlDel,false,postData,function (data) {
        alert("删除成功");
        findAll(currentPage);
    })
}