/**
 * Created by Administrator on 2016/12/9.
 */


//柱状图
$(function(){
    var data = [
        {
            name : '男',
            value:[1,1,1,1],
            color:'#de9972'
        },
        {
            name : '女',
            value:[1,1,1,1],
            color:'#28847f'
        }

    ];
    var chart = new iChart.ColumnMulti3D({
        render : 'canvasDiv',
        data: data,
        labels:["第一周","第二周","第三周","第四周"],
        title : {
            text : '老人月度欠费报表',
            color : '#3e576f'
        },
        animation : true,//开启过渡动画
        animation_duration:800,//800ms完成动画
        width : 700,
        height : 350,
        background_color : '#ffffff',
        legend:{
            enable:true,
            background_color : null,
            align : 'center',
            valign : 'bottom',
            row:1,
            column:'max',
            border : {
                enable : false
            }
        },
        column_width : 8,//柱形宽度
        zScale:8,//z轴深度倍数
        xAngle : 50,
        bottom_scale:1.1,
        label:{
            color:'#4c4f48'
        },
        sub_option:{
            label :false
        },
        tip:{
            enable :true
        },
        text_space : 16,//坐标系下方的label距离坐标系的距离。
        coordinate:{
            background_color : '#d7d7d5',
            grid_color : '#a4a4a2',
            color_factor : 0.24,
            board_deep:10,
            offsety:-10,
            pedestal_height:10,
            left_board:false,//取消左侧面板
            width:620,
            height:240,
            scale:[{
                position:'left',
                start_scale:0,
                end_scale:10,
                scale_space:1,
                scale_enable : false,
                label:{
                    color:'#4c4f48'
                }
            }]
        }
    });

    //利用自定义组件构造左侧说明文本
    chart.plugin(new iChart.Custom({
        drawFn:function(){
            //计算位置
            var coo = chart.getCoordinate(),
                x = coo.get('originx'),
                y = coo.get('originy');
            //在左上侧的位置，渲染一个单位的文字
            chart.target.textAlign('start')
                .textBaseline('bottom')
                .textFont('600 11px Verdana')
                .fillText('人数（位）',x-40,y-28,false,'#6d869f');

        }
    }));

    chart.draw();
});




//饼状图
$(function(){

    var data1 = [
        {name:"已入住（男）", value:1, color:"#4572a7"},
        {name:"已入住（女）", value:1, color:"#f76b25"},
        {name:"未入住", value:500,color:"#31A09C"},
    ];

    var chart = iChart.create({
        render:"canvasDiv1",
        data: data1,//绑定数据
        width:700,
        height:350,

        gradient:false,
        color_factor:0.2,
        border:{
            color:"BCBCBC",
            width:1
        },
        animation : true,//开启过渡动画
        animation_duration:800,//800ms完成动画
        align:"center",
        offsetx:0,
        offsety:0,
        sub_option:{
            border:{
                color:"#BCBCBC",
                width:1
            },
            label:{
                fontweight:500,
                fontsize:11,
                color:"#4572a7",
                sign:"square",
                sign_size:12,
                border:{
                    color:"#BCBCBC",
                    width:1
                },
                background_color:"#fefefe"
            }
        },
        shadow:true,
        shadow_color:"#666666",
        shadow_blur:2,
        showpercent:false,
        column_width:"70%",
        bar_height:"70%",
        radius:"90%",
        title:{
            text:"入住老人比率",
            color:"#111111",
            fontsize:20,
            font:"微软雅黑",
            textAlign:"center",
            height:30,
            offsetx:0,
            offsety:0
        },
        subtitle:{
            text:"",
            color:"#111111",
            fontsize:16,
            font:"微软雅黑",
            textAlign:"center",
            height:20,
            offsetx:0,
            offsety:0
        },
        footnote:{
            text:"",
            color:"#111111",
            fontsize:12,
            font:"微软雅黑",
            textAlign:"right",
            height:20,
            offsetx:0,
            offsety:0
        },
        legend:{
            enable:true,
            background_color:"#fefefe",
            color:"#333333",
            fontsize:12,
            border:{
                color:"#BCBCBC",
                width:1
            },
            column:1,
            align:"right",
            valign:"center",
            offsetx:-20,
            offsety:0
        },
        coordinate:{
            width:"85%",
            height:"84%",
            background_color:"#ffffff",
            axis:{
                color:"#a5acb8",
                width:[1,"",1,""]
            },
            grid_color:"#d9d9d9",
            label:{
                fontweight:500,
                color:"#666666",
                fontsize:11
            }
        },
        label:{
            fontweight:500,
            color:"#666666",
            fontsize:11
        },
        type:"pie2d",

    });
    chart.draw();
});