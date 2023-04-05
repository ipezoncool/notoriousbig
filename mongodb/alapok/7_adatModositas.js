const { MongoClient } = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://felhasznalo:jelszo@cluster0.aorgxce.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("Cluster0");


    //adat beszurása kollekcioba
    dbo.collection("Tesztkollekcio").updateOne({nev: 'Tupac'}, {$set: {kor: 666}}, function(err, res){
        if(err) throw err;
        console.log('adat modositva')
        db.close();
    });
});