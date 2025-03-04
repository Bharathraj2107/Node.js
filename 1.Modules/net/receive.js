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