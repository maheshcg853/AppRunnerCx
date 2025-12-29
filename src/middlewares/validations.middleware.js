const { errorRes } = require("../models/response.model");

const createTenantVal = (req, res, next) => {
  if (!req.body.tenantId || !req.body.name) {
    return res.status(400).json(errorRes("Tenant Id and name are required"));
  }

  next();
};

const getTenantByIdVal = (req, res, next) => {
  if (!req.params) {
    return res.status(400).json(errorRes("Tenant Id is required"));
  }

  next();
};

const authRegisterVal = (req, res, next) => {
  const requiredFields = ["tenantId", "username", "email", "password", "role"];
  let missingFields = [];

  requiredFields.forEach((el) => {
    if (!req.body?.[el]) {
      missingFields.push(el);
    }
  });
  if (missingFields.length) {
    return res.status(400).json(errorRes("Missing fields", { missingFields }));
  }

  next();
};

module.exports = { createTenantVal, getTenantByIdVal, authRegisterVal };
