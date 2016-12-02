/**
 * Created by Administrator on 2016/11/26.
 */
/*月报表*/

//定义数据
var data = [
    {name : '收入',value : 32,color:'#4572a7'},
    {name : '食材支出',value : 5,color:'#aa4643'},
    {name : '日常损耗',value : 2,color:'#89a54e'},
    {name : '员工支出',value : 12,color:'#80699b'},
    {name : '公司报销',value : 2,color:'#92a8cd'},
    {name : '福利支出',value : 3,color:'#db843d'},
    {name : '其他',value : 2,color:'#a47d7c'},
];
$(function(){
    var chart = new iChart.Column2D({
        render : 'canvasDiv5',//渲染的Dom目标,canvasDiv为Dom的ID
        data: data,//绑定数据
        title : '',//设置标题
        width : 800,//设置宽度，默认单位为px
        height : 300,//设置高度，默认单位为px
        shadow:true,//激活阴影
        border:0,
        background_color:null,
        shadow_color:'#c7c7c7',//设置阴影颜色
        label:{
            color:"#ffffff",
            fontsize:12
        },
        coordinate:{//配置自定义坐标轴
            height:'78%',
            scale:[{//配置自定义值轴
                position:'left',//配置左值轴
                start_scale:0,//设置开始刻度为0
                scale_space:5,//设置刻度间距
                label:{
                    color:'#ffffff'
                },
                listeners:{//配置事件
                    parseText:function(t,x,y){//设置解析值轴文本
                        return {text:t+""}
                    }
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
                .fillText('金额(万)',x-40,y-28,false,'#eeeeee');

        }
    }));

    //调用绘图方法开始绘图
    chart.draw();
});


/*季度报表*/
$(function(){
    var data = [
        {
            name : '总收入',
            value:[5.2,8.8,9.0,8.4,7.5,7.9,8.6,9.2,7.0,9.2,7.5,8.0,7.6,8.2],
            color:'#de9972'
        },
        {
            name : '总支出',
            value:[1.0,6.7,7.6,6.0,6.0,6.2,5.2,6.0,6.2,6.7,6.5,5.0,5.0,6.2],
            color:'#28847f'
        },
        {
            name : '人员报销',
            value:[2,3,2,2,3,3,1,4,1,3,2,2,1,2],
            color:'#90abc0'
        }
    ];
    var chart = new iChart.ColumnMulti3D({
        render : 'canvasDiv6',
        data: data,
        labels:["本周","十一周","十周","九周","八周","七周","六周","五周","四周","三周",'两周','一周'],
        title : {
            text : '',
            color : '#3e576f'
        },
        label:{
            color:"#ffffff",
            fontsize:12
        },
        color:'#fff',
        footnote : {
            text : '',
            color : '#909090',
            fontsize : 11,
            padding : '0 44'
        },
        border:0,
        width : 700,
        height : 370,
        background_color : null,
        legend:{ //底部标注
            enable:false,
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
                end_scale:16,
                scale_space:2,
                scale_enable : false,
                label:{
                    color:'#ffffff'
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
                .fillText('金额(万)',x-40,y-28,false,'#eeeeee');

        }
    }));

    chart.draw();
});


/*年度收益表*/
$(function(){
    var data = [
        {
            name : '收入总额',
            value:[372,350,292,262,180,160],
            color:'#ECAD55'
        },
        {
            name : '支出总额',
            value:[233,240,210,180,135,120],
            color:'#47AAB3'
        }
    ];

    var chart = new iChart.BarStacked2D({
        render : 'canvasDiv7',
        data: data,
        labels:["2016年","2015年","2014年","2013年","2012年","2010年",],
        title : {
            text:'近六年收益支出报表',
            width:400,
            align:'left',
            background_color : '#495998',
            color:'#c0c8e7'
        },
        subtitle : {
            text:'',
            width:280,
            height:20,
            fontsize:12,
            align:'left',
            color:'#c0c8e7'
        },
        padding:10,
        footnote : '',
        width : 1600,
        height : 350,
        bar_height:20,
        background_color : null,
        border:0,
        shadow : true,
        shadow_blur : 2,
        shadow_color : '#aaaaaa',
        shadow_offsetx : 1,
        shadow_offsety : 0,
        sub_option:{
            label:{color:'#ffffff',fontsize:12,fontweight:600},
            border : {
                width : 2,
                color : '#d3d4f0'
            }
        },
        label:{color:'#d3d4f0',fontsize:12,fontweight:600},
        showpercent:true,
        decimalsnum:0,
        legend:{
            enable:true,
            background_color : null,
            line_height:25,
            color:'#d3d4f0',
            fontsize:12,
            fontweight:600,
            border : {
                enable : false
            }
        },
        coordinate:{
            background_color : 0,
            axis : {
                color : '#c0c8e7',
                width : 0
            },
            scale:[{
                position:'bottom',
                scale_enable : false,
                start_scale:0,
                scale_space:60,
                end_scale:600,
                label:{color:'#d3d4f0',fontsize:11,fontweight:600},
                listeners:{
                    parseText:function(t,x,y){
                        return {text:t+'万'}
                    }
                }
            }],
            width:"90%",
            height:260
        }
    });

    //利用自定义组件构造左侧说明文本
    chart.plugin(new iChart.Custom({
        drawFn:function(){
            //计算位置
            var coo = chart.getCoordinate(),
                x = coo.get('originx'),
                y = coo.get('originy'),
                h = coo.height;
            //在左下侧的位置，渲染一个单位的文字
            chart.target.textAlign('start')
                .textBaseline('bottom')
                .textFont('600 11px Verdana')
                .fillText('',x-20,y+h+30,false,'#a8b2d7');

        }
    }));

    chart.draw();
});
