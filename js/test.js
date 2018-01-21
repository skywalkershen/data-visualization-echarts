var testData3 = [
    ["Time", "Twitter_ID", "UserName", "Post_Content", "Reply", "Share", "Like"],
    ["2017-08-10, 7:27 PM", "bittersw465eet9", "Lisa Paternella", "text", 0, 0, 2],
    ["2017-08-12, 7:27 PM", "bitte231rsweet9", "Lisa Paternella", "text", 1, 5, 0],
    ["2017-08-13, 7:27 PM", "bitter894sweet9", "Lisa Paternella", "text", 2, 2, 5],
    ["2017-09-10, 7:27 PM", "bittersw2eet9", "Lisa Paternella", "text", 0, 0, 0],
    ["2017-10-10, 7:27 PM", "bitt32ersweet9", "Lisa Paternella", "text", 4, 0, 5],
    ["2018-08-10, 7:27 PM", "bitter2sweet9", "Lisa Paternella", "text", 0, 1, 0],
    ["2019-08-10, 7:27 PM", "bittersweet9", "Lisa Paternella", "text", 0, 0, 0],

];

var copy = JSON.parse(JSON.stringify(testData3));
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

