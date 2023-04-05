//Fájlművelet modul importálása:
var fileMuveletek = require('fs'); //fs = file system

//Új fájl létrehozása
fileMuveletek.appendFile('ujfajl.txt', 'tartalom', function(err){
    if(err) throw err;
    console.log('Új fájl létrehozva!')
});

//Fájl tartalmának módosítása
fileMuveletek.writeFile('ujfajl.txt', 'modositott szöveg', function(err){
    if(err) throw err;
    console.log("a fájl módosítva lett!");
});

//Fájl átnevezése
fileMuveletek.rename("ujfajl.txt", "modositott fajlnev.txt", function(err){
    if(err) throw err;
    console.log("a fájl neve módosítva lett!");
});

//Fájl tartalmának beolvasása és megjelenítése a böngészőben
var http = require('http');
http.createServer(function(req, res){
    fileMuveletek.readFile('modositott fajlnev.txt', function(err, data){
        res.statusCode = 200;
        res.setHeader = ('Content-Type', 'text/plain');
        res.write(data);
        return res.end();
    });
}).listen(3000, '127.0.0.1', function(){
    console.log(`A szerver fut a http://127.0.0.1:3000/ porton!`)
});