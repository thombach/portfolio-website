var map;

// init map
function initMap() {
  /*var polytech = {
        lat: 45.184464,
        lng: 5.752969
    }*/
  map = new ol.Map({
    target: "map",
    controls: ol.control.defaults({ attribution: false, rotate: false }),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
        wrapX: false
      }),
      new ol.layer.Vector({
        source: new ol.source.Vector({
          features: [
            new ol.Feature({
              geometry: new ol.geom.Point(
                ol.proj.fromLonLat([5.752969, 45.184464])
              ),
            }),
          ],
        }),
      }),
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([5.752969, 45.184464]),
      zoom: 5,
    }),
  });
}

initMap();
