var rawDataURL = "https://raw.githubusercontent.com/skywalkershen/data-visualization-echarts/6b1fc9600c8b86123c65dd76d28368320b120476/TeslaModel3.csv";

var rawData = [];
var dataIn = [];
//data for the four charts
var datag3 = [];
var datag4 = [];
var dataLineChart = [];
//data scaled according to drill up/down, used for display
var datag1show = [];
var datag2show = [];
var option1 = {};
var option2 = {};
var option3 = {};
var option4 = {};


//for sorted array of objs
function dedup(inputArray){
    var lastElem = '';
    var filtered = inputArray.filter((elem, index)=>{
        if(index === 0){
            lastElem = elem.join();
            return true;
        }
        if(lastElem !== elem.join()){
            lastElem = elem.join();
            return true;
        }else{
            return false;
        }
        
        
    });
    return filtered;

}


//transfer the input chinese characters into Eng
//transfer input string to number
//change order of 'Reply', 'Share', 'Like' to 'Share', 'Like', 'Reply'
//sort time to ascending order
function rawDataStringToNum(data){
    var heading = [['Time', 'Twitter_ID', 'UserName', 'Post_Content', 'Share', 'Like', 'Reply']];
    var dataCopy = data.slice(1);
    dataCopy.forEach((item)=>{
      var temp = parseInt(item[4]);
       item[4] = parseInt(item[5]);
       item[5] = parseInt(item[6]);
       item[6] = temp;
    });

    dataCopy.sort(function(a,b){
        var timea = Date.parse(a[0])
        var timeb = Date.parse(b[0])
        if(timea < timeb){
            return -1;
        }else if(timea > timeb){
            return 1;
        }else return 0;
    });

    dataCopy = dedup(dataCopy);


     return heading.concat(dataCopy);
    // data = data.map(item=>{
    //     var newItem = [];
    //     for(i = 0; i < 4; i++){
    //         newItem.push(item[i]);
    //     }
    //     for(i = 4; i < 7; i++){
    //         newItem.push(parseInt(item[i]));
    //     }
    //     return newItem;
    // })
    // return heading.concat(data);
}




function dataInitG3(dataIn){
    var map = new Map();
    var dataCopy = JSON.parse(JSON.stringify(dataIn));
    //note: Time and Post deleted!!!
    var heading = [['Twitter_ID', 'UserName', 'Share', 'Like', 'Reply']];

    //Don't do inplace on dataIn, this is a reference, the change will have effect on the original data!!!
    dataCopy = dataCopy.slice(1);
    var result = [];
    //merge reply/share/like num with identical id into the 1st one
    dataCopy.forEach((item, idx) => {
        if(!map.has(item[1])){
            map.set(item[1], idx);
        }else{
            dataCopy[map.get(item[1])][4] += item[4];
            dataCopy[map.get(item[1])][5] += item[5];
            dataCopy[map.get(item[1])][6] += item[6];
        }       
    });
    map.forEach((idx)=>{
        var item = dataCopy[idx];
        result.push([item[1], item[2], item[4], item[5], item[6]]);
    })
    
    //sort to be descending
    //since combined twitts for same user, need to sort again
    result = result.sort(function(a,b){
        var sumA = a[2] + a[3] + a[4];
        var sumB = b[2] + b[3] + b[4];
        if(sumA > sumB){
            return 1;
        }else if(sumA < sumB){
            return -1;
        }else return 0;
    });


    return heading.concat(result);
    
}

//Just sort to descending
function dataInitG4(dataIn){
    //Deep copy, note the elements in array are objs, so dataIn.slice(0) will still match reference of new array's elements to original elements
    var dataCopy = JSON.parse(JSON.stringify(dataIn));
    var heading = [['Time', 'Twitter_ID', 'UserName', 'Post_Content', 'Share', 'Like', 'Reply']];
    var dataCopy = dataCopy.slice(1);
    
    //sort to be descending
    dataCopy = dataCopy.sort(function(a,b){
        var sumA = a[4] + a[5] + a[6];
        var sumB = b[4] + b[5] + b[6];
        if(sumA > sumB){
            return 1;
        }else if(sumA < sumB){
            return -1;
        }else return 0;
    });

    return heading.concat(dataCopy);
}

//var copy = JSON.parse(JSON.stringify(testData3));

