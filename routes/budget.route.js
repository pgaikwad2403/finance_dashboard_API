const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const budget_controller = require('../controllers/budget.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', budget_controller.getOne);

router.get('/getESS', budget_controller.getESS);

router.get('/getAll', budget_controller.getAll);


router.get('/getTotalValueByParam', budget_controller.getTotalValueByParam);

// router.post('/create', budget_controller.addOne);

module.exports = router;