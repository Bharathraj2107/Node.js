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