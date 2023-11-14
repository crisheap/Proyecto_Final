//-----------------------------------------sequelize ---------------------------------------------
const {Sequelize} = require('sequelize');
const  userModel = require("./models/user")
const{Pool} = require('pg');

const sequelize = new Sequelize('postgres://postgres:3193240767@localhost:5432/base_datos_usuarios');

const pool = new Pool({
    user: 'postgress',
    host: 'localhost',
    database: 'base_datos_usuarios',
    password: '3193240767',
    port: 5432,
});

userModel (sequelize)

const {User} = sequelize.models



module.exports = {sequelize, ...Sequelize.models};