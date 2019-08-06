var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
export const mongoDBConnector = (dbName, collectionName) => {

    let dataBase = null;
    
    MongoClient.connect(url, (error, db) => {
        if(error) throw err;
        const dbo =  db.db(dbName);
        dataBase = dbo.collection(collectionName);
    });

    return dataBase;

}


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("finance");
  dbo.collection("budget").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});