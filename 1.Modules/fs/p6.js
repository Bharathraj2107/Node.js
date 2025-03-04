//synchronous file append
const fs=require('fs')
const data="\n\n Asynchronously append the data into the file"
fs.appendFileSync("./write2.txt",data)
console.log('file append completed')