const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configuración de PostgreSQL y otras dependencias aquí

// Ruta para registrar un usuario
app.post('/signup', (req, res) => {
  // Procesa la información del formulario de registro y almacénala en la base de datos
});

// Ruta para iniciar sesión
app.post('/login', (req, res) => {
  // Verifica las credenciales en la base de datos y genera un token de sesión si son válidas
});

// Otros middlewares y configuraciones aquí




import { Client } from 'pg'
const obtenerUsuarios = async () => {

    const client = new Client({
        user: 'servers',
        host: 'database.server.com',
        database: 'postgreSQL',
        password: '3193240767',
        port: 5432,
        ssl:{
            rejectUnauthorized: false,
        },
      });

    await client.connect()

    const res = await client.query("select * from usuarios")

    const result = res.rows;

    await client.end()

    return result;
}

obtenerUsuarios().then((result) => {
    console.log(result);
});

app.listen(3000, () => {
  console.log('Servidor en funcionamiento en el puerto 3000');
});