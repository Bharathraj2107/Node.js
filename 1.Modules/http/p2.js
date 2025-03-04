//req.url
const http=require('http')
const port=4000

//templates
const server =http.createServer(function (req,res){
    //req.url =>to read the current active path
    console.log(`url address=`,req.url)
    console.log(`method=`,req.method)
})
//port listen
server.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})