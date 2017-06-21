var fs = require('fs');

var data = fs.readFileSync(process.argv[2]);

var text = data.toString();

var lines = text.split('\n');
console.log(lines.length -1);

// The 'split('/n')' on line 7 counts the number of lines in the array, but overcounts it by one. That's why we need the length -1 on the next line
