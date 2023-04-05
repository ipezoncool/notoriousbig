var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://felhasznalo:jelszo@cluster0.aorgxce.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    
    var dbo = db.db("Cluster0");
    dbo.collection("tesztKollekcio").find({}, {projection: {_id:0, nev:1, kor:1}}).sort({kor:/*-*/1}).toArray(function(err, res){
        if(err) throw err;
        console.log(res);
        db.close(); //folyamatos ab kapcsolat ne legyen
    });
});