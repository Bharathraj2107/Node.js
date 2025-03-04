//sync file delete
const fs=require('fs')
if(fs.existsSync("./write2.txt")){
    fs.unlinkSync('./write2.txt')
    console.log('file deleted')
}
else{
    console.log('file not found')
}