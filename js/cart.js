const userID = "25801";
let precioUnitario = 0;
let cantidad = document.getElementById("quantity");


//funcion para cargar el carrito del usuario provisto
let carrito = [];
function showCarrito(carrito) {
  precioUnitario = carrito[0].unitCost;
  let prodCarrito = "";
  for (let i = 0; i < carrito.length; i++) {
    prodCarrito += `
    <td><id="fotito"> <img src="${carrito[i].image}" style="width:150px" ></img> </td>
    <td>${carrito[i].name}</th>
    <td>  ${carrito[i].currency}  <span id="precioCarrito"> ${carrito[i].unitCost}</span></td>
    <td><input type="number" class="col-md-2"" id="quantity" min="1" name="quantity" value="${carrito[i].count}" required onchange="actualizoSubtotal()"> <span id="errorCantidad"</span></td>
    <td id="subtotal">  ${carrito[i].currency}  ${carrito[i].unitCost}</td>
    `;
  }
  document.getElementById("cartProducts").innerHTML += prodCarrito;
}

//funion que calcula el subtotal en base a la cantidad de productos
function actualizoSubtotal() {
  let cantidad = document.getElementById("quantity");

  document.getElementById("subtotal").innerHTML =
    "USD" + " " + precioUnitario * cantidad.value;
  document.getElementById("productCostText").innerHTML =
    "USD" + " " + precioUnitario * cantidad.value;
}

// calculo el costo del total, subtotal y envio en base al tipo de envio Premium
function costoEnvioPremium() {
  let envioPremium = document.getElementById("envioPremium");
  let cantidad = document.getElementById("quantity");
  let subtotalCantidad = parseInt(precioUnitario * cantidad.value);
  let porcentajeEnvioPremium = parseInt(subtotalCantidad * 0.15);

  if (envioPremium.checked) {
    document.getElementById("envioText").innerHTML =
      "USD" + " " + porcentajeEnvioPremium;
    alert("EnvioPremium está seleccionado");
    document.getElementById("totalCostText").innerHTML =
      "USD" + " " + (subtotalCantidad + porcentajeEnvioPremium);
    document.getElementById("envioError").innerHTML = " ";
  }
}

// calculo el costo del total, subtotal y envio en base al tipo de envio Express
function costoEnvioExpress() {
  let envioExpress = document.getElementById("envioExpress");
  let cantidad = document.getElementById("quantity");
  let subtotalCantidad = parseInt(precioUnitario * cantidad.value);
  let porcentajeEnvioExpress = parseInt(subtotalCantidad * 0.07);

  if (envioExpress.checked) {
    document.getElementById("envioText").innerHTML =
      "USD" + " " + porcentajeEnvioExpress;
    alert("EnvioExpress está seleccionado");
    document.getElementById("totalCostText").innerHTML =
      "USD" + " " + (subtotalCantidad + porcentajeEnvioExpress);
    document.getElementById("envioError").innerHTML = " ";
  }
}

// calculo el costo del total, subtotal y envio en base al tipo de envio Standard
function costoEnvioStandard() {
  let envioStandard = document.getElementById("envioStandard");
  let cantidad = document.getElementById("quantity");
  let subtotalCantidad = parseInt(precioUnitario * cantidad.value);
  let porcentajeEnvioStandard = parseInt(subtotalCantidad * 0.05);

  if (envioStandard.checked) {
    document.getElementById("envioText").innerHTML =
      "USD" + " " + porcentajeEnvioStandard;
    alert("EnvioStandard está seleccionado");
    document.getElementById("totalCostText").innerHTML =
      "USD" + " " + (subtotalCantidad + porcentajeEnvioStandard);
    document.getElementById("envioError").innerHTML = " ";
  }
}

