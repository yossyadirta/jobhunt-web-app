const {
  Job,
  User,
  Company,
  Skill,
  sequelize,
  JobSkill,
} = require("../models/index");
const { Op } = require("sequelize");

class JobController {
  static async findAllJobs(req, res, next) {
    try {
      const data = await Job.findAll({
        order: [["createdAt", "ASC"]],
        include: [
          { model: Skill, order: [["id", "desc"]] },
          { model: User, attributes: { exclude: ["password"] } },
          { model: Company },
        ],
      });
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async findJobById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Job.findOne({
        include: [
          { model: Skill },
          { model: User, attributes: { exclude: ["password"] } },
          { model: Company },
        ],
        where: { id },
      });

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async findAllJobsUser(req, res, next) {
    try {
      let options = {};
      options.include = [
        {
          model: Company,
        },
      ];

      let { page, search } = req.query;
      let limit = 6;
      let offset = 0;
      let totalPage;

      console.log(search);

      // pagination
      if (page !== "" && typeof page !== "undefined") {
        limit = 6;
        options.limit = limit;
        if (page.number !== "" && typeof page.number !== "undefined") {
          let offset = page.number * limit - limit;
          options.offset = offset;
        } else {
          limit = 6;
          offset = 0;
          page.number = 1;
          totalPage = 1;
          options.limit = limit;
          options.offset = offset;
        }
      }

      if (!page) {
        page = {};
        totalPage = 1;
        page.number = 1;
      }

      //search
      if (search) {
        options = {
          limit: limit,
          offset: offset,
          order: [["id", "ASC"]],
          where: {
            [Op.and]: [{ title: { [Op.iLike]: `%${search}%` } }],
          },
          include: Company,
        };
      }

      const data = await Job.findAndCountAll(options);

      if (!data || data.rows.length === 0) {
        throw { name: "DATA_NOT_FOUND", model: "Jobs" };
      }

      totalPage = data.count;
      data.totalPage = Math.ceil(totalPage / limit);

      if (!data.totalPage) {
        data.totalPage = 1;
      }
      data.currentPage = page.number ? +page.number : 0;
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async createJob(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { title, description, companyId, jobType, skill, level } = req.body;
      console.log(req.body);
      const authorId = req.user.id;
      const job = await Job.create(
        {
          title,
          description,
          companyId,
          authorId,
          jobType,
        },
        { transaction: t }
      );

      const mapSkill = skill.map((el) => {
        return {
          name: el,
        };
      });

      level.forEach((el, index) => {
        mapSkill[index].level = el;
      });

      const createSkill = await Skill.bulkCreate(mapSkill, {
        transaction: t,
      });

      const mapJobSkill = createSkill.map((el) => {
        return {
          JobId: job.id,
          SkillId: el.id,
        };
      });

      const createJobSkill = await JobSkill.bulkCreate(mapJobSkill, {
        transaction: t,
      });

      await t.commit();
      res.status(201).json({
        message: `Success create Job`,
      });
    } catch (error) {
      console.log(error);
      await t.rollback();
      next(error);
    }
  }

  static async editJob(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { id } = req.params;

      const findData = await JobSkill.findAll(
        {
          where: {
            JobId: id,
          },
        },
        {
          transaction: t,
        }
      );

      const mapFindData = findData.map((el) => {
        return el.SkillId;
      });

      await Job.destroy(
        {
          where: {
            id,
          },
        },
        {
          transaction: t,
        }
      );

      await Skill.destroy(
        {
          where: {
            id: mapFindData,
          },
        },
        {
          transaction: t,
        }
      );

      const { title, description, companyId, jobType, skill, level } = req.body;
      const authorId = req.user.id;
      const job = await Job.create(
        {
          title,
          description,
          companyId,
          authorId,
          jobType,
        },
        { transaction: t }
      );

      const mapSkill = skill.map((el) => {
        return {
          name: el,
        };
      });

      level.forEach((el, index) => {
        mapSkill[index].level = el;
      });

      const createSkill = await Skill.bulkCreate(mapSkill, {
        transaction: t,
      });

      const mapJobSkill = createSkill.map((el) => {
        return {
          JobId: job.id,
          SkillId: el.id,
        };
      });

      const createJobSkill = await JobSkill.bulkCreate(mapJobSkill, {
        transaction: t,
      });

      await t.commit();
      res.status(201).json({
        message: `Success update Job`,
      });
    } catch (error) {
      console.log(error);
      await t.rollback();
      next(error);
    }
  }

  // static async findJobById(req, res, next) {
  //   try {
  //     let { id } = req.params;
  //     let data = await Job.findByPk(id, {
  //       include: [
  //         {
  //           model: Company,
  //         },
  //         {
  //           model: Skill,
  //         },
  //         {
  //           model: User,
  //           attributes: { exclude: ["password"] },
  //         },
  //       ],
  //     });
  //     if (!data) {
  //       throw { name: "DATA_NOT_FOUND", model: "Job", id };
  //     }
  //     res.status(200).json(data);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  static async deleteJob(req, res, next) {
    try {
      let { id } = req.params;
      let data = await Job.destroy({
        where: { id },
      });
      if (!data) {
        throw { name: "DATA_NOT_FOUND", model: "Job", id };
      }
      res.status(200).json({
        message: `Success delete id: ${id}`,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = JobController;
