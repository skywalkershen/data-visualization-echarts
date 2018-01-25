var fakeData2 = [
    ['Time', 'Share','Like','Reply']
    ,['2017-08-10',436,45,45]
    ,['2017-08-09',46,45,425]
    ,['2017-08-08',36,45,420]
    ,['2017-08-07',136,15,13]
    ,['2017-08-06',36,15,12]
    ,['2017-06-05',26,5,23]
    ,['2017-06-04',36,35,35]
    ,['2017-06-03',536,55,53]
    ,['2017-06-02',46,45,45]
    ,['2017-06-01',336,35,33]
    ,['2016-08-10',6,55,563]
    ,['2016-08-09',336,35,35]
    ,['2016-08-07',26,25,27]
    ,['2016-08-06',6,35,336]
    ,['2016-06-05',56,55,527]
    ,['2016-06-04',36,25,25]
    ,['2016-06-03',36,55,525]
    ,['2016-06-02',236,25,25]
    ,['2016-06-01',36,35,35]
    ,['2015-08-10',56,55,53]
    ,['2015-08-09',36,55,53]
    ,['2015-08-08',036,05,02]
    ,['2015-08-07',26,35,35]
    ,['2015-06-05',536,55,52]
    ,['2015-06-04',236,235,22]
    ,['2015-06-03',56,55,587]
    ,['2015-06-02',26,25,24]
    ,['2015-06-01',56,55,52]
    ,['2014-08-10',36,35,35]
    ,['2014-08-09',26,25,28]
    ,['2014-08-08',36,454,423]
    ,['2014-08-07',236,25,24]
    ,['2014-08-06',26,252,28]
    ,['2014-06-05',236,255,25]
    ,['2014-06-04',26,25,27]
    ,['2014-06-03',536,55,542]
    ,['2014-06-02',56,55,54]
    ,['2014-06-01',56,55,53]
];
var myChart2 = echarts.init(document.getElementById('graph2'));


var option2Init = {
    
       // Make gradient line here
        // visualMap: [{
        //     show: false,
        //     type: 'continuous',
        //     seriesIndex: 0,
        //     min: 0,
        //     max: 400
        // }, {
        //     show: false,
        //     type: 'continuous',
        //     seriesIndex: 1,
        //     dimension: 0,
        //     min: 0,
        //     max: 400
        // }, {
        //     show: false,
        //     type: 'continuous',
        //     seriesIndex: 2,
        //     dimension: 0,
        //     min: 0,
        //     max: 400
        // }],
        dataset:{
            source:fakeData2,
        },
    
        title: [{
            left: 'left',
            text: 'Share'
        }, {
            bottom: '60%',
            left: 'left',
            text: 'Like'
        } ,{
            bottom: '30%',
            left: 'left',
            text: 'Reply'
        }],
        tooltip: {
            trigger: 'axis'
        },
        xAxis: [{
            type:'category',
        }, {
            type:'category',
            gridIndex: 1
        }, {
            type:'category',
            gridIndex: 2
        }],
        yAxis: [{
            splitLine: {show: false}
        }, {
            splitLine: {show: false},
            gridIndex: 1
        }, {
            splitLine: {show: false},
            gridIndex: 2
        }],
        grid: [{
            bottom: '70%',
                    height:'25%'
        }, {
            bottom: '40%',
                    height:'25%'
        },{
            bottom: '10%',
            height:'25%'
        }],
        series: [{
            type: 'line',
            encode:{
                x:'Time',
                y:'Share'
            }
        }, {
            type: 'line',
            encode:{
                x:'Time',
                y:'Like'
            },
            xAxisIndex: 1,
            yAxisIndex: 1
        }, {
            type: 'line',
            encode:{
                x:'Time',
                y:'Reply'
            },
            xAxisIndex: 2,
            yAxisIndex: 2
        },]
    };
        





// 使用刚指定的配置项和数据显示图表。
myChart2.setOption(option2Init);

myChart2.on('click', function(params){
    console.log(params.data);
    console.log(params.dataIndex);
})
