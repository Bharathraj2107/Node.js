const http=require('http')
const port=4000

http.createServer(function(req,res){
    //req->incoming data,res->outgoing response
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end(`
       <div>
       <h1>Welcome to nodejs http server</h1>
       <p>this is our first statement</p>
       </div>`)
}).listen(port,()=>{//listen is used to start the server
    console.log(`server is running on http://localhost:${port}`)
})