//------------------------------express ---------------------------------------------

const express = require("express");
const cors = require("cors");
const{Pool} = require('pg');

const app = express();
const port = 3000;

//------------------------------ Middleware ----------------------------------------
app.use(express.json())
app.use(cors());

const{User} = require("./database");

//------------------------------ Rutas ---------------------------------------------
app.get("/Users", async (req, res)=> {
    const allUsers = await UserActivation.findAll();
    res.status(200).json(allUsers);
});

app.post("/Users",async (req, res)=> {
    const newUser = await User.create({Nombre: "Administrador", Email: "admin@hotmail.com", Password: "1234"});
    res.status(200).json("Usuario Creado Con Éxito");
});

app.get("/", async (req, res)=> {
    res.send(
        "Bienvenido al mundo de Look at My"
    );
});

module.exports = {app, port};
