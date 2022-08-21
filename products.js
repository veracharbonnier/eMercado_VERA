//array donde se cargarán los datos recibidos:
let catArray = [];

//función que recibe un array con los datos, y los muestra en pantalla a través del uso del DOM
function showCatList(array){
    let htmlContentToAppend = "";
  
  
  for (let i = 0; i < array.length; i++){
    let product = array[i];
    htmlContentToAppend += `
    <div class="list-group-item list-group-item-action">
      <div class="row">
        <div class="col-3">
        <img src="` + product.image + `" alt="product image" class="img-thumbnail"></img>
        </div>
        <div class="col">
        <div class="d-flex w-100 justify-content-between">
        <div class="mb-1">
        <h4>`+ product.name + " - " + product.currency + " " + product.cost + `</h4> 
        <p> `+ product.description +`</p> 
        </div>
        <small class="text-muted">` + product.soldCount +` vendidos</small> 
    </div>
        </div>
      </div>
    </div> `
  }

document.getElementById("lista-de-productos").innerHTML = htmlContentToAppend; 
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            catArray = resultObj.data;
            showCatList(catArray.products);
        }
    });
});

