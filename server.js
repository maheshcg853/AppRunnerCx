const http = require("http");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

const server = http.createServer(app);

const port = process.env.PORT || 4001;

const startServer = () => {
  server.listen(port, () => {
    console.log(`Server listening... on port: ${port}`);
  });
};

startServer();
