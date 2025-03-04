const fs=require('fs')
let data=fs.readFileSync('./data.txt')
console.log('data=',data)//buffer
console.log('data=',data.toString());//string