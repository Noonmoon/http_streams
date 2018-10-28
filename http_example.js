var https = require('https');

var options = {
  host: 'www.example.org',
  path: '/'
};

var callback = function() {
  console.log('In response handler callback!')
}

console.log("Im about to make the request")

https.request(options, callback).end();


console.log("Ive made the request!")


