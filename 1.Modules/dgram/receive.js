const dgram=require('dgram')//This line imports the dgram module, which is a built-in Node.js module used for UDP (User Datagram Protocol) communication.
const socket=dgram.createSocket('udp4')//This creates a UDP socket using the udp4 protocol (IPv4). The socket will be used to send and receive messages.
//on(eventname,callback)
socket.on("message",function(msg,err){//This sets up an event listener for the message event. Whenever the socket receives a message, this callback function is executed. msg: The received message (in Buffer format).err: An error object (if any error occurs during message reception).The msg.toString() converts the Buffer data into a human-readable string.
    if(err)console.log(err)
        console.log(`message=`,msg.toString())//input is in buffer format so we need to convert it to string
})
socket.bind(3400)//This binds the socket to port 3400 on the local machine. The socket will listen for incoming UDP messages on this port.