"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Job.belongsTo(models.User, {
        foreignKey: "authorId",
      });
      Job.belongsTo(models.Company, {
        foreignKey: "companyId",
      });
      Job.belongsToMany(models.Skill, {
        through: "JobSkill",
      });
    }
  }
  Job.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Job title is required" },
          notEmpty: { msg: "Job title is required" },
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: { msg: "Job description is required" },
          notEmpty: { msg: "Job description is required" },
        },
      },
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Company is required" },
          notEmpty: { msg: "Company is required" },
        },
      },
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Author is required" },
          notEmpty: { msg: "Author is required" },
        },
      },
      jobType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Job type is required" },
          notEmpty: { msg: "Job type is required" },
        },
      },
    },
    {
      sequelize,
      modelName: "Job",
    }
  );
  return Job;
};
