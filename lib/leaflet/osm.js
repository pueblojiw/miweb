const tileProvider = https://{s}.tile.openstreetmap.org/${z}/{x}/${y}.png 
let map = L.map('map').setView([-72.64063,2.53130], 5)
L.tileLayer(tileprovider,{
    maxzoom: 18, 
}).addTo(map);