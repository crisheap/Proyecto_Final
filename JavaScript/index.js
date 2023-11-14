//---------------------------------------------------------------------------
const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});


const btnLogin = document.querySelector("#btn-login");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

// Usuario administrador
const users = [
  {
    email: "admin@hotmail.com",
    password: "1234",
    balance: 150
  }
];

btnLogin.addEventListener("click", function (event) {
  event.preventDefault();

  let email = emailInput.value;
  let password = passwordInput.value;

  let loggedUser = users.find((user) => user.email === email && user.password === password);

  if (loggedUser) {

    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    window.location.href ="../html/pagina.html";

  } else {
    alert("¡Ups! Tu correo y contraseña no corresponden, inténtalo nuevamente.");
  }
});



//botón de registro del formulario
let registro = document.getElementById('btn-enviar-datos');

registro.addEventListener('click', function(){
  //alert('tu información a sido registrado')

  let inputNombre = document.getElementById('input-nombre');
  let inputEmail = document.getElementById('input-email');
  let inputContraseña = document.getElementById('input-contraseña');

  if(inputNombre.value == ""){
    alert("Error: El nombre esta vacio.")
  }
  if(inputEmail.value == ""){
    alert("Error: El correo esta vacio.")
  }
  if(inputContraseña.value == ""){
    alert("Error: La contraseña esta vacio.")
  }
});


// Boton de limpiar

let limpiar = document.getElementById('btn-limpiar-datos');

limpiar.addEventListener('click', function (){
  alert('Borraras tu información');

  let inputNombre = document.getElementById('input-nombre');
  inputNombre.value = '';

  let inputEmail = document.getElementById('input-email');
  inputEmail.value = '';

  let inputContraseña = document.getElementById('input-contraseña');
  inputContraseña.value = '';
});

