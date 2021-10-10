import Sequelize from "sequelize";
import { sequelize } from "../connection/database";

//Create the model for Employees
const Employe = sequelize.define("Employees", {
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
  job: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
});

export default Employe;
