const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BudgetSchema =  new Schema({
    Fund_Center_L1: {type: String, required: true},
    Fund_Center_L2: {type: String, required: true},
    Fiscal_Period: {type: String, required: true},
    Category_L1: {type: String, required: true},
    Category_L2: {type: Number, required: true},
    Consumable: {type: Number, required: true},
    Pre_commitment: {type: Number, required: true},
    Consumed: {type: Number, required: true}
});

module.export = mongoose.model('Budget', BudgetSchema);