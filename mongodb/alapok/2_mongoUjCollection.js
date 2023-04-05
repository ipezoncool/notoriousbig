const { MongoClient } = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://felhasznalo:jelszo@cluster0.aorgxce.mongodb.net/test";


MongoClient.connect(url, function(err, db){
    if(err) throw err;
    
    //adatbázis kinyerése
    var dbo = db.db("Cluster0");

    dbo.createCollection("Tesztkollekcio", function(err, res){
        if(err) throw err;
        console.log('sikeres kollekcio létrehozás')
        db.close(); //folyamatos adatbázis kapcsolat ne legyen
    });
});