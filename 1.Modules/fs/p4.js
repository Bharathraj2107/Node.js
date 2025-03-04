//sync write
const fs=require('fs')
const data="qwertyuiopasdfghjk lzxcvb nm"
fs.writeFileSync('./write2.txt',data)
console.log('sync file write completed ')