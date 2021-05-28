
var platform = new H.service.Platform({
  'apikey': '{gz7iO3jWhqTzu7_wOwrRQKrlIUSxkQSpDkMl0NXSMPg}'
});

var targetElement = document.getElementById('mapContainer');

var defaultLayers = platform.createDefaultLayers();

var map = new H.Map(
  document.getElementById('mapContainer'),
  defaultLayers.vector.normal.map,
  {
    zoom: 10,
    center: { lat: 52.51, lng: 13.4 }
  });

window.addEventListener('resize', () => map.getViewPort().resize());

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

var ui = H.ui.UI.createDefault(map, defaultLayers);