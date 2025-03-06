const mongodb=require('mongodb')
const url='mongodb://127.0.0.1:27017'//if not working then use "mongodb://127.0.0.1:27017"
const client=new mongodb.MongoClient(url)
//async handler 
// async function main(){
//     await client.connect()
//     console.log('mongo db connected successfully')
//     return "...connected"
// }
// main().then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err.message)
// })
module.exports=client