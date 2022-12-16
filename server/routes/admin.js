const express = require("express");
const UserController = require("../controllers/userController");
const { authentication } = require("../middlewares/authentication");
const router = express.Router();
const jobRoutes = require("./jobs");
const companyRoutes = require("./companies");

router.post("/login", UserController.login);

router.use(authentication);

router.post("/register", UserController.adminRegister);
router.use("/jobs", jobRoutes);
router.use("/companies", companyRoutes);

module.exports = router;
