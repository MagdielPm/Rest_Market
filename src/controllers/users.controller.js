import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jwt-simple";
import moment from "moment";
import { OSQP } from "../services/logger.service";

import LoggerService from "../services/logger.service";
var logger = new LoggerService();
logger = logger.logger;

const TOKEN_KEY = "Token-Auth";

export async function createNewUser(req, res) {
  logger.log({
    level: "info",
    log_type: "request_info",
    verb: req.method,
    route: "/api/users/",
    query_parameters: req.query,
    headers: req.headers,
  });
  logger.log({
    level: "debug",
    log_type: "request_debug",
    verb: req.method,
    route: "/api/users/",
    body: req.body,
  });
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
    // Log db query
    logger.log({
      level: "debug",
      log_type: "query",
      verb: req.method,
      route: "/api/employees/",
      query: `INSERT INTO USERS (fullName, email, password) VALUES (${fullName}, ${OSQP(
        email
      )}, ${OSQP(encryptedPassword)})`,
    });
    if (!!newUser) {
      logger.log({
        level: "debug",
        log_type: "method_call",
        verb: req.method,
        route: "/api/users/",
        method_name: "res.status(201).json()",
        method_parameters: {
          message: "User created successfully.",
          data: newUser,
        },
      });
      return res.status(201).json({
        message: "Sign up successfully",
        data: newUser,
      });
    }
  } catch (error) {
    console.log(error);
    logger.log({
      level: "error",
      log_type: "error",
      verb: req.method,
      error_message: "Something went wrong while creating the user",
      stack_trace: error.stack,
    });
    res.status(500).json({
      message: "Something went wrong while creating an user",
      data: {},
    });
  }
}

export async function getAllUsers(req, res) {
  logger.log({
    level: "info",
    log_type: "request_info",
    verb: req.method,
    route: "/api/users/",
    query_parameters: req.query,
    headers: req.headers,
  });
  logger.log({
    level: "debug",
    log_type: "request_debug",
    verb: req.method,
    route: "/api/users/",
    body: req.body,
  });
  try {
    const users = await User.findAll();
    logger.log({
      level: "debug",
      log_type: "query",
      verb: req.method,
      route: "/api/users/",
      query: "SELECT * FROM Users",
    });
    if (!!users) {
      res.status(200).json({
        message: "All users fetched successfully",
        data: users,
      });
      logger.log({
        level: "debug",
        log_type: "method_call",
        verb: req.method,
        route: "/api/users/",
        method_name: "res.status(200).json()",
        method_parameters: {
          message: "All users fetched successfully.",
          data: users,
        },
      });
    }
  } catch (error) {
    console.log(error);
    logger.log({
      level: "error",
      log_type: "error",
      verb: req.method,
      error_message: "Something went wrong while fetching users.",
      stack_trace: error.stack,
    });
    res.status(500).json({
      message: "Something went wrong while fetching users",
      data: {},
    });
  }
}

export async function userLogin(req, res) {
  logger.log({
    level: "info",
    log_type: "request_info",
    verb: req.method,
    route: "/api/users" + req.path,
    query_parameters: req.query,
    headers: req.headers,
  });
  logger.log({
    level: "debug",
    log_type: "request_debug",
    verb: req.method,
    route: "/api/users" + req.path,
    body: req.body,
  });
  const { email, password } = req.body;
  try {
    if (email.length === 0) {
      logger.log({
        level: "debug",
        log_type: "method_call",
        verb: req.method,
        route: "/api/users/",
        method_name: "res.status(400).json()",
        method_parameters: {
          message: "Email empty",
        },
      });
      return res.status(400).json({
        messge: "Error invalid email, please enter a valid email",
        data: {},
      });
    }

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (user === null) {
      logger.log({
        level: "debug",
        log_type: "method_call",
        verb: req.method,
        route: "/api/users/",
        method_name: "res.status(404).json()",
        method_parameters: {
          message: "Error user not found",
        },
      });
      return res.status(404).json({
        message: "Error user not found",
        data: { emal: email },
      });
    }

    if (!!user) {
      const areEquals = bcrypt.compareSync(password, user.password);
      if (!areEquals) {
        logger.log({
          level: "debug",
          log_type: "method_call",
          verb: req.method,
          route: "/api/users/",
          method_name: "res.status(401).json()",
          method_parameters: {
            message: "Error invalid password",
          },
        });
        return res.status(401).json({
          message: "Error invalid password",
          emal: email,
        });
      }

      res.status(200).json({
        message: "Login successfully",
        fullName: user.fullName,
        token: createToken(user),
      });
      logger.log({
        level: "debug",
        log_type: "method_call",
        verb: req.method,
        route: "/api/users/",
        method_name: "res.status(200).json()",
        method_parameters: {
          message: "Login successfully",
        },
      });
    }
  } catch (error) {
    console.log(error);
    logger.log({
      level: "error",
      log_type: "error",
      verb: req.method,
      error_message: "Something went wrong while fetching a user credentials",
      stack_trace: error.stack,
    });
    return res.status(500).json({
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
