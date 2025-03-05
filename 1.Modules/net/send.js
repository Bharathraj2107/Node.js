const net=require('net')
const server=net.createServer(function(socket){
    //input message
    socket.end("welcome to node js net module")
})
//error handler
server.on("error",function(err){
    if(err) throw err;
})
//start server
server.listen(()=>{
    let address=server.address()
    console.log(`server port %j`,address)
})
// net.createServer(callback) creates a TCP server.

// The callback function is executed whenever a client connects.

// socket: Represents the connection to the client.

// socket.end(data) sends data to the client and ends the connection.
//Starts the server and logs the server's address and port.