//HTTP kliens elemeket beimportaljuk
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//Szerver felépítése HTTP modul segítségével
const server = http.createServer( (req, res) => {
    res.statusCode = 200;   //Minden oké
    res.setHeader('Content-Type', 'text/plain');    //HTTP fejléc megadása
    res.end('Hello World!');    //oldal szöveges tartalma
});

//Csatlakozás a szerverre, kapcsolat kiépítése
server.listen(port, hostname, () => {
    console.log(`A szerver fut a http://${hostname}:${port}/ címen`);
});

//Szerver fájl futtatása:
// node index.js >> terminál ablakban fog futni, amíg az adott mappában vagyunk