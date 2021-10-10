import Sequelize from "sequelize";
import { sequelize } from "../connection/database";

//Create the model for Foods
const Food = sequelize.define("Foods", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      foodName: {
        type: Sequelize.STRING,
      },
      foodDescription: {
        type: Sequelize.STRING,
      },
      ingredients: {
        type: Sequelize.STRING,
      },

});

export default Food;
