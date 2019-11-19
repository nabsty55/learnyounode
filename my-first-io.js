const fs = require('fs');
const filePath = process.argv[2];
const buf = fs.readFileSync(filePath);
const str = String(buf);
const splt = str.split('\n');
const l = splt.length-1;
console.log(l);