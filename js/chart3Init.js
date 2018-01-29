var fakeData3 = [
    ["Twitter_ID", "UserName", "Share", "Like", "Reply"]
    ,["evannex_com", "EVANNEX for Tesla", 6381, 15366, 461]
    ,["TeslaModel3News", "Tesla Model 3 News", 2878, 9876, 422]
    ,["Model3Owners", "Model 3 Owners Club", 1773, 9571, 823]
    ,["TeslaPittsburgh", "Tesla Pittsburgh", 635, 2118, 190]
    ,["XingleiShen", "Xinglei Shen", 585, 2223, 108]
    ,["techeblog", "TechEBlog", 796, 759, 0]
    ,["TeslaClubUK", "Tesla Owners Club UK", 611, 777, 159]
    ,["omg_tesla", "Omg_Tesla", 306, 1128, 97]
    ,["JimHarris", "Jim Harris", 644, 764, 35]
    ,["jassummers", "Jas Summers", 220, 800, 75]
    ,["ubuygas", "UBUYGAS", 347, 510, 34]
    ,["ElectriCarsES", "ElectriCars", 28, 714, 70]
    ,["bmwblog", "BMWBLOG", 188, 578, 24]
    ,["plugshare", "PlugShare", 152, 501, 26]
    ,["Jasonrbirchall", "Jason R Birchall", 96, 332, 170]
    ,["AmazingChevVolt", "Thomas J. Thias", 247, 287, 23]
    ,["kirillklip", "Kirill Klip", 387, 153, 9]
    ,["electro_mov", "electromovilidad", 120, 398, 26]
    ,["therealautoblog", "Autoblog", 175, 337, 21]
    ,["droeder72", "Dirk Röder", 86, 352, 44]
    ,["JWinstonTS", "TS Julia Winston", 54, 387, 18]
    ,["TheTeslaModelS", "TeslaModelS", 185, 249, 4]
    ,["ChargeMap", "ChargeMap", 171, 216, 18]
    ,["crociangelini", "Elisabetta", 182, 210, 0]
    ,["PaulHolzapfel", "Paul Holzapfel", 66, 168, 133]
    ,["leahyparks", "Leah Y Parks", 187, 149, 6]
    ,["melindavermeer", "Melinda", 48, 224, 48]
    ,["TamaraMcCleary", "Tamara McCleary", 152, 140, 0]
    ,["dlacalle_IA", "Daniel Lacalle", 90, 162, 18]
    ,["MITJAKE", "Jake Chen", 57, 202, 5]
    ,["yicaichina", "Yicai Global 第一财经", 152, 110, 0]
    ,["IEEEorg", "IEEE", 85, 170, 0]
    ,["AaronEichinger", "Aaron Eichinger", 20, 222, 10]
    ,["emicimaz", "Emiliano Mazzetto", 12, 228, 12]
    ,["JasonHartmanROI", "Jason Hartman", 55, 150, 45]
    ,["GerberKawasaki", "Ross Gerber", 33, 192, 20]
    ,["MotorTrend", "Motor Trend", 35, 203, 7]
    ,["c4chaos", "~C4Chaos", 22, 188, 21]
    ,["raphaelsebban", "Raphael Sebban", 192, 36, 0]
    ,["PluginCarsNews", "PluginCars", 98, 126, 0]
    ,["StrategicTechVC", "Tech Investor", 34, 169, 5]
    ,["eshellshear", "Evan Shellshear", 72, 121, 14]
    ,["TeslaBargain", "Tesla Bargain", 66, 98, 41]
    ,["TeslaModelX", "Tesla Model X FAN", 54, 136, 0]
    ,["Rexyyy_", "Kim", 34, 137, 12]
];
  
var myChart3 = echarts.init(document.getElementById('graph3'));

        

// var source = data.map(function(item, index) {
    
