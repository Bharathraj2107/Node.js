//domain name system-url address
const dns=require('dns')//This imports the dns module, which provides functions to perform DNS lookups and resolve domain names.

//lookup(url,callback)
dns.lookup('www.facebook.com',function(err,address,family){//dns.lookup(domain, callback) resolves the domain name (www.facebook.com) to its IP address.err: Error object (if any error occurs during the lookup).address: The resolved IP address (e.g., 157.240.16.35).family: The IP version (e.g., 4 for IPv4 or 6 for IPv6).
    
        console.log(`address=`,address)
        console.log(`family=`,family)
    //lookupService(address,port,callback)
    dns.lookupService(address,22,function(err,host,service){//dns.lookupService(address, port, callback) resolves the given IP address and port to a hostname and service.address: The IP address to resolve.port: The port number (e.g., 22 for SSH).host: The resolved hostname (e.g., edge-star-mini-shv-01-bom1.facebook.com).service: The name of the service running on the port (e.g., ssh).
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

// dns.lookup:

// Resolves a domain name to an IP address.

// Uses the operating system's DNS resolution mechanism.

// Returns a single IP address.

// dns.resolve4:

// Resolves a domain name to an array of IPv4 addresses.

// Directly queries DNS servers.

// Returns all IPv4 addresses associated with the domain.

// dns.reverse:

// Performs a reverse DNS lookup to resolve an IP address back to hostnames.

// dns.lookupService:

// Resolves an IP address and port to a hostname and service name.