const {app, port} = require ("./src/app")
const {sequelize} = require ("./src/database")




//-------------------------- Sincronizamos---------------------------
sequelize.sync({force:false}).then(
    app.listen(port, ()=> {
      console.log(`Servidor levantado en el puerto: ${port}`);
    })
)
.catch((error) => console.log(Error));



//------------------------- Formulario -------------------------------



/*document.getElementById('formulario').addEventListener('sign-in-btn', function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch('http://localhost:3000/base_datos_usuarios', {
    method: 'GET',
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error('Error:', error));
});*/

//-------------------------------------------------------------------------------------
