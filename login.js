function login (){
    let user = document.getElementById('email').value;
    let password = document.getElementById('password').value;

if (user==="" || password ===""){
    alert ("Debes ingresar tus datos para continuar");
}else {
    localStorage.setItem('email',user); //almaceno el usuario en localStorage
    location.href= 'index.html';
}
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('login-button').addEventListener('click',()=>{
        login();
    })
})
