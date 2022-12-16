const express = require("express");
const router = express.Router();
const JobController = require("../controllers/jobController");

router.get("/", JobController.findAllJobs);
router.get("/:id", JobController.findJobById);
router.post("/", JobController.createJob);
router.put("/:id", JobController.editJob);
router.delete("/:id", JobController.deleteJob);

module.exports = router;
