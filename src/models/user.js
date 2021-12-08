import Sequelize from "sequelize";
import { sequelize } from "../connection/database";

<<<<<<< Updated upstream
// User model
=======
//Create the model for Employees
>>>>>>> Stashed changes
const User = sequelize.define("Users", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  fullName: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
});

export default User;
