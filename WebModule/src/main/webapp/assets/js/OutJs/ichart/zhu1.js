/**
 * Created by horo on 2016/11/25.
 */

/*首页报表2柱状图*/
$(function() {
    var data = [
        {name : '1月',value : 45.11,color : '#4572a7'},
        {name : '2月',value : 29.84,color : '#4572a7'},
        {name : '3月',value : 24.88,color : '#4572a7'},
        {name : '4月',value : 27.77,color : '#4572a7'},
        {name : '5月',value : 44.02,color : '#4572a7'},
        {name : '6月',value : 27.02,color : '#4572a7'},
    ];

    var chart = new iChart.Column2D({
        render : 'canvasDiv1',
        data : data,

        width : 300,
        height : 100,
        label : {
            fontsize:11,
            color : '#888888'
        },
        border:{
            color:"#ffffff",
            width:0
        },
        background_color: null,
        animation : true,//开启过渡动画
        animation_duration:800,//800ms完成动画
        shadow : true,
        shadow_blur : 2,
        shadow_color : '#aaaaaa',
        shadow_offsetx : 1,
        shadow_offsety : 0,
        column_width : 62,
        sub_option : {
            listeners : {
                parseText : function(r, t) {
                    return t + "%";
                }
            },
            label : {
                fontsize:0,
                fontweight:600,
                color : '#fffffff'
            },
            border : {
                width : 0,
                color : '#ffffff'
            }
        },
        coordinate : {
            background_color : null,
            grid_color : '#c0c0c0',
            width : '92%',
            height : '75%',
            axis : {
                color : '#c0d0e0',
                width : [0, 0, 1, 0]
            },
            scale : [{
                position : 'left',
                start_scale : 0,
                end_scale : 60,
                scale_space : 10,
                scale_enable : false,
                label : {
                    fontsize:11,
                    color : '#888888'
                }
            }]
        }
    });

    chart.draw();
});

