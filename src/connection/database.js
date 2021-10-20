import Sequelize from "sequelize";

export const sequelize = new Sequelize("rest-market", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});
