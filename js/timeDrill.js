//keep scale1, scale2 for selecting time dimension
//var scale = [year, month, day, hour], these are functions
//use month as example
//set start end date to 2016-1-1 and 2018-1-1, get duration in time diminsion with moment.js
//length  = moment.duration(end - start).asMonths
//init showdata, generate result array with length, loop, each time, push begin time of the month in, leave total as 0
//merge origin data into show data: 
//keep a ptr for indexing to origin data
//for each elem in result
//while(ptr < origindata.length)
    //if(origindata.time is in range of (cur result elem time, next result elem time) )
    //elem.total += origindata[ptr][total]
    //ptr++

    //else, the origin data is in next range, break from current loop
//Time:O(n)
//Space:O(n)

//time scale for chart1 and 2
var scaleg1 = 0;
var scaleg2 = 0;



var drillToYear1 = function(array){
    var heading = [['Time','Total']];
    arrayCopy = JSON.parse(JSON.stringify(array.slice(1)));
    var beginDate = new Date('2016-1-1');
    var endDate = new Date('2018-1-1');
    var resultLen = moment.duration(endDate.getTime()-beginDate.getTime()).asYears();
    var resultLen = Math.round(resultLen);
    var result = [];
    for(var i = 0; i < resultLen; i++){
        result.push([beginDate,0]);
        beginDate= moment(beginDate).add(1,'years')._d;
    }
    var ptr = 0;
    result.forEach((item, idx)=>{
        while(ptr < arrayCopy.length){
            var curDate = new Date(arrayCopy[ptr][0]);
            if(idx === resultLen - 1){
                if(curDate > item[0]){
                    item[1] += arrayCopy[ptr][4];
                }
                ptr++;
            }else{
                if(curDate > item[0] && curDate < result[idx + 1][0]){
                    item[1] += arrayCopy[ptr++][4];
                }else{
                    break;
                }
            }
        }
    });

    console.log(result);
    return heading.concat(result);
}

var drillToMonth1 = function(array){
    var heading = [['Time','Total']];
    arrayCopy = JSON.parse(JSON.stringify(array.slice(1)));
    var beginDate = new Date('2016-1-1');
    var endDate = new Date('2018-1-1');
    var resultLen = moment.duration(endDate.getTime()-beginDate.getTime()).asMonths();
    var resultLen = Math.round(resultLen);
    var result = [];
    for(var i = 0; i < resultLen; i++){
        result.push([beginDate,0]);
        beginDate= moment(beginDate).add(1,'months')._d;
    }
    var ptr = 0;
    result.forEach((item, idx)=>{
        while(ptr < arrayCopy.length){
            var curDate = new Date(arrayCopy[ptr][0]);
            if(idx === resultLen - 1){
                if(curDate > item[0]){
                    item[1] += arrayCopy[ptr][4];
                }
                ptr++;
            }else{
                if(curDate > item[0] && curDate < result[idx + 1][0]){
                    item[1] += arrayCopy[ptr++][4];
                }else{
                    break;
                }
            }
        }
    });

    console.log(result);
    return heading.concat(result);
}

var drillToDay1 = function(array){
    var heading = [['Time','Total']];
    arrayCopy = JSON.parse(JSON.stringify(array.slice(1)));
    var beginDate = new Date('2016-1-1');
    var endDate = new Date('2018-1-1');
    var resultLen = moment.duration(endDate.getTime()-beginDate.getTime()).asDays();
    var resultLen = Math.round(resultLen);
    var result = [];
    for(var i = 0; i < resultLen; i++){
        result.push([beginDate,0]);
        beginDate= moment(beginDate).add(1,'days')._d;
    }
    var ptr = 0;
    result.forEach((item, idx)=>{
        while(ptr < arrayCopy.length){
            var curDate = new Date(arrayCopy[ptr][0]);
            if(idx === resultLen - 1){
                if(curDate > item[0]){
                    item[1] += arrayCopy[ptr][4];
                }
                ptr++;
            }else{
                if(curDate > item[0] && curDate < result[idx + 1][0]){
                    item[1] += arrayCopy[ptr++][4];
                }else{
                    break;
                }
            }
        }
    });

    console.log(result);
    return heading.concat(result);
}

var drillToHour1= function(array){
    var heading = [['Time','Total']];
    arrayCopy = JSON.parse(JSON.stringify(array.slice(1)));
    var beginDate = new Date('2016-1-1');
    var endDate = new Date('2018-1-1');
    var resultLen = moment.duration(endDate.getTime()-beginDate.getTime()).asHours();
    var resultLen = Math.round(resultLen);
    var result = [];
    for(var i = 0; i < resultLen; i++){
        result.push([beginDate,0]);
        beginDate= moment(beginDate).add(1,'hours')._d;
    }
    var ptr = 0;
    result.forEach((item, idx)=>{
        while(ptr < arrayCopy.length){
            var curDate = new Date(arrayCopy[ptr][0]);
            if(idx === resultLen - 1){
                if(curDate > item[0]){
                    item[1] += arrayCopy[ptr][4];
                }
                ptr++;
            }else{
                if(curDate > item[0] && curDate < result[idx + 1][0]){
                    item[1] += arrayCopy[ptr++][4];
                }else{
                    break;
                }
            }
        }
    });

    console.log(result);
    return heading.concat(result);
}


