const reqModels = require("../models/request.model");
const { successRes, errorRes } = require("../models/response.model");
const tenantServices = require("../services/tenant.service");
const userServices = require("../services/user.service");
const utils = require("../utils/utils");

const registerCtrl = async (req, res) => {
  const { tenantId, username, email, password, role } = req.body;
  try {
    const tenant = await tenantServices.getTenantByIdService(tenantId);
    if (!tenant) {
      const invalidTenantRes = errorRes("Tenant not found");
      return res.status(404).json(invalidTenantRes);
    }

    const tenantUid = tenant.uid;
    const passwordHash = await utils.hashPassword(password);

    const payload = reqModels.createUserReqModel(
      tenantUid,
      username,
      email,
      passwordHash,
      role
    );
    const createUserRes = await userServices.createUserService(payload);
    console.log("registerCtrl; createUserRes;", createUserRes);
    return res
      .status(201)
      .json(successRes("Registration Success", createUserRes));
  } catch (error) {
    console.error("registerCtrl", error);
    const erorRes = errorRes("Registration Failed", {}, error.code, error);
    return res.status(400).json(erorRes);
  }
};

module.exports = {
  registerCtrl,
};
