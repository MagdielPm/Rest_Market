import Sequelize from "sequelize";
import { sequelize } from "../connection/database";

//Create the model for Customers
const Customer = sequelize.define("Customers", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  fullName: {
    type: Sequelize.STRING,
  },
  numberPhone: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
});

export default Customer;
