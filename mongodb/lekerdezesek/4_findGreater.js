var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://felhasznalo:jelszo@cluster0.aorgxce.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;

    var feltetel = {
        fizetes: {$gt: 400000}  //>
        //fizetes: {$gte: 400000} //>=
    };
    
    var dbo = db.db("Cluster0");
    dbo.collection("tesztKollekcio").find(feltetel).toArray(function(err, res){
        if(err) throw err;
        console.log(res);
        db.close(); //folyamatos ab kapcsolat ne legyen
    });
});