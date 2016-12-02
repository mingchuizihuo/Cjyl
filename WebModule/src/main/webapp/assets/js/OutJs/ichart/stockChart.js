/**
 * Created by horo on 2016/11/25.
 */

/*弹出层 库存容量折线表*/
$(function(){
    var data = [
        {name : '蔬菜生鲜',value : 40.0,color:'#4572a7'},
        {name : '水果饮料',value : 27.1,color:'#aa4643'},
        {name : '员工服装',value : 13.8,color:'#89a54e'},
        {name : '老人服装',value : 11.6,color:'#80699b'},
        {name : '活动服装',value : 1.4,color:'#92a8cd'},
        {name : '娱乐器材',value : 1.2,color:'#db843d'},
        {name : '其他',value : 4.9,color:'#a47d7c'}
    ];

    var chart = new iChart.Pie2D({
        render : 'canvasDiv3',
        data: data,
        title : {
            text : '2016年第四季度仓库存储量',
            color : '#3e576f'
        },
        footnote : {
            text : '',
            color : '#486c8f',
            fontsize : 11,
            padding : '0 38'
        },
        border:0,
        background_color:null,
        sub_option : {
            label : {
                background_color:null,
                sign:false,//设置禁用label的小图标
                padding:'0 4',
                border:{
                    enable:false,
                    color:'#666666'
                },
                fontsize:11,
                fontweight:600,
                color : '#4572a7'
            },
            border : {
                width : 2,
                color : '#ffffff'
            }
        },
        shadow : true,
        shadow_blur : 6,
        shadow_color : '#aaaaaa',
        shadow_offsetx : 0,
        shadow_offsety : 0,
        offsetx:-60,//设置向x轴负方向偏移位置60px
        offset_angle:-120,//逆时针偏移120度
        showpercent:true,
        decimalsnum:2,
        width : 900,
        height : 400,
        radius:120
    });
    //利用自定义组件构造右侧说明文本
    chart.plugin(new iChart.Custom({
        drawFn:function(){
            //计算位置
            var y = chart.get('originy'),
                w = chart.get('width');

            //在右侧的位置，渲染说明文字
            chart.target.textAlign('start')
                .textBaseline('middle')
                .textFont('600 16px Verdana')
                .fillText('',w-220,y-40,false,'#be5985',false,20);
        }
    }));

    chart.draw();
});


/*折线*/
$(function(){
    var pv=[],ip=[],t;
    for(var i=0;i<61;i++){
        t = Math.floor(Math.random()*(30+((i%12)*5)))+10;
        pv.push(t);
        t = Math.floor(t*0.5);
        t = t-Math.floor((Math.random()*t)/2);
        ip.push(t);
    }

    var data = [
        {
            name : '食物',
            value:pv,
            color:'#0d8ecf',
            line_width:2
        },
        {
            name : '日用品',
            value:ip,
            color:'#ef7707',
            line_width:2
        },

    ];

    var labels = ["2016-07","2016-08","2016-09","2016-10","2016-11","2016-12"];
    var line = new iChart.LineBasic2D({
        render : 'canvasDiv4',
        data: data,
        align:'center',
        title : {
            text:'养老院日常物资消耗',
            color:'#3e576f',
        },
        subtitle : '',
        footnote : '',
        width : 800,
        height : 400,
        tip:{
            enable:true,
            shadow:true
        },
        label:{
            color:'#3e576f'

        },
        border:0,
        background_color:null,
        legend : {
            enable : true,
            row:1,//设置在一行上显示，与column配合使用
            column : 'max',
            valign:'top',
            sign:'bar',
            background_color:null,//设置透明背景
            offsetx:-80,//设置x轴偏移，满足位置需要
            border : true,
            color:'#3e576f'
        },
        crosshair:{
            enable:true,
            line_color:'#62bce9'
        },
        sub_option : {
            label:false,
            point_hollow : false
        },
        coordinate:{
            width:700,
            height:300,
            axis:{
                color:'#ffffff',
                width:[0,0,2,2]
            },
            grids:{
                vertical:{
                    way:'share_alike',
                    value:5
                }
            },
            scale:[{
                position:'left',
                start_scale:0,
                end_scale:100,
                scale_space:10,
                scale_size:2,
                scale_color:'#fff',
                label:{
                    color:'#3e576f'

                }
            },{
                position:'bottom',
                label:{
                    color:'#3e576f'

                },
                labels:labels
            }]
        }
    });

    //开始画图
    line.draw();
});

