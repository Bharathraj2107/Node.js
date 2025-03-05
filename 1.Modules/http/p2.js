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
// Imports the http module and defines the port number (4000).
// http.createServer(callback) creates an HTTP server.

// The callback function logs the request URL (req.url) and HTTP method (req.method).