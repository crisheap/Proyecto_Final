const {DataTypes} = require("sequelize");
const { sequelize } = require("../database");



module.exports = (sequelize) =>  {

    sequelize.define('User', {
        Nombre: {
          type: DataTypes.STRING,
          allowNull: false
        },
        Email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,

        },
        Password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      });

};