import Sequelize from "sequelize";

export const sequelize = new Sequelize("rest-market", "postgres", "postgres", {
  host: "127.0.0.1",
  dialect: "postgres",
  logging: false,
});
