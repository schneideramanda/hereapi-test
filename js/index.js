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
    let startIcon = new H.map.Icon('https://image.flaticon.com/icons/png/512/71/71222.png');
    let finishIcon = new H.map.Icon('https://image.flaticon.com/icons/png/512/39/39940.png');

    let startMarker = new H.map.Marker({lat:-8.3678162, lng:-35.0315702}, { icon: startIcon});
    let endMarker = new H.map.Marker({lat:-23.1019916, lng:-46.9665265}, { icon: finishIcon });

    map.addObjects([startMarker, endMarker]);
  };

  // Right route information

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
              style: { strokeColor: 'green', lineWidth: 5 }
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
  
    // Truck routing

    function addPolylineToMap(map) {
      var lineString = new H.geo.LineString();

      routeData.forEach(data => {
        lineString.pushPoint(data)
      });

      let polylineRoute = new H.map.Polyline(lineString, {
        style: { strokeColor: 'red', lineWidth: 5 }
      });

      map.addObjects([polylineRoute]);
    };

    // Dangerous area
    function firstDangerousArea(map){
      map.addObject(new H.map.Circle(
        // LOUVEIRA - SP
        {lat:-23.089533, lng:-46.949870},
        // Radius of dangerous area (200 Km)
        200000,
        {
          style: {
            strokeColor: 'rgba(255, 0, 0, 0.7)',
            lineWidth: 2,
            fillColor: 'rgba(255, 0, 0, 0.7)' 
          }
        },
      ));
    };

    function secondDangerousArea(map){
      map.addObject(new H.map.Circle(
        // IPOJUCA - PE
        {lat:-8.398104, lng:-35.061195},
        // Radius of dangerous area (50 Km)
        50000,
        {
          style: {
            strokeColor: 'rgba(255, 0, 0, 0.7)',
            lineWidth: 2,
            fillColor: 'rgba(255, 0, 0, 0.7)' 
          }
        }
      ));
    };

    // Safe Area
    function safeArea(map){
      map.addObject(new H.map.Circle(
      // CD UNILEVER - IPOJUCA/PE
      {lat:-8.367838, lng:-35.03406},
      // Radius of safe area (1 Km)
      1000,
      {
        style: {
        strokeColor: 'rgba(0, 128, 0, 0.7)',
        lineWidth: 2,
        fillColor: 'rgba(0, 128, 0, 0.7)'
        }
      }
      ));
    };

    // Stations markers
    function addStationsMarkers(map) {
      stationData.forEach(data => {
        let stationMarker = new H.map.Marker({lat: data.lat, lng: data.lng});
        const html = `<div><b>Nome do Posto:</b> ${data.posto}</div>` + 
        `<div><b>Cidade/UF:</b> ${data.cidade}</div>` + 
        `<div><b>Endereço:</b> ${data.endereco}</div>` +
        `<div><b>Telefone:</b> ${data.fone}</div>`;
        stationMarker.setData(html)
        stationMarker.addEventListener("tap", function (evt) {
          const bubble = new H.ui.InfoBubble(evt.target.getGeometry(),
            {
              content: evt.target.getData()
            }
          );
          ui.addBubble(bubble);
        }, false);
        map.addObject(stationMarker);
      })
    };

    addPolylineToMap(map);
    addMarkers(map);
    firstDangerousArea(map);
    secondDangerousArea(map);
    safeArea(map);
    addStationsMarkers(map);
};

document.addEventListener('DOMContentLoaded', startHereAPI);