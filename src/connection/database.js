import Sequelize from "sequelize";

export const sequelize = new Sequelize("rest-market", "postgres", "postgres", {
  host: "192.168.113.132",
  dialect: "postgres",
  logging: false,
});
