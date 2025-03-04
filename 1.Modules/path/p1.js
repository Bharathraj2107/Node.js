//path module
const path=require('path')
console.log(`path sep=`,path.sep)//index path

//join path
const filePath=path.join("/product","title-1","audio.png")
console.log(`path join=`,filePath)

//base path
const basePath=path.basename(filePath)
console.log(`base path=`,basePath)

//absolute path
const abPath=path.resolve(__dirname,"data","test.txt")
console.log(`absolute path=`,abPath)