//dgram ->used for communication
//it works through udp protocol

const dgram=require('dgram')//his line imports the dgram module, just like in the receiver code.
const socket=dgram.createSocket('udp4')//This creates a UDP socket using the udp4 protocol (IPv4). This socket will be used to send messages.

let msg="welcome to node js modules"//This defines the message (msg) that will be sent to the receiver.
socket.send(msg,3400,"localhost")//This sends the message (msg) to the receiver.3400: The port number where the receiver is listening."localhost": The IP address or hostname of the receiver (in this case, the local machine).
console.log(`msg sent successfully on http://localhost:3400`)//This logs a success message to the console, indicating that the message has been sent.


// UDP Protocol: UDP is a connectionless protocol, meaning it does not establish a connection before sending data. It is faster but less reliable than TCP.

// Buffer Format: Data sent over UDP is in binary format (Buffer). To read it, you need to convert it to a string using .toString().

// Port Binding: The receiver binds to a specific port (3400) to listen for incoming messages.

// Sender and Receiver: The sender sends a message to the receiver's IP and port, and the receiver listens for and processes the message.