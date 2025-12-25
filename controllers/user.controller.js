const { dummyUsersemail} = require("../database");

const getAllUsers = (req, res) => {
  const fakeUsers = [
    { id: 1, name: "likith", role: "intern" },
    { id: 2, name: "lohith", role: "employee" },
  ];
 
  res.status(200).json({
    success: true,
    data: fakeUsers,
  });
};
 
const getUserById = (req, res) => {
  const { id } = req.params;
 
  res.status(200).json({
    success: true,
    data: { id, name: "Dummy User", role: "worker" },
  });
};
 
const createUser = (req, res) => {
  const { name, email, role } = req.body;
 
  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: {
      id: 3,
      name,
      email,
      role,
    },
  });
};
 
const loginUser = (req, res) => {
  const { email, password } = req.body;
 
  if (email === "test@example.com" && password === "password") {
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token: "fake-jwt-token",
    });
  }
 
  res.status(401).json({
    success: false,
    message: "Invalid credentials",
  });
};


const getMe = (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is required",
    });
  }

  const user = dummyUsersemail.find((u) => u.email === email);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  return res.status(200).json({
    success: true,
    data: {
      user
    },
  });
};

module.exports = { getAllUsers, getUserById, createUser, loginUser, getMe };