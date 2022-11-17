//función para iniciar sesión, valida que ingrese ambos datos y guarda el usuario en localstorage
function login (){
    let user = document.getElementById('email').value;
    let password = document.getElementById('password').value;

if (user==="" || password ===""){
    document.getElementById("alert-danger").classList.add("show");
}else {
    localStorage.setItem('email',user); 
    location.href= 'index.html';
}
}

//ejecuto la función de login al hacer click en el botón
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('login-button').addEventListener('click',()=>{
        login();
    })
})

//Ejecuto validaciones para el registro y evito que se envíe el formulario si las validaciones no son correctas
(function () {
    'use strict'
    let validationNeded = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(validationNeded)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();