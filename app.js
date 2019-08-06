const express = require('express');
const bodyParser = require('body-parser');

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/finance';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(dev_db_url);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
// console.log(db.db('budget'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const budget = require('./routes/budget.route');
const app = express();

app.use('/budget', budget);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let port = 8000;

app.listen(port, () => {
  console.log('Server is up and listening to ' + port);
});
