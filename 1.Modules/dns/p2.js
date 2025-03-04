const dns = require('dns')

dns.resolve4('www.facebook.com', function(err,data) {
    if(err) console.log(err)

    console.log(`data =`, data)
    data.forEach(item => {
        dns.reverse(item, function(err,host) {
            if(err) console.log(err)
                console.log(`reverse dns =`, item, ":", JSON.stringify(host))
        })
    })
})