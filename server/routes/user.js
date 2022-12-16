const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const jobRoutes = require("./jobsUser");
const companyRoutes = require("./companies");

router.post("/register", UserController.userRegister);
router.post("/login", UserController.login);

router.use("/jobs", jobRoutes);
router.use("/companies", companyRoutes);

module.exports = router;
