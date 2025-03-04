const dgram=require('dgram')
const socket=dgram.createSocket('udp4')
//on(eventname,callback)
socket.on("message",function(msg,err){
    if(err)console.log(err)
        console.log(`message=`,msg.toString())//input is in buffer format so we need to convert it to string
})
socket.bind(3400)