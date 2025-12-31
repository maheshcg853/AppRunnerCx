const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const YAML = require("yamljs");
const swaggerUi = require("swagger-ui-express");
const router = require("./routes/routes");
const middlewares = require("./middlewares");
const path = require("path");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(morgan("combined"));

const version = "/v1";

app.use(version, middlewares.logRoute, router);
app.use("/events", eventsRouter);

// swagger
const swaggerDocument = YAML.load(path.join(__dirname, "../swagger.yaml"));
app.use(`/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
