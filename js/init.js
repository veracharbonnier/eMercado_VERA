const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

//función para mostrar el spinner de carga:
let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

//función para ocultar el spinner de carga:
let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

//función que realiza el fetch() a la url recibida y devuelve un objeto con los datos y el estado de la respuesta:
let getJSONData =function (url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//función que lleva al login del usuario
document.addEventListener("DOMContentLoaded", ()=> {
  let user = localStorage.getItem("email"); //obtengo datos de localStorage
  if (user == undefined){
    alert("Inicia sesión para continuar");
    location.href = "login.html";
    } else {
  document.getElementById("email").innerHTML = user;
   }

})

//funcion para ver el usuario como pide el entregable 2
 let user = localStorage.getItem("email");
document.getElementById("input").innerHTML += user;

//cerrar sesion
document.getElementById("bye-bye").addEventListener("click", ()=>{
  localStorage.removeItem("email");
  document.getElementById("warning").classList.add("show");
})


/*
//DESAFIATE 1: Autenticación con Google //

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBjOAoT8Kl8KXBM1xpaR7UwxNH51USl0_E",
    authDomain: "obligatorio-jap-vera.firebaseapp.com",
    projectId: "obligatorio-jap-vera",
    storageBucket: "obligatorio-jap-vera.appspot.com",
    messagingSenderId: "177815905420",
    appId: "1:177815905420:web:62921726f36f7da1b247a9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  import { getAuth, signInWithRedirect } from "firebase/auth";

signInWithRedirect(auth, provider);

import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

*/