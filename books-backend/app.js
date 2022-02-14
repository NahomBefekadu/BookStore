var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
require("express-async-errors");
const helmet = require("helmet");
const cors = require("cors");

//middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
//routes
//var usersRouter = require("./routes/users");
var indexRouter = require("./routes/index");
const bookRouter = require("./routes/books");

var app = express();

app.use(helmet());
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//routers
app.use("/", indexRouter);
app.use("/api/v1", bookRouter);

// use middleware
app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;
