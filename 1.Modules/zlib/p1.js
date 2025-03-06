// zip and unzip the content

let zlib = require('zlib')
const fs = require('fs')

// creating zip methods instance
let gzip = zlib.createGzip()

//reading the file content by passing the file name as parameter
let r = fs.createReadStream('./datas.txt')//the data will be the buffer format so we are usig this method to read the content 

//writing the content into the new zip file
let w = fs.createWriteStream('new.gz')//write the content into the new zip file 

//execution
r.pipe(gzip).pipe(w)//

console.log('zip process completed')

// Zip Process
// let zlib = require('zlib')
// This imports the zlib module, which provides compression and decompression functionality using the Gzip, Deflate/Inflate, and Brotli algorithms.

// const fs = require('fs')
// This imports the fs (file system) module, which allows you to interact with the file system on your computer (e.g., reading and writing files).

// let gzip = zlib.createGzip()
// This creates a Gzip compression object. This object can be used to compress data.

// let r = fs.createReadStream('./datas.txt')
// This creates a readable stream for the file datas.txt. The content of the file will be read in chunks (buffers) rather than all at once, which is useful for large files.

// let w = fs.createWriteStream('new.gz')
// This creates a writable stream for a new file called new.gz. The compressed data  will be written to this file.
// r.pipe(gzip).pipe(w)
// This sets up a pipeline:

// r.pipe(gzip) takes the data from the readable stream (r) and pipes it through the Gzip compression object (gzip).

// gzip.pipe(w) takes the compressed data and pipes it to the writable stream (w), which writes it to the new.gz file.

// console.log('zip process completed')
// This logs a message to the console indicating that the zip process has completed. Note that this message will be logged immediately after the pipeline is set up, but the actual compression and writing process may still be ongoing