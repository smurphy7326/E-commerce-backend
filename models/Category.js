const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER, // this allows the answer to be a real number
      allowNull: false, // cannot allow a false answer
      primaryKey: true, 
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING, 
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
