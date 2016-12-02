/**
 * Created by horo on 2016/11/25.
 */
$(function(){
    var data = [
        {
            name : '一周入住报表',
            value:[5,10,12,20,26,30,32],
            color:'#ffffff',
            line_width:3,

        }
    ];
    var chart = new iChart.LineBasic2D({
        render : 'canvasDiv2',
        data: data,
        width : 400,
        height : 200,
        label : {
            fontsize:12,
            color : '#ffffff'
        },
        background_color : null,
        border:{
            width:0,
        },
        coordinate:{
            height:'78%',
            background_color:null,
            axis:{
                color:"#ffffff",
            },
            label:{
                fontsize:12,
                color : '#ffffff'
            },
            scale:[{
                position:'left',
                label:{
                    fontsize:12,
                    color : '#ffffff'
                }
            },{
                position:'bottom',
                label:{
                    fontsize:12,
                    color : '#ffffff'
                }

            }],
            width:"90%",

        },
        sub_option:{
            hollow_inside:false,//设置一个点的亮色在外环的效果
            point_size:16
        },
        labels:["周一","周二","周三","周四","周五","周六","周日"],
    });
    chart.draw();

});
