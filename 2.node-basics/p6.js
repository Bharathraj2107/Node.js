//node js events
const EventEmitter=require('events')

//ref to event emitter
let ev=new EventEmitter()

//ref .on(name,callback_listener)
ev.on("product",function(a,b){
    console.log('product=',a*b)
})
ev.on("print",function(){
    console.log("hi this is node js event")
})
ev.on("userInfo",(name,email)=>{
    console.log(`username is ${name} and email is ${email}`)
})
//event execution
//ref.emit(name,params)
ev.emit("print")
ev.emit("product",10,20)
ev.emit("userInfo","bharath","bharath@gmail.com")