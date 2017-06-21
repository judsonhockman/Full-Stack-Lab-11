// use callback only here.
// txt NOT .txt
// 

var fs = require('fs'); // Mind the spelling of 'require'. You've misspelled it twice!
var path = require('path');
fs.readdir(process.argv[2], function(err, fileList){
    if (err) {
        console.log(err);
    } else {
       // console.log(fileList);
       for (var i = 0; i < fileList.length; i++) {
           if (path.extname(fileList[i]) === '.' + process.argv[3] ) {
               console.log(fileList[i]);
           }
       }
    }
});