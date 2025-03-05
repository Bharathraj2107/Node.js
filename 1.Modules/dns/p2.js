const dns = require('dns')

dns.resolve4('www.facebook.com', function(err,data) {//dns.resolve4(domain, callback) resolves the domain name (www.facebook.com) to an array of IPv4 addresses.err: Error object (if any error occurs during resolution).data: An array of resolved IPv4 addresses (e.g., ['157.240.16.35', '157.240.16.36', ...]).
    if(err) console.log(err)

    console.log(`data =`, data)
    data.forEach(item => {
        dns.reverse(item, function(err,host) {
            if(err) console.log(err)
                console.log(`reverse dns =`, item, ":", JSON.stringify(host))
        })
    })
})
// For each resolved IP address (item), dns.reverse(ip, callback) performs a reverse DNS lookup to resolve the IP address back to hostnames.

// err: Error object (if any error occurs during the reverse lookup).

// host: An array of hostnames associated with the IP address.

// JSON.stringify(host) converts the array of hostnames to a JSON string for logging.