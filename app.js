const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/routes");
const middlewares = require("./middlewares");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(morgan("combined"));

app.use("/v1", middlewares.logRoute, router);

module.exports = app;
