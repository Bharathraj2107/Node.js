//async append
const fs=require('fs')
const data="\n\n Asynchronously append the data into the file"

fs.appendFile("./write1.txt",data,function(err){//we can't change the existing data we can add new data 
    if(err) throw err;
    console.log('file append completed')
})