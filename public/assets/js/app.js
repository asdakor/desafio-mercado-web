
const carrito = []

$('#boton-modal').on('click', function () {
  const mimodal = document.querySelector('#modal-contenido')
  //NECESITO VER COMO EVITAR LOS INNERHTML
  carrito.forEach(element => {
    mimodal.innerHTML += `<img src="/assets/img/${element}.png" style="width:200px"></img>`
  });
})


function AgregarQuitar(producto) {
  const enCarrito = carrito.find((e) => e === producto.attributes[0].value)
  if (!enCarrito) {
    carrito.push(producto.attributes[0].value)
    $(producto).css("opacity", "0.5")
  } else {
    carrito.splice(carrito.indexOf(producto.attributes[0].value), 1)
    $(producto).css("opacity", "1")
  }
  console.log(carrito)
}

$('#img-banana').on('click', function () {
  AgregarQuitar(this)
})
$('#img-cebollas').on('click', function () {
  AgregarQuitar(this)
})
$('#img-pimenton').on('click', function () {
  AgregarQuitar(this)
})
$('#img-lechuga').on('click', function () {
  AgregarQuitar(this)
})
$('#img-papas').on('click', function () {
  AgregarQuitar(this)
})
$('#img-tomate').on('click', function () {
  AgregarQuitar(this)
})