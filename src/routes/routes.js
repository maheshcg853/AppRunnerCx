const userRouter = require("./userRouter");
const express = require("express");
const healthRouter = require("./healthRouter");
const tenantRouter = require("./tenantRouter");
const authRouter = require("./authRouter");

const router = express.Router();

router.use("/health", healthRouter);
router.use("/auth", authRouter);
router.use("/users", userRouter); // admins, event managers, workers, vendors
router.use("/tenants", tenantRouter); // admins, event managers, workers, vendors
// router.use("/events"); // event CRUD & assignment
// router.use("/tasks"); // tasks, status updates
// router.use("/notofications"); // WhatsApp and email integration
// router.use("/tenants"); // tenant entity and middleware to resolve tenant

module.exports = router;

/**
 * users routes
 * localhost:4000/v1/users
 *
 * Below are the file structure
 * userRouter.js
 * userController.js
 *
 * integrate these in routes.js
 * integrate routes login in userRouter.js
 * integrate logic in userController.js
 *
 *
 * To run the appp, do npm run watch
 */
