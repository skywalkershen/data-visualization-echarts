var rawDataURL = "https://raw.githubusercontent.com/skywalkershen/twitter-data/master/TeslaModel3.csv";



var rawData = [];
var dataIn = [];
var datag1 = [];
var datag2 = [];
var datag3 = [];
var datag4 = [];

//transfer the input chinese characters into Eng
//transfer input string to number
function rawDataStringToNum(data){
    var heading = [['Time', 'Twitter_ID', 'UserName', 'Post','Reply', 'Share', 'Like']];
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

function dataInitG4(dataIn){
    var heading = [];
    heading.push(dataIn[0]);
    var data = dataIn.slice(1);
    data = data.sort(function(a,b){
        var sumA = a[4] + a[5] + a[6];
        var sumB = b[4] + b[5] + b[6];
        if(sumA < sumB){
            return -1;
        }
        if(sumA > sumB){
            return 1;
        }
        return 0;
    });
    return heading.concat(data);
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
    console.log(rawData.length);
    
    dataIn = rawDataStringToNum(rawData);
    console.log(dataIn.length);


     datag4 = dataInitG4(dataIn);
     console.log(datag4);
})