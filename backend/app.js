const express = require('express')
const app = express()
var properties = require('../config/properties');
var db = require('../config/database');

app.use((req, res, next) => {
  console.log(`First Middleware`);
  next();
})

app.use((req, res, next) => {
  res.send(`Vanakkam SirVaaduu..`)
})

// call the database connectivity function
db();

app.listen(properties.PORT, (req, res) => {
    console.log(`Server is running on ${properties.PORT} port.`);
})

module.exports = app;