//func for graph2
var drillToYear2 = function(array){
    var heading = [['Time', 'Reply', 'Share', 'Like']];
    arrayCopy = JSON.parse(JSON.stringify(array.slice(1)));
    var beginDate = new Date('2016-1-1');
    var endDate = new Date('2018-1-1');
    var resultLen = moment.duration(endDate.getTime()-beginDate.getTime()).asYears();
    var resultLen = Math.round(resultLen);
    var result = [];
    for(var i = 0; i < resultLen; i++){
        result.push([beginDate,0, 0, 0]);
        beginDate= moment(beginDate).add(1,'years')._d;
    }
    var ptr = 0;
    result.forEach((item, idx)=>{
        while(ptr < arrayCopy.length){
            var curDate = new Date(arrayCopy[ptr][0]);
            if(idx === resultLen - 1){
                if(curDate > item[0]){
                    item[1] += arrayCopy[ptr][1];
                    item[2] += arrayCopy[ptr][2];
                    item[3] += arrayCopy[ptr][3];
                }
                ptr++;
            }else{
                if(curDate > item[0] && curDate < result[idx + 1][0]){
                    item[1] += arrayCopy[ptr++][1];
                    item[2] += arrayCopy[ptr++][2];
                    item[3] += arrayCopy[ptr++][3];
                }else{
                    break;
                }
            }
        }
    });

    console.log(result);
    return heading.concat(result);
}

var drillToMonth2 = function(array){
    var heading = [['Time', 'Reply', 'Share', 'Like']];
    arrayCopy = JSON.parse(JSON.stringify(array.slice(1)));
    var beginDate = new Date('2016-1-1');
    var endDate = new Date('2018-1-1');
    var resultLen = moment.duration(endDate.getTime()-beginDate.getTime()).asMonths();
    var resultLen = Math.round(resultLen);
    var result = [];
    for(var i = 0; i < resultLen; i++){
        result.push([beginDate,0, 0, 0]);
        beginDate= moment(beginDate).add(1,'months')._d;
    }
    var ptr = 0;
    result.forEach((item, idx)=>{
        while(ptr < arrayCopy.length){
            var curDate = new Date(arrayCopy[ptr][0]);
            if(idx === resultLen - 1){
                if(curDate > item[0]){
                    item[1] += arrayCopy[ptr][1];
                    item[2] += arrayCopy[ptr][2];
                    item[3] += arrayCopy[ptr][3];
                }
                ptr++;
            }else{
                if(curDate > item[0] && curDate < result[idx + 1][0]){
                    item[1] += arrayCopy[ptr++][1];
                    item[2] += arrayCopy[ptr++][2];
                    item[3] += arrayCopy[ptr++][3];
                }else{
                    break;
                }
            }
        }
    });

    console.log(result);
    return heading.concat(result);
}

var drillToDay2 = function(array){
    var heading = [['Time', 'Reply', 'Share', 'Like']];
    arrayCopy = JSON.parse(JSON.stringify(array.slice(1)));
    var beginDate = new Date('2016-1-1');
    var endDate = new Date('2018-1-1');
    var resultLen = moment.duration(endDate.getTime()-beginDate.getTime()).asDays();
    var resultLen = Math.round(resultLen);
    var result = [];
    for(var i = 0; i < resultLen; i++){
        result.push([beginDate,0, 0, 0]);
        beginDate= moment(beginDate).add(1,'days')._d;
    }
    var ptr = 0;
    result.forEach((item, idx)=>{
        while(ptr < arrayCopy.length){
            var curDate = new Date(arrayCopy[ptr][0]);
            if(idx === resultLen - 1){
                if(curDate > item[0]){
                    item[1] += arrayCopy[ptr][1];
                    item[2] += arrayCopy[ptr][2];
                    item[3] += arrayCopy[ptr][3];
                }
                ptr++;
            }else{
                if(curDate > item[0] && curDate < result[idx + 1][0]){
                    item[1] += arrayCopy[ptr++][1];
                    item[2] += arrayCopy[ptr++][2];
                    item[3] += arrayCopy[ptr++][3];
                }else{
                    break;
                }
            }
        }
    });

    console.log(result);
    return heading.concat(result);
}

var drillToHour2= function(array){
    var heading = [['Time', 'Reply', 'Share', 'Like']];
    arrayCopy = JSON.parse(JSON.stringify(array.slice(1)));
    var beginDate = new Date('2016-1-1');
    var endDate = new Date('2018-1-1');
    var resultLen = moment.duration(endDate.getTime()-beginDate.getTime()).asHours();
    var resultLen = Math.round(resultLen);
    var result = [];
    for(var i = 0; i < resultLen; i++){
        result.push([beginDate,0, 0, 0]);
        beginDate= moment(beginDate).add(1,'hours')._d;
    }
    var ptr = 0;
    result.forEach((item, idx)=>{
        while(ptr < arrayCopy.length){
            var curDate = new Date(arrayCopy[ptr][0]);
            if(idx === resultLen - 1){
                if(curDate > item[0]){
                    item[1] += arrayCopy[ptr][4];
                }
                ptr++;
            }else{
                if(curDate > item[0] && curDate < result[idx + 1][0]){
                    item[1] += arrayCopy[ptr++][4];
                }else{
                    break;
                }
            }
        }
    });

    console.log(result);
    return heading.concat(result);
}


//scale array for functions
var scaleFunc1 = [drillToYear1, drillToMonth1, drillToHour1, drillToDay1];
var scaleFunc2 = [drillToYear2, drillToMonth2, drillToHour2, drillToDay2];
