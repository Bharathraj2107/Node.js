unzip

const zlib = require('zlib')
const fs = require('fs')

let gzip = zlib.createUnzip();

let r = fs.createReadStream('new.gz');
let w = fs.createWriteStream('out.txt');

r.pipe(gzip).pipe(w)

console.log('unzip completed')

// Unzip Process
// const zlib = require('zlib')
// This imports the zlib module again (though it was already imported earlier, so this line is redundant).

// const fs = require('fs')
// This imports the fs module again (also redundant since it was already imported).

// let gzip = zlib.createUnzip()
// This creates an Unzip object, which can be used to decompress data that was compressed using Gzip.

// let r = fs.createReadStream('new.gz')
// This creates a readable stream for the compressed file new.gz.

// let w = fs.createWriteStream('out.txt')
// This creates a writable stream for a new file called out.txt. The decompressed data will be written to this file.

// r.pipe(gzip).pipe(w)
// This sets up a pipeline:

// r.pipe(gzip) takes the data from the readable stream (r) and pipes it through the Unzip object (gzip).

// gzip.pipe(w) takes the decompressed data and pipes it to the writable stream (w), which writes it to the out.txt file.

// console.log('unzip completed')
// This logs a message to the console indicating that the unzip process has completed. Similar to the zip process, this message will be logged immediately after the pipeline is set up, but the actual decompression and writing process may still be ongoing.

// Summary
// The code first compresses the content of datas.txt into a new file called new.gz.

// Then, it decompresses the content of new.gz and writes the decompressed data to a new file called out.txt.

// The pipe method is used to efficiently handle the data flow between reading, compressing/decompressing, and writing.

// Note
// The console.log statements may not accurately reflect the completion of the compression/decompression processes because they are executed immediately after setting up the pipelines. To accurately log completion, you would need to listen for the finish event on the writable stream. For example:

// javascript
// Copy
// w.on('finish', () => {
//     console.log('zip/unzip process completed');
// });

