"use strict";
const users = require("../data/users.json");
const companies = require("../data/companies.json");
const jobs = require("../data/jobs.json");
const skills = require("../data/skills.json");
const jobskills = require("../data/jobskills.json");
const { hashPassword } = require("../helpers/bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    users.forEach((el) => {
      el.createdAt = el.updatedAt = new Date();
      el.password = hashPassword(el.password);
    });
    companies.forEach((el) => {
      el.createdAt = el.updatedAt = new Date();
    });
    jobs.forEach((el) => {
      el.createdAt = el.updatedAt = new Date();
    });
    skills.forEach((el) => {
      el.createdAt = el.updatedAt = new Date();
    });
    jobskills.forEach((el) => {
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Users", users, {});
    await queryInterface.bulkInsert("Companies", companies, {});
    await queryInterface.bulkInsert("Jobs", jobs, {});
    await queryInterface.bulkInsert("Skills", skills, {});
    await queryInterface.bulkInsert("JobSkills", jobskills, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Companies", null, {});
    await queryInterface.bulkDelete("Jobs", null, {});
    await queryInterface.bulkDelete("Skills", null, {});
    await queryInterface.bulkDelete("JobSkills", null, {});
  },
};
