var fs = require('fs');

fs.readFile(process.argv[2], function(err, data){
    // anything that depnds on getting the file has to be inside this function
    if (err) {
        console.log(err);
    } else {
        
var data = fs.readFileSync(process.argv[2]);

var text = data.toString();

var lines = text.split('\n');
console.log(lines.length -1);
    }
})
// Just like 'my first i/o', this one counts the lines and then subtracts one.