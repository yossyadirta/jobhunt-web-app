const { Company } = require("../models/index");

class CompanyController {
  static async findAllCompanies(req, res, next) {
    try {
      let data = await Company.findAll();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async findCompanyById(req, res, next) {
    try {
      const { id } = req.params;
      let data = await Company.findByPk(id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async createCompany(req, res, next) {
    try {
      let { name, companyLogo, location, email, description } = req.body;
      let data = await Company.create({
        name,
        companyLogo,
        location,
        email,
        description,
      });
      res.status(201).json({
        message: `Success create Company`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async editCompany(req, res, next) {
    try {
      const { id } = req.params;
      const { name, companyLogo, location, email, description } = req.body;
      await Company.update(
        {
          name,
          companyLogo,
          location,
          email,
          description,
        },
        { where: { id } }
      );
      res.status(200).json({
        message: `Success update Company`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteCompany(req, res, next) {
    try {
      let { id } = req.params;
      let data = await Company.destroy({
        where: { id },
      });
      if (!data) {
        throw { name: "DATA_NOT_FOUND", model: "Company", id };
      }
      res.status(200).json({
        message: `Success delete id: ${id}`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CompanyController;
