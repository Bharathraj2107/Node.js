// zip and unzip the content

let zlib = require('zlib')
const fs = require('fs')

// creating zip methods instance
let gzip = zlib.createGzip()

//reading the file content by passing the file name as parameter
let r = fs.createReadStream('./datas.txt')

//writing the content into the new zip file
let w = fs.createWriteStream('new.gz')

//execution
r.pipe(gzip).pipe(w)

console.log('zip process completed')