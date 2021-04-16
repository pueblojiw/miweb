const tilesProvider = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png'

let map = L.map ('map').setView([5.96280,-74.59248],12)
 
L.tileLayer(tilesProvider,{
    maxZoom: 18,
}).addTo(map);