//     if (item["回复"] > 100 && item["转发"] && item["点赞"]) {
//         var newItem = [];
//         newItem.push(item["用户名"]);
//         newItem.push(item["回复"]);
//         newItem.push(item["转发"]);
//         newItem.push(item["点赞"]);
//         count++; 
//         return newItem;
//     }


// });
// var source = fakeData.filter(function(item) {
//     // if (count < 5) {
//     if (count < 5 && item["回复"] < 10 && item["转发"] > 10 && item["点赞"] > 10) {
//         // console.log(typeof item["回复"])
//         count++; 
//         return true;
//     } else {
//         return false;
//     }
// })


// var datag4 = fakeData.map(item=>{
//     var newItem = [];
//     newItem.push(item['正文']);
//     newItem.push(item["转发"]);
//     newItem.push(item["点赞"]);
//     newItem.push(item["回复"]);
//     return newItem;
// });
// // console.log(fakeData[0]);
// // console.log(datag4[0]);


// //descending order
// datag4.sort(function(a,b){
//     var sumA = a[1] + a[2] + a[3];
//     var sumB = b[1] + b[2] + b[3];
//     if(sumA < sumB){
//         return -1;
//     }
//     if(sumA > sumB){
//         return 1;
//     }
//     return 0;
// });

// console.log(datag4);

var option3Init = {
    title:{
        text: 'active users',
        left:'right',
    },
    //legend: {},
    brush:{
        toolbox:['rect']
    },
    toolbox:{
        left:'center',
        feature:{
            dataView:{}
        },
    },
    tooltip: {
        //trigger:'axis',
        formatter:function(params){
            var seriesIdxToDataIdx = [4,2,3];
            var userName = 'UserName: '+ params.data[1] + '<br/>';
            var id = 'User Id: ' + params.data[0] + '<br/>';
            var value = params.seriesName + ': ' + params.data[seriesIdxToDataIdx[params.seriesIndex]] + '<br/>';
            var total = 'Total: '+ (params.data[2]+ params.data[3]+ params.data[4]);
            var result = userName + id + value + total;
            return result;
            
        },
    },
    // dataset: {
    //     source: fakeData3,
    // },
    grid: {
        left: '1%',
        
        containLabel: true
    },
    
    dataZoom:{
        type: 'slider',
        orient: 'vertical',
        start: 100,
        end: 99.6,
        backgroundColor: 'lightgrey',
        zoomLock: true,
        showDataShadow: false,
        showDetail: false,
        filterMode:'empty',
        realtime:false,
    },
    // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
    xAxis: {
       silent:false,
       name: 'Values',
       nameLocation: 'center',
       triggerEvent:true,
       nameGap: 30,
    },
    // 声明一个 Y 轴，数值轴。
    yAxis: {
        type: 'category',
        offSet:20,
        nameTextStyle:{},
        silent:false,
        name: 'User Name',
        nameLocation: 'end',
        triggerEvent:true,
    },
    // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
    //["Twitter_ID","UserName","Reply", "Share", "Like"]
    series: [
        
        {
            type: 'bar',
            stack: 'sum',
            name:'Reply',
            color:'darkblue',
            label: {
                show: true,
                color: 'black',
                
            },
            encode:{
              y: 'UserName',
              x: 'Reply',
            }
        },
        {
            type: 'bar',
            stack: 'sum',
            name:'Share',
            color:'orange',
            label: {
                show: true,
                color: 'black',
            },
            encode:{
              y: 'UserName',
              x: 'Share',
            }
        },
        {
            type: 'bar',
            stack: 'sum',
            name:'Like',
            color: 'green',
            barWidth: 15,
            barGap: '50%',
            label: {
                show: true,
                color: 'black',

            },
            encode:{
              y: 'UserName',
              x: 'Like',
            }
        },
    ]
}

// 使用刚指定的配置项和数据显示图表。
myChart3.setOption(option3Init);
myChart3.showLoading();

myChart3.on('click', function(params){
    console.log(params);
    console.log(params.data);
    console.log(params.dataIndex);
})


