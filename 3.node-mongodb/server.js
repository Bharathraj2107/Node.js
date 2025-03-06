const http = require('http')
const PORT = 3630
const client=require('./dbconfig')
client.connect()
let db=client.db("userdb")
let cl=db.collection("users");
const server = http.createServer(function (req,res) {
   // configure the headers
//    res.writeHead(200, { "content-type": "application/json" })


   let url = req.url; // req.url => accept url path
   let method = req.method;  // req.method => accept url method

   if(url==="/api/users/add" &&  method==="POST"){
        req.on("data",async function(data){
        res.writeHead(201, { "content-type": "application/json" });
        let user=JSON.parse(data)
        let out=await cl.insertOne(user);
        res.end(JSON.stringify({msg:"add new user",user}))
    })
   

   }else if(url==="/api/users/all" && method==="GET") {
    res.writeHead(200, { "content-type": "application/json" })
    res.end(JSON.stringify({msg:" all users"}))
    
   
   }else if(url==="/api/users/edit" && method==="PATCH") {
    res.writeHead(201, { "content-type": "application/json" })
    res.end(JSON.stringify({msg:" update user"}))

   }else if(url==="/api/users/delete" && method==="DELETE") {
    res.writeHead(200, { "content-type": "application/json" })
    res.end(JSON.stringify({msg:" delete users"}))

   }else{
    res.writeHead(404, { "content-type": "application/json" })
    res.end(JSON.stringify({msg:"page not found"}))
   }
 
})

server.listen(PORT, () => {
    console.log(`server is started @ http://localhost:${PORT}`)
})