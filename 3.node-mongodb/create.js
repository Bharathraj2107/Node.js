const http=require('http')//This line imports the built-in http module, which is used to create an HTTP server in Node.js.
const PORT=3630//This line defines the port number on which the HTTP server will listen for incoming requests.

const server=http.createServer(function(req,res){
    console.log('url=',url)
})// This line creates an HTTP server. The createServer method takes a callback function that is executed every time a request is made to the server. The req object represents the HTTP request, and the res object represents the HTTP response.
server.listen(PORT,()=>{
    console.log('server is started @ http://localhost:${PORT}')
})//This line starts the HTTP server and makes it listen on the specified port (3630). When the server starts, it logs a message to the console indicating that the server is running.