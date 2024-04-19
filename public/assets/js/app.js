import { frutas } from "./frutas.js";
const listadoFrutas = document.querySelector('#listado-frutas')
frutas.forEach(element => {
    listadoFrutas.innerHTML += `<div class="card col-4" >
    <div class="card-body">
      <h5 class="card-title">${element.nombre}</h5>
    </div>
    <img src="./assets/img/${element.nombre}.png" class="card-img-top" alt="...">
  </div>`
    console.log(element.nombre)
});