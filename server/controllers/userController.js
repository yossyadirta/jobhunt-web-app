const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models");

class UserController {
  static async adminRegister(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;
      const user = await User.create({
        username,
        email,
        password,
        role: "admin",
        phoneNumber,
        address,
      });
      res.status(201).json({
        id: user.id,
        email: user.email,
      });
    } catch (error) {
      next(error);
    }
  }

  static async userRegister(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;
      const user = await User.create({
        username,
        email,
        password,
        role: "user",
        phoneNumber,
        address,
      });
      res.status(201).json({
        id: user.id,
        email: user.email,
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) {
        throw { name: "Invalid_Credentials" };
      }
      if (!password) {
        throw { name: "Invalid_Credentials" };
      }

      const foundUser = await User.findOne({
        where: {
          email,
        },
      });

      if (!foundUser) {
        throw { name: "Invalid_Credentials" };
      }
      const comparedPassword = comparePassword(password, foundUser.password);

      if (!comparedPassword) {
        throw { name: "Invalid_Credentials" };
      }
      const payload = {
        id: foundUser.id,
        role: foundUser.role,
        username: foundUser.username,
      };
      const access_token = createToken(payload);

      res.status(200).json({
        access_token,
        id: payload.id,
        username: payload.username,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
