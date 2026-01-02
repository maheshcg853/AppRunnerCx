const { createClient } = require("redis");

let client;

/**
 * REDIS_URL examples:
 * - Non TLS: redis://my-redis.xxxxxx.ap-south-1.cache.amazonaws.com:6379
 * - TLS:     rediss://my-redis.xxxxxx.ap-south-1.cache.amazonaws.com:6379
 */
function getRedisClient() {
  if (client) return client;

  const redisUrl =
    "rediss://master.em-redis-cluster-info.3xkamd.aps1.cache.amazonaws.com:6379";
  console.log("anv variables", {
    redisUrl,
    SESSION_SECRET: process.env.SESSION_SECRET,
    SESSION_COOKIE_NAME: process.env.SESSION_COOKIE_NAME,
    SESSION_SAMESITE: process.env.SESSION_SAMESITE,
  });
  if (!redisUrl) throw new Error("REDIS_URL is missing");

  const isTls =
    process.env.REDIS_TLS === "true" || redisUrl.startsWith("rediss://");

  client = createClient({
    url: redisUrl,
    socket: {
      tls: isTls,
      // For ElastiCache TLS, many teams set this false.
      // If you want strict validation later, set it to true and use proper CA/certs.
      rejectUnauthorized: process.env.REDIS_REJECT_UNAUTHORIZED !== "false",
    },
  });

  client.on("error", (err) => console.error("Redis error:", err));

  return client;
}

async function connectRedis() {
  const c = getRedisClient();
  if (!c.isOpen) await c.connect();
  return c;
}

module.exports = { getRedisClient, connectRedis };
