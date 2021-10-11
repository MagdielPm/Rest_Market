import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jwt-simple";
import moment from "moment";

const TOKEN_KEY = "Token-Auth";

export async function createNewUser(req, res) {
  const { fullName, email, password } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, 10);
  try {
    let newUser = await User.create(
      {
        fullName: fullName,
        email: email,
        password: encryptedPassword,
      },
      {
        fields: ["fullName", "email", "password"],
      }
    );

    if (!!newUser) {
      return res.status(201).json({
        message: "Sign up successfully",
        data: newUser,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong while creating an user",
      data: {},
    });
  }
}

export async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    if (!!users) {
      res.status(200).json({
        message: "All users fetched successfully",
        data: users,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong while fetching users",
      data: {},
    });
  }
}

export async function userLogin(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!!user) {
      const areEquals = bcrypt.compareSync(password, user.password);
      areEquals
        ? res.status(200).json({
            message: "Login successfully",
            fullName: user.fullName,
            token: createToken(user),
          })
        : res.status(401).json({
            message: "Password not correct, try again",
            data: {},
          });
    } else {
      res.status(404).json({
        message: "User not found, invalid credentials",
        data: {},
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong while fetching a user credentials",
      data: {},
    });
  }
}

const createToken = (user) => {
  const playload = {
    userId: user.id,
    createdAt: moment().unix(),
    expiresAt: moment().add(1, "day").unix(),
  };
  return jwt.encode(playload, TOKEN_KEY);
};
