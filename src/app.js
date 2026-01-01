const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(morgan("combined"));

module.exports = app;
