const { connectRedis } = require("../redis/redisClient");

// not getting used
const saveSessionService = async (key, value, ttlSeconds = 3600) => {
  try {
    const client = await connectRedis();
    await client.set(key, JSON.stringify(value), { EX: ttlSeconds });
    console.log(`Saved to Redis: ${key}`);
    return value;
  } catch (err) {
    console.error("Redis save failed:", err);
    throw { message: "Redis save failed", error: err };
  }
};

const getSessionService = async (key) => {
  try {
    const client = await connectRedis();
    const data = await client.get(`sess:${key}`);
    return data ? JSON.parse(data) : null;
  } catch (err) {
    console.error("Redis get failed:", err);
    throw { message: "Redis get failed", error: err };
  }
};

const deleteSessionService = async (key) => {
  try {
    const client = await connectRedis();
    await client.del(`sess:${key}`);
    const str = `Deleted from Redis: ${key}`;
    console.log(str);
    return str;
  } catch (err) {
    console.error("Redis delete failed:", err);
    throw { message: "Redis delete failed", error: err };
  }
};

module.exports = {
  saveSessionService,
  getSessionService,
  deleteSessionService,
};
