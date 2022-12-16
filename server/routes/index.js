const express = require("express");
const router = express.Router();
const adminRoutes = require("./admin");
const userRoutes = require("./user");

router.use("/admin", adminRoutes);
router.use("/user", userRoutes);

module.exports = router;
