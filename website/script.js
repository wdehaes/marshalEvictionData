    mapboxgl.accessToken = 'pk.eyJ1Ijoid2lsbGVtZGVoYWVzIiwiYSI6ImNqbmdqZ2hnYzAzb3ozd3F0aHcxM29idTkifQ.KCJrgwzjDOeW19ps9wyW2Q';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/willemdehaes/cjngld9dc44g92rozsx5t66ee',
      center: [-73.889999, 40.707540],
      zoom: 9.8
    });

    var hoveredZip = null;

    map.on('load', function () {
      // Create a popup, but don't add it to the map yet.
      var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
      });
      map.on("mousemove", "ny-zip-codes-743zug", function (e) {
        console.log(e.id);
        console.log(e.paint);
        console.log(e.source);
        if (e.features.length > 0) {
          if (hoveredZip) {
            var coordinates = [parseFloat(e.features[0].properties.INTPTLON10), parseFloat(e.features[0].properties.INTPTLAT10)];
            var description = e.features[0].properties.ZCTA5CE10;
            popup.setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
          }
          hoveredZip = e.features[0].properties.ZCTA5CE10;
        }
      });

      // When the mouse leaves the state-fill layer, update the feature state of the
      // previously hovered feature.
      map.on("mouseleave", "ny-zip-codes-743zug", function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
        hoveredZip = null;
      });
      // map.on('mouseenter', 'ny-zip-codes-743zug', function (e) {
      //   // Change the cursor style as a UI indicator.
      //   map.getCanvas().style.cursor = 'pointer';
      //   console.log(e.features[0]);
      //   console.log(e.features[0].properties);
      //   var coordinates = [parseFloat(e.features[0].properties.INTPTLON10), parseFloat(e.features[0].properties.INTPTLAT10)];
      //   var description = e.features[0].properties.ZCTA5CE10;

      //   // // Ensure that if the map is zoomed out such that multiple
      //   // // copies of the feature are visible, the popup appears
      //   // // over the copy being pointed to.
      //   // while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      //   //   coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      //   // }

      //   // Populate the popup and set its coordinates
      //   // based on the feature found.
      //   popup.setLngLat(coordinates)
      //   .setHTML(description)
      //   .addTo(map);
      // });

      // map.on('mouseleave', 'ny-zip-codes-743zug', function () {
      //   map.getCanvas().style.cursor = '';
      //   popup.remove();
      // });
    });
