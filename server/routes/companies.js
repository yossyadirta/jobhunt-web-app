const express = require("express");
const router = express.Router();
const CompanyController = require("../controllers/companyController");

router.get("/", CompanyController.findAllCompanies);
router.get("/:id", CompanyController.findCompanyById);
router.post("/", CompanyController.createCompany);
router.put("/:id", CompanyController.editCompany);
router.delete("/:id", CompanyController.deleteCompany);

module.exports = router;
