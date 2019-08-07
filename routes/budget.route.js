const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const budget_controller = require('../controllers/budget.controller');

// a simple test url to check that all of our files are communicating correctly.

router.get('/getESS', budget_controller.getESS);

router.get('/getOne', budget_controller.getOne);

router.get('/getTotalValueByParam', budget_controller.getTotalValueByParam);

router.get('/getParameter', budget_controller.getParameter);

// router.get('/movies', function(req, res, next) {
//   var movies = req.db.get('movies'),
//     query = req.query;

//   // convert year parameter string to int if it exists
//   if (query.hasOwnProperty('year')) {
//     query['year'] = parseInt(query.year);
//   }
//   movies.find(query, function(err, docs) {
//     res.json({ length: docs.length, records: docs });
//   });
// });

// router.post('/create', budget_controller.addOne);

module.exports = router;
