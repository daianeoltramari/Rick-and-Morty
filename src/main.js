import {
  filtroGenero,
  statusFilter,
  speciesFilter,
  orderAlfaFilter,
  calcularPorcentagem,
  searchName,
} from "./data.js";

import dados from "./data/rickandmorty/rickandmorty.js";

function printarCards(dados) {
  document.getElementById("container-dos-cards").innerHTML = dados
    .map(
      (item) => ` 
      <div class="card-info">
        <img src="${item.image}">
        <div class="info-lista">
            <p class="p-lista"><strong>Nome: </strong>${item.name}</p><br>
            <p class="p-lista"><strong>Gênero: </strong>${item.gender}</p><br>      
            <p class="p-lista"><strong>Status: </strong>${item.status}</p><br>
            <p class="p-lista"><strong>Espécie: </strong>${item.species}</p><br>
            <p class="p-lista"><strong>Origem: </strong>${item.origin.name}</p><br>
            <p class="p-lista"><strong>Localização: </strong>${item.location.name}</p><br>
            <p class="p-lista"><strong>Aparece em: </strong>${item.episode.length} episódios</p><br>
        </div> 
     </div>  
  `
    )
    .join("");
}

printarCards(dados.results);

