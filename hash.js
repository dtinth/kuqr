
var page = require('webpage').create()
page.open('https://login8.ku.ac.th/v2/?referer=www.dt.in.th%2F', function(status) {
  var qr = page.evaluate(function() {
    return document.getElementsByName('hash')[0].value
  })
  console.log(qr)
  phantom.exit(0)
})

