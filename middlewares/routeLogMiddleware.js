const logRoute = (req, res, next) => {
  console.log("Route - ", req.originalUrl);
  next();
};

module.exports = { logRoute };
