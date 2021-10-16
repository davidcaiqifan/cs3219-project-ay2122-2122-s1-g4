const express = require('express');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 4000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(express.json())
const cors = require('cors');
app.use(cors())
// Configuring the database
const dbConfig = require('./config/db.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// Connecting to the database
console.log(dbConfig.productionurl);
mongoose.connect(dbConfig.productionurl, {
  useNewUrlParser: true
  }).then(() => {
    console.log("Successfully connected to the database");
  }).catch(err => {
    console.log('Could not connect to the database.', err);
    process.exit();
});

// define a root/default route
app.get('/', (req, res) => {
  res.json({"message": "Hello World"});
});

// ........

// Require Users routes
const auctionDetailRoutes = require('./src/routes')
// using as middleware
app.use('/api/auctiondetails', auctionDetailRoutes)
// ........

// listen for requests
module.exports = app.listen(port, () => {
  console.log(`Node server is listening on port ${port}`);
});
