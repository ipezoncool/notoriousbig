var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://felhasznalo:jelszo@cluster0.aorgxce.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("Cluster0");

    // A) feladat
    // var feltetel = {
    //     gyarto: "Honda"
    // };
    // dbo.collection("Járművek").find(feltetel).toArray(function(err, res){
    //     if(err) throw err;
    //     console.log(res);
    //     db.close(); //folyamatos ab kapcsolat ne legyen
    // });

    // B) feladat
    // var feltetel = {
    //     benzines: {$ne: false}
    // };
    // dbo.collection("Járművek").find(feltetel).toArray(function(err, res){
    //     if(err) throw err;
    //     console.log(res);
    //     db.close(); //folyamatos ab kapcsolat ne legyen
    // });

    // D) feladat
    // var feltetel = [{
    //     gyarto: "Honda",
    //     gyarto: "Ferrari"
    // }];
    // dbo.collection("Járművek").find(feltetel).toArray(function(err, res){
    //     if(err) throw err;
    //     console.log(res);
    //     db.close(); //folyamatos ab kapcsolat ne legyen
    // });

    // C) feladat
    // var feltetel = {
    //     hengerurtalom: {$gt: 1000}
    // };

    // dbo.collection("Járművek").find(feltetel).toArray(function(err, res){
    //     if(err) throw err;
    //     console.log(res);
    //     db.close(); //folyamatos ab kapcsolat ne legyen
    // });

    // E) feladat
    var feltetel = {
        $and: [
            {hengerurtalom: {$gt:1000}},
            {hengerurtalom: {$lt:2000}}
        ]
    }

    dbo.collection("Járművek").find(feltetel).toArray(function(err, res){
        if(err) throw err;
        console.log(res);
        db.close(); //folyamatos ab kapcsolat ne legyen
    });
});