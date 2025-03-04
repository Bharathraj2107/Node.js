//async write
 const fs=require('fs')
 const data="fhfhdhfdhfdhfdhchdchdcuhdicdicduh sjsdfjdfhdjhdjhjdhudhfhdfhdhfudfh sfsufudfhudfudhfuhdufhdhfdhfhdf"
 fs.writeFile('write1.txt',data,function(err){//it only creates the file and adds  the data
    if(err) throw err
    console.log('async file write completed')
 })