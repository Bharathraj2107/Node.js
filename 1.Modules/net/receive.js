//for sending the large amount of data we use the net for small amount of data we use dgram
let net=require('net')
const client=net.connect({port:56202},()=>{
    console.log('connected to server')
})

//data receiption event
client.on("data",function(msg){
    console.log(`msg=`,msg.toString())
}) 
//end connection
client.on("end",()=>{
    console.log('server disconnected')
})
// net.connect(options, callback) creates a TCP connection to the server.

// port: 56202: The port number to connect to.

// // The callback function logs a message indicating that the client is connected.
// Listens for the data event, which is triggered when the client receives data from the server.

// msg: The received data (in Buffer format).

// msg.toString() converts the Buffer to a string.
// Listens for the end event, which is triggered when the server disconnects.