const { MongoClient } = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://felhasznalo:jelszo@cluster0.aorgxce.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("Cluster0");


    //adat beszurása kollekcioba
    //                          itt lehet egy előre meghatározott objektum/változó is
    dbo.collection("Tesztkollekcio").deleteOne({nev: 'Big Smoke'}, function(err, res){
        if(err) throw err;
        console.log('adat törölve')
        db.close();
    });
});