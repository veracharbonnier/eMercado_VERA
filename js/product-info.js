//función para tomar el ID del producto y guardarlo en localstorage
function setProdID(id) {
  localStorage.setItem("prodID", id);
  window.location = "product-info.html"; 
}

//función para ver el producto seleccionado
function showEachProduct(array) {
  let htmlContentToAppend = "";
  htmlContentToAppend += `  
   <div class="container"> <h3> <strong>${array.name}</strong></h3>
   <img src="${array.images[0]}"></img><br>
   <p> <strong>Precio:<br> </strong>${array.cost}   ${array.currency}<br>
   <strong>Descripción:<br> </strong>${array.description}<br>
   <strong>Categoría: <br></strong>${array.category}<br>
   <strong> Cantidad de vendidos:<br></strong> ${array.soldCount}<br><hr>
   <span id="rel"> <strong> Productos relacionados:<br><br></strong> ${mostrarRelacionados(array.relatedProducts)}</span>
      <strong> Más imágenes:</strong> <br>`

  for (i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  {
    htmlContentToAppend += `  
<img src="${array.images[1]}"></img>
<img src="${array.images[2]}"></img>
<img src="${array.images[3]}"></img></p></div>`;
  }
  document.getElementById("show-each").innerHTML = htmlContentToAppend;
}

//función para mostrar los productos relacionados
function mostrarRelacionados(array){
let relacionados = "";
//for (let i=0; i< array.length; i++){
  relacionados+=`  
  <span id="relacionados1" onclick="setProdID(${array[1].id})"<br>
  ${array[1].name}<br>
  <img src="${array[1].image}"></img></span>
<br>
<hr>
<span id="relacionados2" onclick="setProdID(${array[0].id})"<br>
${array[0].name}<br>
  <img src="${array[0].image}"></img></span>
<br>
<hr>`;

return relacionados;}

//funcion para ver comentarios del producto
let comentario = [];
function showComments(comentarios) {
  let htmlContentToAppend = "";
  for (let i = 0; i < comentarios.length; i++) {
    let comentario = comentarios[i];
    htmlContentToAppend += `
    <p> <small> <span class="h5"> <strong> ${comentario.user} </strong> </span> - 
   ${comentario.dateTime} - <span>${estrellas(comentario.score)}</span><br>
    ${comentario.description}</small></p><hr>`;
  }
  document.getElementById("load-comments").innerHTML = htmlContentToAppend;
}

//función que convierte el score del arreglo en estrellas
function estrellas (score){
  stars = "";
  for (let i = 1; i <= 5; i++){
      if (i <= score) {
          stars += '<i class="fas fa-star checked" ></i>';
      } else{
          stars += '<i class="far fa-star checked" ></i>';
      }
  }
  return stars
}

document.addEventListener("DOMContentLoaded", function (e) {
  let prodID = localStorage.getItem("prodID");
  //json para mostrar el producto
  getJSONData(PRODUCT_INFO_URL + prodID + EXT_TYPE).then(function (resultObj) {
    if (resultObj.status === "ok") {
      showEachProduct(resultObj.data);
    }
  });
  document.getElementById("cat-list-container").innerHTML;
  
  //json para mostrar los comentarios
  getJSONData(PRODUCT_INFO_COMMENTS_URL + prodID + EXT_TYPE).then(function (
    resultObj
  ) {
    if (resultObj.status === "ok") {
      showComments(resultObj.data);
    }
  });
  document.getElementById("load-comments").innerHTML;
  addComment();

//función para enviar un comentario
  document
    .getElementById("send-comment")
    .addEventListener("click", function () {
      alert("Comentario enviado con éxito");
    });
});

//--------desafiate comentarios, falta terminar----------

function addComment () {
  let nuevoComentario = document.getElementById("miComentario");
  document.getElementById("send-comment").addEventListener("click", function () {
   document.getElementById("nuevoComentario").innerHTML = nuevoComentario.value;})}
 

/*function sendComment (){
    opinion = document.getElementById("opinion").value;
    if {
    opinion = undefined || puntuacion = undefined; {
        alert("Debe proporcionar su opinión y puntuación para publicar un comentario")
    }}
else {
    alert("Comentario enviado con éxito")
}*/

/*function comentar(){
  let usuario ={}
  usuario.nombre = document.getElementById('nombre').value; // Tomo los datos que necesito
  usuario.comentario = document.getElementById('comentario').value;
  comentarios.push(usuario); //Con push los agrego al arreglo
  showComments(comentarios); //Vuelvo a mostrar el arreglo, pero ahora actualizado.
}*/


//-----------------Desafiate Carrusel, ignorar por ahora--------------

/*showImagesGallery(product.images);
let relProdContent = "";
product.relatedProducts.forEach(function(relProduct) {
    relProdContent += `
    <div class= "card list-group-item-action cursor-active m-2" onclick="toProd($) //incompleto
    <img src="${relProduct.image}" class="card-img-top" alt="${relProduct.name}"
    <div class="card-body">
    <h5 class= "card-title">${relProduct.name}</h5>
    </div>
    </div>
    `;
    document.getElementById("relatedProductsContainer").innerHTML = relProdContent;
});*/