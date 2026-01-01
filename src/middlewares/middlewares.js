const errorCodes = require("../constants/errorCodes.constants");
const { errorRes } = require("../models/response.model");

const logRoute = (req, res, next) => {
  console.log("Route - ", req.originalUrl);
  next();
};

const requireAuth = (req, res, next) => {
  console.log("my req.session", req.session);
  if (process.env.NODE_ENV === "local") {
    return next();
  }

  if (!req.session || !req.session.user) {
    return res
      .status(401)
      .json(errorRes("Unauthorized", "Please login", errorCodes.UN_AUTH));
  }
  next();
};

const requireRole = (allowedRoles) => {
  return (req, res, next) => {
    if (!req.session || !req.session.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    if (!allowedRoles.includes(req.session.user.role)) {
      return res
        .status(403)
        .json({ message: "Forbidden - insufficient permissions" });
    }
    next();
  };
};

module.exports = { logRoute, requireAuth, requireRole };
