var rawDataURL = "https://raw.githubusercontent.com/skywalkershen/data-visualization-echarts/6b1fc9600c8b86123c65dd76d28368320b120476/TeslaModel3.csv";

var rawData = [];
var dataIn = [];
var datag1 = [];
var datag2 = [];
var datag3 = [];
var datag4 = [];

//transfer the input chinese characters into Eng
//transfer input string to number
function rawDataStringToNum(data){
    var heading = [['Time', 'Twitter_ID', 'UserName', 'Post_Content','Reply', 'Share', 'Like']];
    var data = data.slice(1);
    data = data.map(item=>{
        var newItem = [];
        for(i = 0; i < 4; i++){
            newItem.push(item[i]);
        }
        for(i = 4; i < 7; i++){
            newItem.push(parseInt(item[i]));
        }
        return newItem;
    })
    return heading.concat(data);
}


function dataInitG3(dataIn){
    var map = new Map();
    //note: Time and Post deleted!!!
    var heading = [['Twitter_ID', 'UserName', 'Reply', 'Share', 'Like']];

    //Don't do inplace on dataIn, this is a reference, the change will have effect on the original data!!!
    dataCopy = dataIn.slice(0);
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
    result = result.sort(function(a,b){
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

    return heading.concat(result);
    
}

function dataInitG4(dataIn){
    var dataCopy = dataIn.slice(0);
    var heading = [];
    heading.push(dataCopy[0]);
    var dataCopy = dataCopy.slice(1);
    
    //sort to be descending
    dataCopy = dataCopy.sort(function(a,b){
        var sumA = a[4] + a[5] + a[6];
        var sumB = b[4] + b[5] + b[6];
        if(sumA > sumB){
            return -1;
        }
        if(sumA < sumB){
            return 1;
        }
        return 0;
    });

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
    //console.log(rawData);
    
    dataIn = rawDataStringToNum(rawData);
    //console.log(dataIn.length);

    datag3 = dataInitG3(dataIn);
     //console.log(datag3.slice(0,5));
     

     datag4 = dataInitG4(dataIn);
     //console.log(datag4.slice(0,5));

  

    


    
     
})