//función para seleccionar y validar un medio de pago
function validoPago() {
  let credito = document.getElementById("credito");
  let transferencia = document.getElementById("transferencia");
  let nroCuenta = document.getElementById("accountNumb");
  let nroTarjeta = document.getElementById("cardNumb");
  let codigoSeg = document.getElementById("secCode");
  let vencimiento = document.getElementById("venc");
  if (
    credito.checked &&
    (nroTarjeta.value === null ||
      codigoSeg.value === null ||
      vencimiento.value === null ||
      codigoSeg.value === "" ||
      vencimiento.value === "" ||
      nroTarjeta.value === "")
  ) {
    alert("Debes completar los detalles de tu tarjeta de crédito");
  }
  if (
    transferencia.checked &&
    (nroCuenta.value === null || nroCuenta.value === "")
  ) {
    alert("Debes completar los detalles de tu cuenta bancaria");
  }
}

//función que muestra una alerta de éxito
function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

//función que deshabilita los campos de tarjeta de crédito y selecciona transferencia como medio de pago
function elijoTransferencia() {
  let credito = document.getElementById("credito");
  let transferencia = document.getElementById("transferencia");
  let nroCuenta = document.getElementById("accountNumb");
  let nroTarjeta = document.getElementById("cardNumb");
  let codigoSeg = document.getElementById("secCode");
  let vencimiento = document.getElementById("venc");
  let errorPago = "";
  if (transferencia.checked) {
    pagoElegido = transferencia.value;

    nroCuenta.disabled = false;
    nroTarjeta.disabled = true;
    codigoSeg.disabled = true;
    vencimiento.disabled = true;
    document.getElementById("payMeth").innerHTML = "Transferencia bancaria";
    document.getElementById("errorPago").innerHTML =
      "Completa los datos de tu cuenta bancaria";
    document.getElementById("pagoError").innerHTML = " ";
  }
}

//función que deshabilita los campos de tarjeta de cuenta bancaria y selecciona crédito como medio de pago
function elijoCredito() {
  let credito = document.getElementById("credito");
  let transferencia = document.getElementById("transferencia");
  let nroCuenta = document.getElementById("accountNumb");
  if (credito.checked) {
    pagoElegido = credito.value;
    nroCuenta.disabled = true;
    let errorPago = "";
    document.getElementById("payMeth").innerHTML = "Tarjeta de crédito";
    document.getElementById("errorPago").innerHTML =
      "Completa los datos de tu tarjeta de crédito";
    document.getElementById("pagoError").innerHTML = " ";
  }
}

//función que realiza las validaciones del formulario
function todoValido() {
  let direccion = document.getElementById("inputAddress");
  let ciudad = document.getElementById("inputCity");
  let esquina = document.getElementById("inputCorner");
  let departamento = document.getElementById("inputState");
  let numeroPuerta = document.getElementById("inputDoorNr");
  let cantidad = document.getElementById("quantity");
  let envioStandard = document.getElementById("envioStandard");
  let envioExpress = document.getElementById("envioExpress");
  let envioPremium = document.getElementById("envioPremium");
  let credito = document.getElementById("credito");
  let transferencia = document.getElementById("transferencia");
  let nroCuenta = document.getElementById("accountNumb");
  let nroTarjeta = document.getElementById("cardNumb");
  let codigoSeg = document.getElementById("secCode");
  let vencimiento = document.getElementById("venc");
  let inputGroup = document.getElementsByName("envio");

  if (direccion.value === null || direccion.value === "") {
    direccion.classList.add("is-invalid", "was-validated");
  }
  if (ciudad.value === null || ciudad.value === "") {
    ciudad.classList.add("is-invalid");
  }
  if (esquina.value === null || esquina.value === "") {
    esquina.classList.add("is-invalid");
  }
  if (
    departamento.value === null ||
    departamento.value === "" ||
    departamento.value === "Elige tu departamento"
  ) {
    departamento.classList.add("is-invalid");
  }
  if (cantidad.value === null || cantidad.value === "" || cantidad.value < 1) {
    alert("Debes seleccionar la cantidad de productos que deseas comprar");
    document.getElementById("errorCantidad").innerHTML =
      "Debes seleccionar la cantidad de productos que deseas comprar";
  }
  if (numeroPuerta.value === null || numeroPuerta.value === "") {
    numeroPuerta.classList.add("is-invalid");
  }
  if (
    !envioStandard.checked &&
    !envioExpress.checked &&
    !envioPremium.checked
  ) {
    document.getElementById("envioError").innerHTML =
      "Debes seleccionar un método de envío";
  }
  if (!credito.checked && !transferencia.checked) {
    document.getElementById("pagoError").innerHTML =
      "Debes seleccionar una forma de pago";
  }
}

