const createUserReqModel = (tenantUid, username, email, passwordHash, role) => {
  return {
    tenant_uid: tenantUid,
    username,
    email,
    password_hash: passwordHash,
    role,
  };
};

module.exports = {
  createUserReqModel,
};
