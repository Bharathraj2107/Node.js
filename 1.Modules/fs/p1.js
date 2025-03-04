const fs=require('fs')
//it is asynchronous so calllback is there
fs.readFile('./data.txt',function(err,data){
    if(err) console.log(err)
         console.log('data=',data)//buffer
        console.log('data=',data.toString());//string
})
/*
files=
read 
    readFile(asynchronous as callback function)
    readFileSync-we don't have callback function
write 
    writeFile
    writeFileSync
append 
    appendFile
    appendFileSync
delete 
    unlink
    unlinkSync
 */