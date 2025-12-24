exports.getAllUsers = (req, res) => {
  const fakeUsers = [
    { id: 1, name: "likith", role: "intern" },
    { id: 2, name: "lohith", role: "employee" },
  ];

  res.status(200).json({
    success: true,
    data: fakeUsers,
  });
};

exports.getUserById = (req, res) => {
  const { id } = req.params;


  res.status(200).json({
    success: true,
    data: { id, name: "Dummy User", role: "worker" },
  });
};

exports.createUser = (req, res) => {
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


exports.loginUser = (req, res) => {
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
