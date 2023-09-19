const express = require("express");
const app = express();
require("dotenv").config();
const ip = "localhost";
const Port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const session = require("express-session");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const path = require("path");
var fs = require("fs");
const morgan = require("morgan");
const xss = require("xss-clean");
const passport = require("passport");
const rateLimit = require("express-rate-limit");
var hpp = require("hpp");
const mongoSanitize = require("express-mongo-sanitize");


const { notFound, errorHandler } = require("./middleware/errorMiddleware");



// Use the express.static middleware to serve static files from the public folder
app.use(express.static(__dirname + '/public'));
// logger.error("hello error")
// logger.debug("heelo debug")
// logger.warn("hello warn")
// logger.info("ghello info")
//app.use(express.static("public"));
const corsOptions = {
  origin: [
    "http://localhost:4000",
    "http://127.0.0.1:5500",

    // your origins here
  ],
  credentials: true,
  exposedHeaders: ["set-cookie"],
};

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hello World",
      version: "1.0.0",
      description: " A simple Express library api",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
    //apis: ["./routes/*.js"]
  },
  apis: ["./routes/*.js"], // files containing annotations as above
};

const openapiSpecification = swaggerJsDoc(options);

var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});

// setup the logger

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: { message: "Too much request" },
  keyGenerator: (req) => {
    // Use the first IP address from X-Forwarded-For header
    return req.headers["x-forwarded-for"]?.split(",")[0] || req.ip;
  },

  // store: ... , // Use an external store for more precise rate limiting
});

// Apply the rate limiting middleware to all requests
app.use(limiter);
//app.use(morgan('combined', { stream: accessLogStream }))
//app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(openapiSpecification));

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        connectSrc: [
          "'self'",
          "http://localhost:4000",
          "http://127.0.0.1:5500",
        ],
      },
    },
  }),
);
app.use(xss());
app.use(cors(corsOptions));
app.use(bodyParser.json());
// app.use(hpp());
// app.use(
//   mongoSanitize({
//     allowDots: true,
//     replaceWith: '_',
//   }),
// );
// app.use(xss())
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    name: "session",
    resave: false,
    saveUninitialized: false,
    maxAge: 24 * 60 * 60 * 100,
  }),
);
app.use(passport.initialize());
app.use(passport.session());





app.get("/", (req, res, next) => {
  // Imagine you're serving a secret treasure map to your users!
  const treasureMap = {
    message: "🗺️ Welcome to the Treasure Hunt API! 🏴‍☠️",
    clues: [
      "🌴 Follow the path of 'api/' to start the journey.",
      "🦜 Look out for the 'X marks the spot' at each endpoint!",
      "⚓ More treasures await as you navigate the API seas!",
    ],
    disclaimer: "Remember, only true adventurers can unlock the secrets...",
    documentation: "/api-docs",
  };

  res.status(200).json(treasureMap);
});


// app.use(express.static(path.join(__dirname , '../client/build')))
// app.get("*" , function (req,res) {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'))

// }
// )

app.use(notFound);
app.use(errorHandler);

mongoose
  .connect(process.env.DB_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(Port, () => {
      console.log(`App listening at http://${ip}:${Port}`);
      console.log(
        "Database Connected : ",
        result.connection.host,
        result.connection.name,
      );
      let val = "Amr006";
    });
  })
  .catch((err) => {
    console.log(err);
  });

//last to catch any wrong url ( needs cool 404 page :) )
