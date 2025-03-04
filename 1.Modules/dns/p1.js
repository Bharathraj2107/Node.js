//domain name system-url address
const dns=require('dns')

//lookup(url,callback)
dns.lookup('www.facebook.com',function(err,address,family){
    
        console.log(`address=`,address)
        console.log(`family=`,family)
    //lookupService(address,port,callback)
    dns.lookupService(address,22,function(err,host,service){
        if(err) console.log(err)
        console.log('host=',host)
        console.log('service=',service)
    })
});

// $ node p1.js
// address= 157.240.16.35
// family= 4
// host= edge-star-mini-shv-01-bom1.facebook.com
// service= ssh
