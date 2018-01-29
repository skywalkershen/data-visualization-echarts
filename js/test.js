var testData3 = [
    ["Time", "Twitter_ID", "UserName", "Post_Content",  "Share", "Like", "Reply"],
    ["2017-08-10, 7:27 PM", "bittersw465eet9", "Lisa Paternella", "text", 0, 0, 2],
    ["2017-08-12, 7:27 PM", "bitte231rsweet9", "Lisa Paternella", "text", 1, 5, 0],
    ["2017-08-13, 7:27 PM", "bitter894sweet9", "Lisa Paternella", "text", 2, 2, 5],
    ["2017-09-10, 7:27 PM", "bittersw2eet9", "Lisa Paternella", "text", 0, 0, 0],
    ["2017-10-10, 7:27 PM", "bitt32ersweet9", "Lisa Paternella", "text", 4, 0, 5],
    ["2018-08-10, 7:27 PM", "bitter2sweet9", "Lisa Paternella", "text", 0, 1, 0],
    ["2019-08-10, 7:27 PM", "bittersweet9", "Lisa Paternella", "text", 0, 0, 0],
    ["2017-08-10, 7:27 PM", "bittersw465eet9", "Lisa Paternella", "text", 0, 0, 2],
    ["2017-08-12, 7:27 PM", "bitte231rsweet9", "Lisa Paternella", "text", 1, 5, 0],
    ["2017-08-13, 7:27 PM", "bitter894sweet9", "Lisa Paternella", "text", 2, 2, 5],
    ["2017-09-10, 7:27 PM", "bittersw2eet9", "Lisa Paternella", "text", 0, 0, 0],
    ["2017-10-10, 7:27 PM", "bitt32ersweet9", "Lisa Paternella", "text", 4, 0, 5],
    ["2018-08-10, 7:27 PM", "bitter2sweet9", "Lisa Paternella", "text", 0, 1, 0],
    ["2019-08-10, 7:27 PM", "bittersweet9", "Lisa Paternella", "text", 0, 0, 0],

];
var testData = [
    ['Time', 'Reply', 'Share', 'Like'],
    [1478535300000, 0, 0, 0, 0]
    ,[1478536800000, 1, 1, 0, 2] 
    ,[1478537220000, 0, 0, 0, 0]
    ,[1478539020000, 0, 0, 0, 0]
    ,[1478541540000, 0, 0, 0, 0]
    ,[1478541780000, 0, 0, 0, 0]
    ,[1478545140000, 1, 1, 0, 2]
    ,[1478545200000, 0, 0, 0, 0]
    ,[1478547660000, 0, 0, 1, 1]
    ,[1478547720000, 1, 15, 1, 17]
    ,[1478551980000, 0, 0, 0, 0]
    ,[1478552640000, 9, 11, 0, 20]
    ,[1478552760000, 0, 0, 0, 0]
    ,[1478557380000, 0, 5, 0, 5]
    ,[1502399880000, 4, 5, 0, 9]
    ,[1502399880000, 0, 2, 0, 2]
    ,[1502400300000, 1, 1, 0, 2]
    ,[1502400540000, 1, 1, 0, 2]
    ,[1502402760000, 0, 0, 0, 0]
    ,[1502407980000, 1, 0, 0, 1]
    ,[1502408100000, 0, 0, 0, 0]
    ,[1502409840000, 0, 0, 0, 0]
    ,[1502416980000, 0, 1, 0, 1]
    ,[1502418420000, 0, 0, 0, 0]
];



function milliSecToDate(d){
    var heading = [['Time', 'Reply', 'Share', 'Like', 'Total']];
    var dataCopy = JSON.parse(JSON.stringify(d));
    dataCopy = dataCopy.slice(1);
    dataCopy.forEach(item=>{
        item[0] = new Date(item[0]);
    });
    return heading.concat(dataCopy);
}

// function lineSplitter(param){
//     var result = '';
//     var lineLength = 50;
//     var curLength = 0;
//     if(param.length <= lineLength){
//         return param;
//     }else{
//         var rawArray = param.split(' ');
//         var idx = 0;
//         var curLine = '';
//         while(idx < rawArray.length){
//             //for long url
//             if(rawArray[idx].length > lineLength ){
//                 var start = 0 + lineLength - curLine.length;
//                 curLine = curLine + ' ' + rawArray[idx].substr(0, lineLength - curLine.length - 1);
                
//                 while(start + lineLength <= rawArray[idx].length ){
//                     curLine = curLine + '\n'+ rawArray[idx].substr(start, lineLength);
//                     start += lineLength
//                 }
//                 result = result + '\n' + curLine;
//                 curLine = rawArray[idx].substr(start, rawArray[idx].length - start);
//                 idx++;
//             }else{
//                 if(curLine.length + rawArray[idx].length  <= lineLength){
//                     curLine = curLine + ' ' + rawArray[idx];
//                     idx++;
//                 }else{
//                     result = result  + '\n' + curLine;
//                     curLine = '';
//                 }
//             }
            
//         }
//         return curLine == ''? result : result + '\n' + curLine;
//     }
// }




// var totaltest = {'t':0};
// dataIn.forEach(item=>{
//     totaltest.t += item[5] + item[6] + item[4];
// })



function timeAsc(result){
    result = result.sort(function(a,b){
        var timea = Date.parse(a[0])
        var timeb = Date.parse(b[0])
        if(timea > timeb){
            return -1;
        }
        if(timea < timeb){
            return 1;
        }
        return 0;
    });
    return result;
}


// function DrillToYear1(array){
//     var heading = [['Time','Total']];
//     arrayCopy = JSON.parse(JSON.stringify(array.slice(1)));
//     var beginDate = new Date(arrayCopy[0][0]);
//     var endDate = new Date(arrayCopy[arrayCopy.length - 1][0]);
//     var yearDiff = endDate.getFullYear() - beginDate.getFullYear() + 1;
//     var result = [];
//     var beginYear = beginDate.getFullYear();
//     for(var i = 0; i < yearDiff; i++){
//         result.push([beginYear,0]);
//         beginYear++;
//     }
//     var ptr = 0;
//     var resultPtr = 0;
//     result.forEach(item=>{
//         while(ptr < arrayCopy.length && resultPtr < result.length){
//             var curDate = new Date(arrayCopy[ptr][0]);
//             if(curDate.getFullYear() !== result[resultPtr][0]){
//                 resultPtr++
//                 break;
//             }else{
//                 result[resultPtr][1] += arrayCopy[ptr++][4];
//             }
//         }
//     });


// //     return heading.concat(result);
// // }




// function timeAsc(result){
//     result = result.sort(function(a,b){
//         var timea = Date.parse(a[0])
//         var timeb = Date.parse(b[0])
//         if(timea > timeb){
//             return -1;
//         }
//         if(timea < timeb){
//             return 1;
//         }
//         return 0;
//     });
//     return result
// }








// d3.csv(rawDataURL,function(data){
//     console.log(data);
// })
//console.log(copy === testData3);

//console.log(dataInitG4(testData3).slice(0,7));


// var result = dataInitG3(testData3);
// console.log(result);

//get fake
// function getFakeData(data){
//     var string = {};
//     data.forEach(element => {
//         string = string + '[' + '"'+element[0] +'",'
//         + '"'+element[1] +'",'
//         + '"'+element[2] +'",'
//         + '"'+element[3] +'",'
//          +element[4] + ','  +
//          +element[5] + ','  +
//          +element[6]   +
//         '],\n';
//     });
//     return string;
// }

// var fake = getFakeData(datag4);
// console.log(fake);

