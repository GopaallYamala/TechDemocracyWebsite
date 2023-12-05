const express = require("express");
const app = express();
var properties = require("../config/properties");
var db = require("../config/database");
var log = require("morgan")("dev");
var bodyParser = require("body-parser");

//home routes
var homeRoutes = require("../api/home/home.routes");
//blog routes
let blogRoutes = require("../api/blog/blog.routes");
//configure bodyparser
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });
//initialise express router
var router = express.Router();
// call the database connectivity function
// configure app.use()
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// app.use((req, res, next) => {
//   console.log(`First Middleware`);
//   next();
// });

// app.use((req, res, next) => {
//   res.send(`Vanakkam SirVaaduu..`);
// });

// call the database connectivity function
db();

// Error handling
app.use(function (req, res, next) {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  const allowedOrigins = [
    "http://127.0.0.1:8020",
    "http://localhost:4200",
    "http://127.0.0.1:9000",
    "http://localhost:4201",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization"
  );
  next();
});
// use express router
app.use("/api", router);
//call heros routing
homeRoutes(router);
blogRoutes(router);

app.use(express.static("../dist/tdc-websitev3.0"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

// intialise server
app.listen(properties.PORT, (req, res) => {
  console.log(`Server is running on ${properties.PORT} port.`);
});

module.exports = app;
