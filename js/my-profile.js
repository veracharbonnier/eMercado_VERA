// busco todos los campos del formulario que debo validar, los valido y evito el envío en caso de que los datos no estén correctos. Agrego una alerta cuando se envían los datos.
(function () { 
    'use strict'

    let validaciones = document.querySelectorAll('.needs-validation')
    
    Array.prototype.slice.call(validaciones)
      .forEach(function (formulario) {
        formulario.addEventListener('submit', function (event) {
          if (!formulario.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          else {
            agregoAlerta()
          }
          formulario.classList.add('was-validated')
        }
        , false)
      })
  })()

//alerta de la función anterior
function agregoAlerta() {
  let alerta = document.getElementById("guardeDatitos")
  alerta.classList.add("show")
}

//variables para guardar los datos en localstorage
let nombre1= document.getElementById("name1");
let nombre2= document.getElementById("name2");
let apellido1= document.getElementById("lastname1");
let apellido2= document.getElementById("lastname2");
let telefono= document.getElementById("telefono");
let foto= document.getElementById("perfilimg");
let guardoPerfil= document.getElementById("guardoPerfil");


//función para que los datos guardados en el perfil carguen junto con la pagina
function recuperoValores() {
  let name1 = localStorage.getItem("nombre1");
  let name2 = localStorage.getItem("nombre2");
  let lastname1 = localStorage.getItem("apellido1");
  let lastname2 = localStorage.getItem("apellido2");
  let phone = localStorage.getItem("telefono");
  document.getElementById("name1").value = name1;
  document.getElementById("name2").value = name2;
  document.getElementById("lastname1").value = lastname1;
  document.getElementById("lastname2").value = lastname2;
  document.getElementById("telefono").value = phone;
}


document.addEventListener("DOMContentLoaded", ()=> {
  recuperoValores();
    let user = localStorage.getItem("email"); //obtengo el usuario de localStorage
  document.getElementById("inputEmail").value = user;//se lo agrego al input del mail
  
   nombre1.addEventListener("focusout", function() {//cuando salgo del campo de nombre1, se guarda el valor en localstorage
  localStorage.setItem("nombre1", nombre1.value); 
   })

   nombre2.addEventListener("focusout", function() {
    localStorage.setItem("nombre2", nombre2.value); 
   })

    apellido1.addEventListener("focusout", function() {
    localStorage.setItem("apellido1", apellido1.value); 
   })

    apellido2.addEventListener("focusout", function() {
    localStorage.setItem("apellido2", apellido2.value); 
   })

  telefono.addEventListener("focusout", function() {
  localStorage.setItem("telefono", telefono.value); 
   })
  });

/// ----------- Intento del desafiate E7, ignorar por ahora ------------- ///

  /*  bannerImage = document.getElementById('fotitoUsuario');
imgData = getBase64Image(bannerImage);
localStorage.setItem("imgData", imgData);

  function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
*/