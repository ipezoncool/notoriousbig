const { MongoClient } = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://felhasznalo:jelszo@cluster0.aorgxce.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("Cluster0");

    //adatok objektumként
    var ujAdat = {
        nev: "Nagy Sándor",
        kor: 27,
        fizetes: 700000,
        beosztas: 'IT'
    };

    //adat beszurása kollekcioba
    dbo.collection("Tesztkollekcio").insertOne(ujAdat, function(err, res){
        if(err) throw err;
        console.log('adatbeszurás sikeres')
        db.close(); //folyamatos adatbázis kapcsolat ne legyen
    });
});