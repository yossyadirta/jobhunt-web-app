const express = require("express");
const router = express.Router();
const JobController = require("../controllers/jobController");

router.get("/", JobController.findAllJobsUser);
router.get("/:id", JobController.findJobById);

module.exports = router;
