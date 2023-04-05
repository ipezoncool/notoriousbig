const { MongoClient } = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://felhasznalo:jelszo@cluster0.aorgxce.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("Cluster0");


    //adat beszurása kollekcioba
    dbo.collection("Tesztkollekcio").findOne({/* Szűrő objektum */}, function(err, res){
        if(err) throw err;
        console.log(res/*.nev*/);
        db.close();
    });
});