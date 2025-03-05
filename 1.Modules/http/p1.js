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
// http.createServer(callback) creates an HTTP server.

// The callback function is executed whenever a request is made to the server.

// req: Represents the incoming request (client request).

// res: Represents the outgoing response (server response).

// res.writeHead(statusCode, headers) sets the response status code (200 for success) and headers (Content-Type: text/html).

// res.end(data) sends the response data (HTML content) and ends the response.

// .listen(port, callback) starts the server and listens on the specified port (4000).

// The callback function logs a message indicating that the server is running.