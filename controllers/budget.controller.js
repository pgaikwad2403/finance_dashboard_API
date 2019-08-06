const Budget = require('../models/budget.model');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

//Simple version, without validation or sanitation
// exports.getOne = function (req, res) {

//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("finance");
//         dbo.collection("budget").findOne({Fund_Center_L1: "ESS"}, function(err, result) {
//           if (err) throw err;
//           console.log(result);
//           res.send(result);
//           db.close();
//         });
//       });
//     res.send('Greetings from the Test controller!');
// };

// exports.getDataUsingParams = function(req, res) {
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db('finance');
//     dbo.collection('budget').find({
//       $where: function() {
//         return;
//       }
//     });
//   });
// };

exports.getESS = function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('finance');

    dbo
      .collection('budget')
      .find({ Fund_Center_L1: 'ESS' })
      .toArray(function(err, result) {
        console.log(typeof result);
        res.send(JSON.stringify(result));
        db.close();
      });
  });
};

exports.getTotalValueByParam = function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('finance');
    dbo
      .collection('budget')
      .aggregate([
        {
          $group: {
            _id: { Fund_Center_L1: '$Fund_Center_L1', Fund_Center_L2: '$Fund_Center_L2' }
            // consumable: { $sum: '$Consumable' },
            // consumed: { $sum: '$Consumed' },
            // precommitment: { $sum: '$Pre_commitment' }
          }
        }
      ])
      .toArray(function(err, result) {
        console.log(typeof result);
        res.send(JSON.stringify(result));
        db.close();
      });
  });
};

exports.getAll = function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('finance');
    dbo
      .collection('budget')
      .find({})
      .toArray(function(err, result) {
        console.log(typeof result);
        res.send(JSON.stringify(result));
        db.close();
      });
  });
};
