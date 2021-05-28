/* var platform = new H.service.Platform({
  'apikey': '{gz7iO3jWhqTzu7_wOwrRQKrlIUSxkQSpDkMl0NXSMPg}'
});

var defaultLayers = platform.createDefaultLayers();

// Instantiate the map:
var map = new H.Map(
  document.getElementById('mapContainer'),
  defaultLayers.vector.normal.map,
  {
    center: {lat:-8.3678162, lng:-35.0315702}
  });

var ui = H.ui.UI.createDefault(map, defaultLayers, 'pt-BR');
*/


//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
function moveMapToBerlin(map){
  map.setCenter({lat:52.5159, lng:13.3777});
  map.setZoom(14);
}

var platform = new H.service.Platform({
  apikey: '{gz7iO3jWhqTzu7_wOwrRQKrlIUSxkQSpDkMl0NXSMPg}'
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('mapContainer'),
  defaultLayers.vector.normal.map,{
  center: {lat:50, lng:5},
  zoom: 4,
  pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
window.onload = function () {
  moveMapToBerlin(map);
}