//convert time to milliseconds, sort the seconds into ascending order(the 0th elem will be put to 0 index on x axis)
//only keep time, reply, share, like and add a field for total
//
function chartLineInit(dataIn){
    var dataCopy = JSON.parse(JSON.stringify(dataIn));
    var heading = [['Time', 'Reply', 'Share', 'Like', 'Total']];
    dataCopy = dataCopy.slice(1);
    dataCopy.forEach(element => {
        element[0] = Date.parse(element[0]);
        element[1] = element[4];
        element[2] = element[5];
        element[3] = element[6];
        element[4] = element[1] + element[2] + element[3];
        element.splice(5, 2);
    });
    // dataCopy = dataCopy.sort(function(a,b){
    //     if(a[0] < b[0]){
    //         return -1;
    //     }
    //     if(a[0] > b[0]){
    //         return 1;
    //     }
    //     return 0;
    // });

    return heading.concat(dataCopy);
}
//get csv data and parse into array of objs
// dataIn = d3.csv(rawDataURL, function(data){
//   dataIn = data;
//   console.log(arguments);
//   console.log('data.length: ' + dataIn.length);
// });

//get csv data and parse into array of arrays
d3.text(rawDataURL, function(data){
    rawData = d3.csvParseRows(data);
    //console.log(rawData.slice(0));
    // var temp = dataInitG4(rawData.slice(0,99));
    // console.log(temp);

    
    dataIn = rawDataStringToNum(rawData);
    //console.log(dataIn.slice(0,5));

    //descending sort for graph4
    datag4 = dataInitG4(dataIn);
    //console.log(datag4.slice(0, 5));

    datag3 = dataInitG3(dataIn);
     //console.log(datag3.slice(0,5));
    dataLineChart = chartLineInit(dataIn);
     
    datag1show = scaleFunc1[scaleg1](dataLineChart);
    datag2show = scaleFunc2[scaleg2](dataLineChart);
    

    //feeding data to charts

    option1 = {
        dataset:{
            source: datag1show,
        }
    }
    myChart1.hideLoading();
    myChart1.setOption(option1);

    option2 = {
        dataset:{
            source: datag2show,
        }
    }
    myChart2.hideLoading();
    myChart2.setOption(option2);

    option3 = {
        dataset:{
            source: datag3,
        }
    }
    myChart3.hideLoading();
    myChart3.setOption(option3);

    option4 = {
        dataset:{
            source: datag4,
        }
    }
    myChart4.hideLoading();
    myChart4.setOption(option4);

    
    $('#drillDown1').click(function(){
        if(scaleg1 < scaleFunc1.length - 1){
            if(scaleg1 > 0){
                $('#drillUp1').css('visibility', 'visible');
            }
            scaleg1++;
            datag1show = scaleFunc1[scaleg1](dataLineChart);
            option1 = {
                dataset:{
                    source:datag1show
                },
                title:{
                    text: 'Total Activities by ' + scaleStr[scaleg1],
                    left:'left',
                },
            }
            myChart1.setOption(option1);
            if(scaleg1 === scaleFunc1.length - 1){
                $('#drillDown1').css('visibility','hidden');
            }
        }
        
    });

    $('#drillUp1').click(function(){
        if(scaleg1 > 0){
            if(scaleg1 < scaleFunc1.length - 1){
                $('#drillDown1').css('visibility', 'visible');
            }
            scaleg1--;
            datag1show = scaleFunc1[scaleg1](dataLineChart);
            option1 = {
                dataset:{
                    source:datag1show
                },
                title:{
                    text: 'Total Activities by ' + scaleStr[scaleg1],
                    left:'left',
                },
            }
            myChart1.setOption(option1);
            if(scaleg1 === 0){
                $('#drillUp1').css('visibility','hidden');
            }
        }
    });
    
    $('#drillDown2').click(function(){
        if(scaleg2 < scaleFunc2.length - 1){
            if(scaleg2 > 0){
                $('#drillUp2').css('visibility', 'visible');
            }
            scaleg2++;
            datag2show = scaleFunc2[scaleg2](dataLineChart);
            option2 = {
                dataset:{
                    source:datag2show
                },
                title:{
                    text: 'Share, Like, Reply by ' + scaleStr[scaleg2],
                    left:'left',
                },
            }
            myChart2.setOption(option2);
            if(scaleg2 === scaleFunc2.length - 1){
                $('#drillDown2').css('visibility','hidden');
            }
        }
    });

    $('#drillUp2').click(function(){
        if(scaleg2 > 0){
            if(scaleg2 < scaleFunc2.length - 1){
                $('#drillDown2').css('visibility', 'visible');
            }
            scaleg2--;
            datag2show = scaleFunc2[scaleg2](dataLineChart);
            option2 = {
                dataset:{
                    source:datag2show
                },
                title:{
                    text: 'Share, Like, Reply by ' + scaleStr[scaleg2],
                    left:'left',
                },
            }
            myChart2.setOption(option2);
            if(scaleg2 === 0){
                $('#drillUp2').css('visibility','hidden');
            }
        }
    });

    //descending
$('#descending3').click(function(){
    var heading = [['Twitter_ID', 'UserName', 'Share', 'Like', 'Reply']];
    var data3 = datag3.slice(1);
    data3.sort(function(a,b){
        var sumA = a[2] + a[3] + a[4];
        var sumB = b[2] + b[3] + b[4];
        if(sumA < sumB){
            return -1;
        }else if(sumA > sumB){
            return 1;
        }else return 0;
    });
    datag3 = heading.concat(data3);
    option3 = {
        dataset:{
            source:datag3
        }
    }
    myChart3.setOption(option3);
});
     

        //ascending
$('#ascending3').click(function(){
    var heading = [['Twitter_ID', 'UserName', 'Share', 'Like', 'Reply']];
    var data3 = datag3.slice(1);
    data3.sort(function(a,b){
        var sumA = a[2] + a[3] + a[4];
        var sumB = b[2] + b[3] + b[4];
        if(sumA < sumB){
            return 1;
        }
        if(sumA > sumB){
            return -1;
        }
        return 0;
    });
    datag3 = heading.concat(data3);
    option3 = {
        dataset:{
            source:datag3
        }
    }
    myChart3.setOption(option3);
});

    //descending
    $('#descending4').click(function(){
        var heading = [['Time', 'Twitter_ID', 'UserName', 'Post_Content', 'Share', 'Like', 'Reply']];
        var data4 = datag4.slice(1);
        data4.sort(function(a,b){
            if(a[1] == 'JimHarris' && b[1] == "Model3Owners"){
                var breakpoint = 0;
            }
            var sumA = a[4] + a[5] + a[6];
            var sumB = b[4] + b[5] + b[6];
            if(sumA < sumB){
                return -1;
            }else if(sumA > sumB){
                return 1;
            }else return 0;
        });
        datag4 = heading.concat(data4);
        option4 = {
            dataset:{
                source:datag4
            }
        }
        myChart4.setOption(option4);
    });
         
    
            //ascending
    $('#ascending4').click(function(){
        var heading = [['Time', 'Twitter_ID', 'UserName', 'Post_Content', 'Share', 'Like', 'Reply']];
        var data4 = datag4.slice(1);
        data4.sort(function(a,b){
            var sumA = a[4] + a[5] + a[6];
            var sumB = b[4] + b[5] + b[6];
            if(sumA < sumB){
                return 1;
            }else if(sumA > sumB){
                return -1;
            }else return 0;
        });
        datag4 = heading.concat(data4);
        option4 = {
            dataset:{
                source:datag4
            }
        }
        myChart4.setOption(option4);
    });
    
    // var drillTest = milliSecToDate(dataLineChart).slice(0, 70);
    // console.log(drillTest);

    // function dayTest(array){
    //     var heading = [['Time','Total']];
    //     arrayCopy = array.slice(1);//JSON.parse(JSON.stringify(array.slice(1)));
    //     var beginDate = new Date('2016-11-7');
    //     var endDate = new Date('2016-11-15');
    //     var resultLen = moment.duration(endDate.getTime()-beginDate.getTime()).asDays();
    //     var resultLen = Math.round(resultLen);
    //     var result = [];
    //     for(var i = 0; i < resultLen; i++){
    //         result.push([beginDate,0]);
    //         beginDate= moment(beginDate).add(1,'days')._d;
    //     }
    //     var ptr = 0;
    //     result.forEach((item, idx)=>{
    //         while(ptr < arrayCopy.length){
    //             var curDate = arrayCopy[ptr][0];
    //             if(idx === resultLen - 1){
    //                 if(curDate > item[0]){
    //                     item[1] += arrayCopy[ptr][4];
    //                 }
    //                 ptr++;
    //             }else{
    //                 if(curDate > item[0] && curDate < result[idx + 1][0]){
    //                     item[1] += arrayCopy[ptr++][4];
    //                 }else{
    //                     break;
    //                 }
    //             }
    //         }
    //     });
    
    //     console.log(result);
    //     return heading.concat(result);
    // }

    // var dayResult = dayTest(drillTest);
    // console.log(dayResult)


})