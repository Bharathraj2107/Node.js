const http=require('http')
const PORT=3630

const server=http.createServer(function(req,res){
    console.log('url=',url)
})
server.listen(PORT,()=>{
    console.log('server is started @ http://localhost:${PORT}')
})