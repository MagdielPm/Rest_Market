import Sequelize from "sequelize";

export const sequelize = new Sequelize("rest-market", "", "", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});
