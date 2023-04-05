const http = require('http');
const fs = require('fs');

var modulok = require('./sajatmodulok');

const hostname = '127.0.0.1';
const port = 3000;

var adat = modulok.randomizator().toString();

fs.appendFile('randomszamok.txt', adat, function(err){
    if(err) throw err;
})

const server = http.createServer( (req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.write(modulok.randomizator().toString());
    res.end();
}).listen(port, hostname, () =>{
    console.log(`A szerver fut itt: http://${hostname}:${port}/`)
});