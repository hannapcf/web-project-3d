/** API DO GOOGLE MAPS*/

var mapa;

function initMap() {

  var configuracoes = {
    center: {lat: -25.45212754, lng: -49.25276682},
    zoom: 15
  }
      
  mapa = new google.maps.Map(document.getElementById('map'), configuracoes);

  var marcador = new google.maps.Marker({
    position: {lat: -25.441352, lng: -49.258208},
    title: "Loja Matriz 3D+",
    map: mapa
  });

  var marcador = new google.maps.Marker({
    position: {lat: -25.477550, lng: -49.290945},
    title: "Loja 3D+ - Palladium",
    map: mapa
  });

  var marcador = new google.maps.Marker({
    position: {lat: -25.532539, lng: -49.172524},
    title: "Loja 3D+ - Aeroporto",
    map: mapa
  });

  var marcador = new google.maps.Marker({
    position: {lat: -25.428527, lng: -49.214798},
    title: "Loja 3D+ - Jockey",
    map: mapa
  });

}

