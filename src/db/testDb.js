const { getDb } = require("./db");

async function testDbConnection() {
  try {
    // await debugDb();
    const db = getDb();
    const res = await db.one("SELECT 1 AS ok");
    console.log("PostgreSQL connection success:", res.ok);
  } catch (err) {
    console.error("PostgreSQL connection FAILED:", err);
    process.exit(1);
  }
}

const debugDb = async () => {
  // console.log("ENV DB_HOST:", process.env.DB_HOST);
  // console.log("ENV DB_PORT:", process.env.DB_PORT);
  // console.log("ENV DB_NAME:", process.env.DB_NAME);
  // console.log("ENV DB_USER:", process.env.DB_USER);
  // const result = await db.one("SHOW search_path");
  // console.log("search_path =", result.search_path);
  // const info = await db.one(`
  //     select current_database() as db,
  //        current_user as user,
  //        inet_server_addr() as server_ip,
  //        inet_server_port() as server_port,
  //        version()
  //     `);
  // console.log("DB INFO:", info);
  // const schemas = await db.any(
  //   `select schema_name from information_schema.schemata order by 1`
  // );
  // console.log(
  //   "SCHEMAS:",
  //   schemas.map((s) => s.schema_name)
  // );
  // const tables = await db.any(`
  //     select table_schema, table_name
  //     from information_schema.tables
  //     where table_name in ('tenants','users')
  //     order by 1,2
  //   `);
  // console.log("TENANTS/USERS TABLES:", tables);
};

module.exports = { testDbConnection };
