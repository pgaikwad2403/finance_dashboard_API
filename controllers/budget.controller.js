const Budget = require('../models/budget.model');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//Simple version, without validation or sanitation
exports.getOne = function (req, res) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("finance");
        dbo.collection("budget").findOne({Fund_Center_L1: ""}, function(err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
        });
      });
    // res.send('Greetings from the Test controller!');
};

exports.addOne = function (req, res) {
    let budget = new Budget(
        {
            Fund_Center_L1: req.body.Fund_Center_L1,
            Fund_Center_L2: req.body.Fund_Center_L2,
            Fiscal_Period: req.body.Fiscal_Period,
            Category_L1: req.body.Category_L1,
            Category_L2: req.body.Category_L2,
            Consumable: req.body.Consumable,
            Pre_commitment: req.body.Pre_commitment,
            Consumed: req.body.Consumed
        }
    );

    budget.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
}

exports.getESS = function (req, res){
    
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("finance");

        dbo.collection("budget").find({Fund_Center_L1: "ESS"}).toArray(function(err, result) {
            console.log(typeof result);
            res.send(JSON.stringify(result));
            db.close();
        })
      });
}

exports.getTotalValueByParam = function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("finance");
        dbo.collection("budget").aggregate([{$group:{_id:null, total:{$sum:"$Consumed"}}}]).toArray(function(err, result) {
            console.log(typeof result);
            res.send(JSON.stringify(result));
            db.close();
        });

      });
}

exports.getAll = function(req, res) {



    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("finance");
        dbo.collection("budget").find({}).toArray(function(err, result) {
            console.log(typeof result);
            res.send(JSON.stringify(result));
            db.close();
        })
      });

}