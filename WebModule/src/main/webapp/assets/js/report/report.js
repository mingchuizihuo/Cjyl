/**
 * Created by Administrator on 2016/12/9.
 */
var url = domainUrl + "/serve/older/getIntoInfo";
//柱状图
$(function () {
    var getData = {};
    getAjax(url, false, getData, function (json) {
        var num  = json.aData.olderWeekIntoVOS.length;
        var j = '';
        var title = [];
        var manData = [];
        var girlData = [];
        for(var i = 0; i < num ; i++) {
            j  = json.aData.olderWeekIntoVOS[i];
            title[i] =  '' + (i + 1) + '月';
            manData[i] = ''+j.manNum+'';
            girlData[i] = ''+j.girlNum+'';
        }
        var data = [
            {
                name: '男士',
                value: manData,
                color: '#de9972'
            },
            {
                name: '女士',
                value: girlData,
                color: '#28847f'
            }

        ];
        var chart = new iChart.ColumnMulti3D({
            render: 'canvasDiv',
            data: data,
            // labels: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
            labels:title,
            title: {
                text: '老人月度欠费报表',
                color: '#ffffff'
            },
            border: false,
            animation: true,//开启过渡动画
            animation_duration: 800,//800ms完成动画
            width: 700,
            height: 350,
            background_color: 'rgba(0,0,0,0)',
            legend: {
                enable: false,
                background_color: null,
                align: 'center',
                valign: 'bottom',
                row: 1,
                offsety: 20,
                column: 'max',
                color: "#ffffff",
                border: {
                    enable: false
                }
            },
            column_width: 8,//柱形宽度
            zScale: 8,//z轴深度倍数
            xAngle: 50,
            bottom_scale: 1.1,
            label: {
                color: '#ffffff'
            },
            sub_option: {
                label: false
            },
            tip: {
                enable: true
            },
            text_space: 16,//坐标系下方的label距离坐标系的距离。
            coordinate: {
                background_color: 'rgba(0,0,0,0)',
                grid_color: '#ffffff',
                color_factor: 0,
                board_deep: 10,
                offsety: -10,
                title: {color: '#ffffff'},
                pedestal_height: 10,
                left_board: false,//取消左侧面板
                width: 620,
                height: 240,
                scale: [{
                    position: 'left',
                    start_scale: 0,
                    end_scale: 10,
                    scale_space: 1,
                    scale_enable: false,
                    label: {
                        color: '#ffffff'
                    }
                }]
            }
        });

        //利用自定义组件构造左侧说明文本
        chart.plugin(new iChart.Custom({
            drawFn: function () {
                //计算位置
                var coo = chart.getCoordinate(),
                    x = coo.get('originx'),
                    y = coo.get('originy');
                //在左上侧的位置，渲染一个单位的文字
                chart.target.textAlign('start')
                    .textBaseline('bottom')
                    .textFont('600 11px Verdana')
                    .fillText('人数（位）', x - 40, y - 28, false, '#ffffff');
            }
        }));

        chart.draw();
    })
});


//饼状图
$(function () {
    var getData = {};
    getAjax(url, false, getData, function (json) {
        var data1 = [
            {name: "已入住（男）", value: json.aData.manNum, color: "#4572a7"},
            {name: "已入住（女）", value: json.aData.girlNum, color: "#f76b25"},
            {name: "未入住", value: json.aData.beds, color: "#31A09C"},
        ];
        var chart = iChart.create({
            render: "canvasDiv1",
            data: data1,//绑定数据
            width: 700,
            height: 350,
            background_color: 'rgba(0,0,0,0)',
            gradient: false,
            color_factor: 0,
            border: {
                color: "BCBCBC",
                width: 0
            },
            animation: true,//开启过渡动画
            animation_duration: 800,//800ms完成动画
            align: "center",
            offsetx: 0,
            offsety: 0,
            sub_option: {
                border: {
                    color: "#BCBCBC",
                    width: 1
                },
                label: {
                    fontweight: 500,
                    fontsize: 11,
                    color: "#4572a7",
                    sign: "square",
                    sign_size: 12,
                    border: {
                        color: "#BCBCBC",
                        width: 1
                    },
                    background_color: "#fefefe"
                }
            },
            shadow: true,
            shadow_color: "#666666",
            shadow_blur: 2,
            showpercent: false,
            column_width: "70%",
            bar_height: "70%",
            radius: "90%",
            title: {
                text: "入住老人比率",
                color: "#ffffff",
                fontsize: 20,
                font: "微软雅黑",
                textAlign: "center",
                height: 30,
                offsetx: 0,
                offsety: 0
            },
            subtitle: {
                text: "",
                color: "#111111",
                fontsize: 16,
                font: "微软雅黑",
                textAlign: "center",
                height: 20,
                offsetx: 0,
                offsety: 0
            },
            footnote: {
                text: "",
                color: "#111111",
                fontsize: 12,
                font: "微软雅黑",
                textAlign: "right",
                height: 20,
                offsetx: 0,
                offsety: 0
            },
            legend: {
                enable: true,
                background_color: "#fefefe",
                color: "#333333",
                fontsize: 12,
                border: {
                    color: "#BCBCBC",
                    width: 1
                },
                column: 1,
                align: "right",
                valign: "center",
                offsetx: 0,
                offsety: -70
            },
            coordinate: {
                width: "85%",
                height: "84%",
                background_color: "#ffffff",
                axis: {
                    color: "#a5acb8",
                    width: [1, "", 1, ""]
                },
                grid_color: "#d9d9d9",
                label: {
                    fontweight: 500,
                    color: "#666666",
                    fontsize: 11
                }
            },
            label: {
                fontweight: 500,
                color: "#666666",
                fontsize: 11
            },
            type: "pie2d",

        });
        chart.draw();
    })
});


// 条形图

$(function(){
    var data = [
        {name : '特级护理',value : 10,color:'#a5c2d5'},
        {name : '一级护理',value : 20,color:'#cbab4f'},
        {name : '二级护理',value : 30,color:'#76a871'},
        {name : '基础护理',value : 20,color:'#9f7961'},
    ];
    new iChart.Bar2D({
        render : 'canvasDiv2',
        data: data,
        title: {
            text: '老人护理级别比例',
            color: '#ffffff'
        },
        border: {
            color: "BCBCBC",
            width: 0
        },
        label: {
            color: '#ffffff'
        },
        animation: true,//开启过渡动画
        animation_duration: 800,//800ms完成动画
        background_color: 'rgba(0,0,0,0)',
        showpercent:true,
        decimalsnum:2,
        width : 700,
        height : 320,
        coordinate:{
            title: {color: '#ffffff'},
            scale:[{
                label: {
                    color: '#ffffff'
                },
                position:'bottom',
                start_scale:0,
                end_scale:40,
                scale_space:8,
                listeners:{
                    parseText:function(t,x,y){
                        return {text:t+""}
                    }
                }
            }]
        }
    }).draw();
});
