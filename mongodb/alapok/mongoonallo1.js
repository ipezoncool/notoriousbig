const { MongoClient } = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://felhasznalo:jelszo@cluster0.aorgxce.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;

    var dbo = db.db("Cluster0");

    dbo.createCollection("Járművek", function(err, res){
        if(err) throw err;
    });

    var adatok = [
        {
            rendszam: "XDX-420",
            gyarto: "Honda",
            tipus: "Civic",
            hengerurtalom: 1396,
            benzines: true
        },
        {
            rendszam: "AADE-56",
            gyarto: "Honda",
            tipus: "Accord",
            hengerurtalom: 1997,
            benzines: true
        },
        {
            rendszam: "FASS55",
            gyarto: "Honda",
            tipus: "Integra",
            hengerurtalom: 1594,
            benzines: true
        },
        {
            rendszam: "XDXD33",
            gyarto: "Ferrari",
            tipus: "812 Superfast",
            hengerurtalom: 6478,
            benzines: true
        }
    ];

    dbo.collection("Járművek").insertMany(adatok, function(err, res){
        if(err) throw err;
    });

    dbo.collection("Járművek").find({}).toArray(function(err, res){
        if(err) throw err;
        console.log(res);
        db.close(); //folyamatos adatbázis kapcsolat ne legyen
    });
});