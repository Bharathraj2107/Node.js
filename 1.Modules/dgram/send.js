//dgram ->used for communication
//it works through udp protocol

const dgram=require('dgram')
const socket=dgram.createSocket('udp4')

let msg="welcome to node js modules"
socket.send(msg,3400,"localhost")
console.log(`msg sent successfully on http://localhost:3400`)
