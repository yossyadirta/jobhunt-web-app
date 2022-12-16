"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JobSkill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      JobSkill.belongsTo(models.Job);
      JobSkill.belongsTo(models.Skill);
    }
  }
  JobSkill.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      JobId: DataTypes.INTEGER,
      SkillId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "JobSkill",
    }
  );
  return JobSkill;
};
