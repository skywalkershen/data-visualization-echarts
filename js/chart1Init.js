var fakeData1 = [
    ['Time', 'Total']
    ,['2017-08-10',45]
    ,['2017-08-09',425]
    ,['2017-08-08',420]
    ,['2017-08-07',1]
    ,['2017-08-06',12]
    ,['2017-06-05',2]
    ,['2017-06-04',3]
    ,['2017-06-03',53]
    ,['2017-06-02',45]
    ,['2017-06-01',33]
    ,['2016-08-10',563]
    ,['2016-08-09',35]
    ,['2016-08-08',35]
    ,['2016-08-07',27]
    ,['2016-08-06',336]
    ,['2016-06-05',527]
    ,['2016-06-04',25]
    ,['2016-06-03',525]
    ,['2016-06-02',25]
    ,['2016-06-01',35]
    ,['2015-08-10',53]
    ,['2015-08-09',53]
    ,['2015-08-08',02]
    ,['2015-08-07',20]
    ,['2015-08-06',35]
    ,['2015-06-05',52]
    ,['2015-06-04',22]
    ,['2015-06-03',587]
    ,['2015-06-02',24]
    ,['2015-06-01',52]
    ,['2014-08-10',35]
    ,['2014-08-09',28]
    ,['2014-08-08',423]
    ,['2014-08-07',24]
    ,['2014-08-06',28]
    ,['2014-06-05',25]
    ,['2014-06-04',27]
    ,['2014-06-03',542]
    ,['2014-06-02',54]
    ,['2014-06-01',53]
];
var myChart1 = echarts.init(document.getElementById('graph1'));

        


var option1Init = {
    title:{
        text: 'Total Activities by ' + scaleStr[scaleg1],
        left:'left',
    },
    
    tooltip: {
        trigger:'axis',
        formatter:function(params){
            var time = params[0].data[0];
            var total = params[0].data[1];
            var showTime = time.getFullYear() + '/' + (time.getMonth() +1) + '/' + time.getDate();
            var period = time.getHours() / 12 >= 1? 'pm' : 'am';
            var hour = time.getHours() % 12 + period;
            showTime = scaleg1 === scaleFunc1.length - 1? showTime + ' '+ hour: showTime;
            var result = 'Time :' + showTime + '<br/>Total: '+ total;
            return result;
        }
    },
    // dataset: {
    //     source: fakeData1,
    // },
    //for gradient
    // visualMap: {
    //     show: false,
    //     type: 'continuous',
    //     //seriesIndex: 0,
    //     dimension:1,
    //     min: 0,
    //     max: 400
    // },
    
    // dataZoom:{
    //     type: 'slider',
    //     orient: 'vertical',
    //     start: 100,
    //     end: 95,
    //     backgroundColor: 'lightgrey',
    //     zoomLock: true,
    //     showDataShadow: false,
    //     showDetail: false,
    //     filterMode:'empty',
        
    // },
    // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
    //["Time","Twitter_ID","UserName","Post_Content","Reply", "Share", "Like"],
    xAxis: {
       silent:false,
       name: 'Time',
       nameLocation: 'center',
       nameGap: 30,
       type: 'category',
       triggerEvent:true,
       axisLabel:{
        formatter:function(param){
            var year = param.getFullYear();
            var month = param.getMonth() + 1;
            return String(year) + '/' + String(month);
        }
       },
    },
    // 声明一个 Y 轴，数值轴。
    yAxis: {
        
        nameTextStyle:{},
        silent:false,
        name: 'Post_Content',
        nameLocation: 'end',
        triggerEvent:true,
    },
    // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
    //["Twitter_ID","UserName","Reply", "Share", "Like"]
    series: [
        
        {
            type: 'line',
            name:'Sum',
            
            encode:{
              y: "Total",
              x: 'Time',
            }
        },
        
    ]
}

// 使用刚指定的配置项和数据显示图表。
myChart1.setOption(option1Init);
myChart1.showLoading();

myChart1.on('click', function(params){
    console.log(params);
})



/*

data = [['Time','Total'],["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60]];


option = {

    // Make gradient line here
    // visualMap: [{
    //     show: false,
    //     type: 'continuous',
    //     seriesIndex: 0,
    //     min: 0,
    //     max: 400
    // }],
    dataset:{
        source:data,
    },

    title: [{
        left: 'center',
        text: 'Gradient along the y axis'
    }],
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [{
        type:'category',
    }, ],
    yAxis: [{
        splitLine: {show: false}
    },],
    
    series: [{
        type: 'line',
        showSymbol: false,
        encode:{
            x:'Time',
            y:'Total'
        }
    }, ]
};
*/ 