document.addEventListener("DOMContentLoaded", function (e) {
  //json para cargar el carrito
  getJSONData(CART_INFO_URL + userID + EXT_TYPE).then(function (resultObj) {
    if (resultObj.status === "ok") {
      showCarrito(resultObj.data.articles);
    }
  });
});

//elijo los envios
document.getElementById("envioExpress").addEventListener("change", costoEnvioExpress, false);
document.getElementById("envioPremium").addEventListener("change", costoEnvioPremium, false);
document.getElementById("envioStandard").addEventListener("change", costoEnvioStandard, false);

//elijo credito
document.getElementById("credito").addEventListener("click", () => {
  elijoCredito();
});

//elijo transferencia
document.getElementById("transferencia").addEventListener("click", () => {
  elijoTransferencia();
});

//validar los datos al comprar
document.getElementById("comprar").addEventListener("click", () => {
  let direccion = document.getElementById("inputAddress");
  let ciudad = document.getElementById("inputCity");
  let esquina = document.getElementById("inputCorner");
  let departamento = document.getElementById("inputState");
  let numeroPuerta = document.getElementById("inputDoorNr");
  let cantidad = document.getElementById("quantity");
  let envioStandard = document.getElementById("envioStandard");
  let envioExpress = document.getElementById("envioExpress");
  let envioPremium = document.getElementById("envioPremium");
  let credito = document.getElementById("credito");
  let transferencia = document.getElementById("transferencia");
  let nroCuenta = document.getElementById("accountNumb");
  let nroTarjeta = document.getElementById("cardNumb");
  let codigoSeg = document.getElementById("secCode");
  let vencimiento = document.getElementById("venc");
  let inputGroup = document.getElementsByName("envio");


  if (!direccion.checkValidity()) {
    direccion.classList.add("is-invalid");
  } else {
    direccion.classList.replace("is-invalid", "is-valid");
  }

  if (ciudad.value === null || ciudad.value === "") {
    ciudad.classList.add("is-invalid");
  } else {
    ciudad.classList.replace("is-invalid", "is-valid");
  }
  if (esquina.value === null || esquina.value === "") {
    esquina.classList.add("is-invalid");
  } else {
    esquina.classList.replace("is-invalid", "is-valid");
  }
  if (
    departamento.value === null ||
    departamento.value === "" ||
    departamento.value === "Elige tu departamento"
  ) {
    departamento.classList.add("is-invalid");
  } else {
    departamento.classList.replace("is-invalid", "is-valid");
  }
  if (cantidad.value === null || cantidad.value === "" || cantidad.value < 1) {
    alert("Debes seleccionar la cantidad de productos que deseas comprar");
    document.getElementById("errorCantidad").innerHTML =
      "Debes seleccionar la cantidad de productos que deseas comprar";
  }
  if (numeroPuerta.value === null || numeroPuerta.value === "") {
    numeroPuerta.classList.add("is-invalid");
  } else {
    numeroPuerta.classList.replace("is-invalid", "is-valid");
  }
  if (
    !envioStandard.checked &&
    !envioExpress.checked &&
    !envioPremium.checked
  ) {
    document.getElementById("envioError").innerHTML =
      "Debes seleccionar un método de envío";
  }
  if (!credito.checked && !transferencia.checked) {
    document.getElementById("pagoError").innerHTML =
      "Debes seleccionar una forma de pago";
  }

  if (credito.checked || transferencia.checked) {
    validoPago();
  }

  if (direccion.checkValidity() && ciudad.checkValidity() && esquina.checkValidity()  && cantidad.checkValidity()  && numeroPuerta.checkValidity() && departamento.checkValidity() && (envioStandard.checked || envioPremium.checked || envioExpress.checked) && (credito.checked || transferencia.checked))
   {
  showAlertSuccess(); 
  }
});