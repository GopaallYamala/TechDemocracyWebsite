const express = require("express");
const https = require("https");
const path = require("path");
const fs = require("fs");
const app = express();
var properties = require("../config/properties");
var db = require("../config/database");
var log = require("morgan")("dev");
var bodyParser = require("body-parser");
var cors = require("cors");
var nodemailer = require("nodemailer");
var details = require("./details.json");

//home routes
var homeRoutes = require("../api/home/home.routes");
//blog routes
let blogRoutes = require("../api/blog/blog.routes");
//resource routes
let resourceRoutes = require("../api/resource/resource.routes");
//Company routes
let companyRoutes = require("../api/company/company.routes");

//configure bodyparser
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });
//initialise express router
var router = express.Router();
// call the database connectivity function
// configure app.use()
app.use(cors({ origin: "*" }));
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
// db();

// Error handling
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // const allowedOrigins = [
  //   "http://10.0.1.32:4200",
  //   "http://localhost:4200",
  //   "http://127.0.0.1:3000",
  //   "http://localhost:4201",
  // ];
  // const origin = req.headers.origin;
  // if (allowedOrigins.includes(origin)) {
  //   res.setHeader("Access-Control-Allow-Origin", origin);
  // }
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
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
resourceRoutes(router);
companyRoutes(router);

app.use(express.static("../dist/tdc-websitev3.0"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

// intialise server
// app.listen(properties.PORT, (req, res) => {
//   console.log(`Server is running on ${properties.PORT} port.`);
// });

const sslServer = https.createServer({
  key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
}, app)

sslServer.listen(properties.PORT, () => {
  console.log(`Secure server is running... ${properties.PORT}`);
})

app.post("/sendmail", (req, res) => {
  console.log("---- node req came");
  let mailData = req.body;
  console.log(req.body, "-------req body");
  sendMail(mailData, (info) => {
    console.log(`Mail has been sent :)`);
    res.send(info);
  });
});

async function sendMail(data, callback) {
  // creating reusable object with default smtp transporter
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: details.email,
      pass: details.password,
    },
  });

  let mailOptions = {
    from: '"TDC Solutions"', // sender address
    to: data.email, // list of receivers
    subject: "Welcome to Cotelligent", // mail subject
    html: `<h1>Hello ${data.fullName}</h1><br>
    <h3>Thanks for the Message, we will get back to you soon!</h3>`,
  };

  let mailOptionsToAdminstator = {
    from: '"TDC Solutions"', // sender address
    to: "solutions@techdemocracy.com", // list of receivers
    subject: "Attention Required: New Contact Form Submission", // mail subject
    html: `<h1>Hi, This is ${data.fullName}</h1><br>
    <h3>${data.helpText}</h3>`,
  };

  // sending mail with defined transporter object
  // let info = await transporter.sendMail(mailOptions);

  let info = Promise.all([
    transporter.sendMail(mailOptions),
    transporter.sendMail(mailOptionsToAdminstator),
  ]);

  callback(info);
}

module.exports = app;
