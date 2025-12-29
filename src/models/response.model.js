function successRes(message, details = {}, optionalCode) {
  return {
    code: optionalCode || "0000",
    message,
    details,
  };
}

function errorRes(message, details = {}, optionalCode, error) {
  if (error?.code === "23502") {
    return {
      code: "23502",
      message: "Missing Fields",
      details: { message: `${error?.column} is required` },
    };
  }

  // return { status: 500, message: "Internal server error" };

  if (error?.code === "23505") {
    return {
      code: "23505",
      message: "Duplicate value",
      details: { message: `Constraint: ${error?.constraint}` },
    };
  }

  return {
    code: optionalCode || "9999",
    message,
    details,
  };
}

module.exports = {
  successRes,
  errorRes,
};
