function startHereAPI() {

  // Map informations
  let platform = new H.service.Platform({
    'apikey': 'gz7iO3jWhqTzu7_wOwrRQKrlIUSxkQSpDkMl0NXSMPg'
  });
  
  let targetElement = document.getElementById('mapContainer');
  
  let defaultLayers = platform.createDefaultLayers();
  
  let map = new H.Map(targetElement, defaultLayers.vector.normal.map, {
      zoom: 6,
      center: { lat: -8.36, lng: -35.03 },
      pixelRatio: window.devicePixelRatio || 1
    });
  
  window.addEventListener('resize', () => map.getViewPort().resize());
  
  let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  
  let ui = H.ui.UI.createDefault(map, defaultLayers);

  function addMarkers(map){
    let startIcon = new H.map.Icon('graphics/startIcon.png')
    let finishIcon = new H.map.Icon('graphics/finishIcon.png');

    let startMarker = new H.map.Marker({lat:-8.3678162, lng:-35.0315702}, { icon: startIcon});
    let endMarker = new H.map.Marker({lat:-23.1019916, lng:-46.9665265}, { icon: finishIcon });

    map.addObjects([startMarker, endMarker]);
  };

  // Route information
  let routingParameters = {
    'routingMode': 'fast',
    'transportMode': 'truck',
    // Starting point of the route (Ipojuca - PE):
    'origin': '-8.3678162,-35.0315702',
    // Ending point of the route (Louveira - SP):
    'destination': '-23.1019916,-46.9665265',
    // Must pass through Montes Claros - MG:
    'via': '-16.691261256627154,-43.86789023810279',
    'return': 'polyline'
  };

  let onResult = function(result) {
    if (result.routes.length) {
      result.routes[0].sections.forEach((section) => {
          let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);
  
          let routeLine = new H.map.Polyline(linestring, {
            style: { strokeColor: 'green', lineWidth: 3 }
          });

          map.addObjects([routeLine]);
  
          map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
      });
    }
  };

  let router = platform.getRoutingService(null, 8);
  
  router.calculateRoute(routingParameters, onResult,
    function(error) {
      alert(error.message);
    });

  let vehicleRoute = {
    'routingMode': 'fast',
    'transportMode': 'truck',
    'return': 'polyline'
  };

  window.onload = function() { 
    addMarkers(map);
};

};

document.addEventListener('DOMContentLoaded', startHereAPI);