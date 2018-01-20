var fakeData = [
  ["Twitter_ID","UserName","Reply", "Share", "Like"],
  ["evannex_com","EVANNEX for Tesla",461,6381,15366],
  ["TeslaModel3News","Tesla Model 3 News",422,2878,9876],
  ["Model3Owners","Model 3 Owners Club",823,1773,9571],
  ["TeslaPittsburgh","Tesla Pittsburgh",190,635,2118],
  ["XingleiShen","Xinglei Shen",108,585,2223],
  ["techeblog","TechEBlog",0,796,759],
  ["TeslaClubUK","Tesla Owners Club UK",159,611,777],
  ["omg_tesla","Omg_Tesla",97,306,1128],
  ["JimHarris","Jim Harris",35,644,764],
  ["jassummers","Jas Summers",75,220,800],
  ["ubuygas","UBUYGAS",34,347,510],
  ["ElectriCarsES","ElectriCars",70,28,714],
  ["bmwblog","BMWBLOG",24,188,578],
  ["plugshare","PlugShare",26,152,501],
  ["Jasonrbirchall","Jason R Birchall",170,96,332],
  ["AmazingChevVolt","Thomas J. Thias",23,247,287],
  ["kirillklip","Kirill Klip",9,387,153],
  ["electro_mov","electromovilidad",26,120,398],
  ["therealautoblog","Autoblog",21,175,337],
  ["droeder72","Dirk RĂśder",44,86,352],
  ["JWinstonTS","TS Julia Winston",18,54,387],
  ["TheTeslaModelS","TeslaModelS",4,185,249],
  ["ChargeMap","ChargeMap",18,171,216],
  ["crociangelini","Elisabetta",0,182,210],
  ["PaulHolzapfel","Paul Holzapfel",133,66,168],
  ["leahyparks","Leah Y Parks",6,187,149],
  ["melindavermeer","Melinda",48,48,224],
  ["TamaraMcCleary","Tamara McCleary",0,152,140],
  ["dlacalle_IA","Daniel Lacalle",18,90,162],
  ["MITJAKE","Jake Chen",5,57,202],
  ["yicaichina","Yicai Global çŹŹä¸č´˘çť",0,152,110],
  ["IEEEorg","IEEE",0,85,170],
  ["AaronEichinger","Aaron Eichinger",10,20,222],
  ["emicimaz","Emiliano Mazzetto",12,12,228],
  ["JasonHartmanROI","Jason Hartman",45,55,150],
  ["GerberKawasaki","Ross Gerber",20,33,192],
  ["MotorTrend","Motor Trend",7,35,203],
  ["c4chaos","~C4Chaos",21,22,188],
  ["raphaelsebban","Raphael Sebban",0,192,36],
  ["PluginCarsNews","PluginCars",0,98,126],
  ["StrategicTechVC","Tech Investor",5,34,169],
  ["eshellshear","Evan Shellshear",14,72,121],
  ["TeslaBargain","Tesla Bargain",41,66,98],
  ["TeslaModelX","Tesla Model X FAN",0,54,136],
  ["Rexyyy_","Kim",12,34,137],
  ["EverCharge","EverCharge",0,89,81],
  ["slcuervo","Saul Lopez âĄď¸đ",7,28,127],
  ["getmeontop","GetMeOnTop",0,64,88],
  ["twandroid","FrAndroid đąâď¸đĽđŽđ§",6,32,108],
  ["Nikstrade","Nikstrade OĂ",16,80,48],
  ["findit_social","findit_social",0,143,0],
  ["evholes","#EVHOLE",14,40,88],
  ["foroelectricos","ForoCochesElĂŠctricos",14,28,98],
  ["guidaautonoma","guidaautonoma",1,77,59],
  ["juhani","Juhani Polkko đŤđŽ",30,0,105],
  ["baddriversofCA","Nor-Cal Dashcam",0,34,96],
  ["teslamagazincz","TeslaMagazin.cz",0,65,65],
  ["EctoFlapjack","C.",0,0,126],
  ["RealOTCStockGuy","TheRealOTCStockGuy",0,42,84],
  ["globedrive","Globe Drive",12,60,49],
  ["AllinOneTesla","AllinOne|Tesla",0,32,88],
  ["FormulaeTesla","Tesla_FormulaE",0,34,85],
  ["beebomco","Beebom",8,28,82],
  ["ChargePointnet","ChargePoint",4,40,72],
  ["Breezcar_FR","Breezcar",0,55,59],
  ["evomagazine","evo Magazine",0,20,90],
  ["foxlider1","#foxlider1",0,50,60],
  ["jasononsax","Jason Whitmore",22,0,88],
  ["countryviewkris","Kris Currie",0,18,90],
  ["Mitch_Fox","Mitch Fox",0,36,72],
  ["ButenegroEV","butenegro",10,26,71],
  ["JJODRY","Julien JODRY",0,35,71],
  ["niallsharkey","niall sharkey",0,0,100],
  ["jenbeightley","Jennifer Beightley",21,7,70],
  ["WaitingForTesla","Waiting For Tesla",25,7,65],
  ["NoShadyLady","Ellen Dux",0,32,64],
  ["amtvmedia","Christopher Greene",0,24,72],
  ["JSuaveFrancois","J.Francois",16,0,80],
  ["BBCStreeter","Susannah Streeter",10,40,44],
  ["ComOdity_Man","ComOdity_Money_Man",0,36,54],
  ["automobilemag","Automobile Magazine",0,32,56],
  ["ID_R_McGregor","Robert McGregor",3,30,54],
  ["illestJTT","john tran",9,18,57],
  ["TeslaMS60","Tesla Model S60",1,21,60],
  ["Inta_Tain","I promote Artistđ¤",0,52,26],
  ["invest2success","Invest2Success.com",0,26,52],
  ["PeterNemere","Peter Nemere",11,0,66],
  ["AntilaHeli","Heli Antila",4,0,72],
  ["alxartdesign","Alex Jaeger",11,3,62],
  ["James_Galvin","James Galvin",0,13,60],
  ["republic","Republic",0,21,52],
  ["breastcar","BreastCar TESLA",0,23,50],
  ["TeslaSAfrica","Tesla South Africa",36,9,27],
  ["teslaology","Teslaology",0,16,56],
  ["ElectricCarNews","Morey Schapira",0,23,48],
  ["Kristof_1978","Kristof Lambrecht",22,0,49],
  ["TradeAlvexo","Alvexo Trade",6,18,45],
  ["TeslaOwnerClub","Everything Tesla",0,7,60]];
