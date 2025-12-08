const healthPost = (req, res) => {
  res.status(200).json({
    success: "success post call",
  });
};

const getHealth = (req, res) => {
  res.status(200).json({
    success: "success get call ",
  });
};

const deleteHealth = (req, res) => {
  res.status(200).json({
    success: "success delete call ",
  });
};

const patchHealth = (req, res) => {
  res.status(200).json({
    success: "success patch call ",
  });
};

module.exports = {
  healthPost,
  getHealth,
  deleteHealth,
  patchHealth,
};
