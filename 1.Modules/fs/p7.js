//async file delete
const fs=require('fs')
if(fs.existsSync("./write1.txt")){//here we are checking whether the file is present or not
    fs.unlinkSync('./write1.txt',function(err){
        if(err) throw err
        console.log('file deleted successfully')
    })
}
    else{
        console.log('file not found')
    }
