const {DataTypes} = require('sequelize');
const sequelize = require('../database');
const User = sequelize.define('users', {
    id:{
        type:DataTypes.INTEGER,
        AutoIncrement: true,
        primaryKey: true
    },
    firstName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    age:{
        type: DataTypes.STRING,
        allowNull: false
    }

},
{
    timestamps: false
});

module.exports = User;