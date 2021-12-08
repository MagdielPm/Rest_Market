import Sequelize from "sequelize";

export const sequelize = new Sequelize("rest-market", "", "", {
  host: "",
  dialect: "postgres",
  logging: false,
});
