//array donde se cargarán los datos recibidos:
let productsArray = [];

//función que recibe un array con los datos, y los muestra en pantalla a través del uso del DOM
function showProductList(array) {
  let htmlContentToAppend = "";

  for (let i = 0; i < array.length; i++) {
    let product = array[i];
    htmlContentToAppend +=
      `
    <div onclick="setProdID(${product.id})" class="list-group-item list-group-item-action categoria"` +
      product.id +
      `>
      <div class="row">
        <div class="col-3">
        <img src="` +
      product.image +
      `" alt="product image" class="img-thumbnail"></img>
        </div>
        <div class="col">
        <div class="d-flex w-100 justify-content-between">
        <div class="mb-1">
        <h4>` +
      product.name +
      " - " +
      product.currency +
      " " +
      product.cost +
      `</h4> 
        <p> ` +
      product.description +
      `</p> 
        </div>
        <small class="text-muted">` +
      product.soldCount +
      ` vendidos</small> 
    </div>
        </div>
      </div>
    </div> `;
  }

  document.getElementById("lista-de-productos").innerHTML = htmlContentToAppend;
}

//función para filtrar los productos
function filterProducts() {
  let initial = parseInt(document.getElementById("initial").value);
  let final = parseInt(document.getElementById("final").value);
  let filteredList = productsArray.filter(
    (product) => product.cost >= initial && product.cost <= final
  );
  showProductList(filteredList);
}

//función para ordenar de forma descendiente
function descending(productsArray) {
  let ordenada=[];
  ordenada=productsArray;
  ordenada.sort((a, b) => {
    let aCost = parseInt(a.cost);
    let bCost = parseInt(b.cost);
    if (aCost < bCost) {
      return 1;
    }
    if (aCost > bCost) {
      return -1;
    }
    return 0;
  });
  showProductList(ordenada);
}

//función para ordenar de forma ascendente
function ascending(productsArray) {
  let ordenada=[];
  ordenada=productsArray;
  ordenada.sort((a, b) => {
    let aCost = parseInt(a.cost);
    let bCost = parseInt(b.cost);

    if (aCost > bCost) {
      return 1;
    }
    if (aCost < bCost) {
      return -1;
    }
    return 0;
  });
  showProductList(ordenada);
}

//función para ordenar según relevancia
function relevancia(productsArray) {
  let ordenada=[];
  ordenada=productsArray;
  ordenada.sort((a, b) => {
    let aSoldCount = parseInt(a.soldCount);
    let bSoldCount = parseInt(b.soldCount);

    if (aSoldCount < bSoldCount) {
      return 1;
    }
    if (aSoldCount > bSoldCount) {
      return -1;
    }
    return 0;
  });
  showProductList(ordenada);
}

//función que me muestra la nueva lista
function show(filteredList) {
  let htmlContentToAppend = "";
  for (let i = 0; i < productsArray.length; i++) {
    let product = productsArray[i];
  }
}

//función para tomar el id del producto y guardarlo en localstorage
function setProdID(id) {
  localStorage.setItem("prodID", id);
  window.location = "product-info.html"; 
}

document.addEventListener("DOMContentLoaded", () => {
  let getID = localStorage.getItem("catID");
  getJSONData(PRODUCTS_URL + getID + ".json").then(function (resultObj) {
    if (resultObj.status === "ok") {
      productsArray = resultObj.data.products;
      showProductList(productsArray);
    }
  });
});

//agrego los clicks a los distintos botones
document.getElementById("filter").addEventListener("click", () => {
  filterProducts();
});
document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("initial").value = "";
  document.getElementById("final").value = "";
  showProductList(productsArray);
});

document.getElementById("sortAsc").addEventListener("click", () => {
  ascending(productsArray);
});
document.getElementById("sortDesc").addEventListener("click", () => {
  descending(productsArray);
});
document.getElementById("relevance").addEventListener("click", () => {
  relevancia(productsArray);
});
showProductList(productsArray);

//DESAFIATE BUSCADOR//

document.addEventListener("keyup", evento=>{
    if (evento.target.matches("#buscadorProductos")){
          if (evento.key ==="Escape")evento.target.value = ""
          document.querySelectorAll(".categoria").forEach(producto =>{
  
            producto.textContent.toLowerCase().includes(evento.target.value.toLowerCase())
              ?producto.classList.remove("muestroBuscados")
              :producto.classList.add("muestroBuscados")
        })
    } 
  })