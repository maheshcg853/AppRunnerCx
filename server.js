const http = require("http");
const dotenv = require("dotenv"); // checkHere
dotenv.config();

const app = require("./src/app");
const { testDbConnection } = require("./src/db/testDb");
const { initializeDb } = require("./src/db/db");

const server = http.createServer(app);

const port = process.env.PORT || 4001;

console.log("App loads");
const startServer = async () => {
  console.log("startServer loads");
  await initializeDb(); // ⬅️ important

  server.listen(port, async () => {
    console.log("Server is starting", { port });
    await testDbConnection();
    console.log(`Server listening... on port: ${port}`);
  });
};

startServer();