var myChart = echarts.init(document.getElementById('main'));

        

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

var option = {
    title:{
        text: 'active users',
        left:'right',
    },
    legend: {},
    tooltip: {},
    dataset: {
        source: fakeData,
    },
    
    dataZoom:{
        type: 'slider',
        orient: 'vertical',
        start: 100,
        end: 95,
        backgroundColor: 'lightgrey',
        zoomLock: true,
        showDataShadow: false,
        showDetail: false,
        filterMode:'empty',
        
    },
    // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
    xAxis: {
       silent:false,
       name: 'Values',
       nameLocation: 'center',
    },
    // 声明一个 Y 轴，数值轴。
    yAxis: {
        type: 'category',
        offSet:20,
        nameTextStyle:{},
        silent:false,
        name: 'User Name',
        nameLocation: 'end',
    },
    // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
    //["Twitter_ID","UserName","Reply", "Share", "Like"]
    series: [
        
        {
            type: 'bar',
            stack: 'sum',
            name:'share',
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
            name:'like',
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
            name:'reply',
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
myChart.setOption(option);

myChart.on('click', function(params){
    console.log(params.data);
    console.log(params.dataIndex);
})
//descending
document.querySelector('#descending4').addEventListener('click',function(){
    fakeData.sort(function(a,b){
        var sumA = a[2] + a[3] + a[4];
        var sumB = b[2] + b[3] + b[4];
        if(sumA < sumB){
            return -1;
        }
        if(sumA > sumB){
            return 1;
        }
        return 0;
    });
    myChart.setOption(option);
    console.log(fakeData);
});
//ascending
document.querySelector('#ascending4').addEventListener('click',function(){
    fakeData.sort(function(a,b){
      var sumA = a[2] + a[3] + a[4];
      var sumB = b[2] + b[3] + b[4];
        if(sumA > sumB){
            return -1;
        }
        if(sumA < sumB){
            return 1;
        }
        return 0;
    });
    myChart.setOption(option);
    console.log(fakeData);
})


