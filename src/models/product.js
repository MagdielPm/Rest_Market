import Sequelize from "sequelize";
import { sequelize } from "../connection/database";

// Product model
const Product = sequelize.define("Product", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    price: {
        type: Sequelize.DECIMAL,
        allowNull: true
        },
    price_per_kg: {
        type: Sequelize.DECIMAL,
        allowNull: true
    },
    stock: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    require_id_to_sell: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});

export default Product;