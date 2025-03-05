// unzip

const zlib = require('zlib')
const fs = require('fs')

let gzip = zlib.createUnzip();

let r = fs.createReadStream('new.gz');
let w = fs.createWriteStream('out.txt');

r.pipe(gzip).pipe(w)

console.log('unzip completed')