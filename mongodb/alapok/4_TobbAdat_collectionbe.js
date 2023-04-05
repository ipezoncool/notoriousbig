const { MongoClient } = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://felhasznalo:jelszo@cluster0.aorgxce.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("Cluster0");

    //adatok objektumként
    var adatok = [
        {
            nev: 'Big Smoke',
            kor: 25,
            beosztas: 'rapper'
        },
        {
            nev: 'Tupac',
            kor: 23,
            beosztas: 'rapper'
        }
    ];

    //adat beszurása kollekcioba
    dbo.collection("Tesztkollekcio").insertMany(adatok, function(err, res){
        if(err) throw err;
        console.log('adatbeszurás sikeres')
        db.close(); //folyamatos adatbázis kapcsolat ne legyen
    });
});