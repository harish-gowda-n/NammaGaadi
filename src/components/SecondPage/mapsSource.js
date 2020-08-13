    var originset = false;
    var destinationset = false;
    var origin;
    var destination;

    function initMap() {
      var myLatLng = {
        lat: 13.026917188055844,
        lng: 77.61748632812503
      };

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: myLatLng
      });
      var pickup = document.getElementById('pickup');
      var drop = document.getElementById('drop');

      var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(13.026917188055844, 77.61748632812503),
        new google.maps.LatLng(13.026917188055844, 77.61748632812503));


      var options = {
        bounds: defaultBounds,
        types: ['establishment']
      };

      var pickUpMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        draggable: true,
        title: 'Pickup location'
      });

      var dropMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        draggable: true,
        title: 'drop location'
      });
      pickUpBox = new google.maps.places.Autocomplete(pickup, options);

      dropBox = new google.maps.places.Autocomplete(drop, options);

      pickUpBox.addListener('place_changed', function() {
        var place = pickUpBox.getPlace();
        console.log("got pickup place");
        if (place.length == 0) {
          console.log("no place selected");
          return;
        }
        pickUpMarker.setPosition(place.geometry.location);
        map.setCenter(pickUpMarker.getPosition());
        map.setZoom(15);
        console.log("latittude is " + place.geometry.location.lat() + " longitude is " + place.geometry.location.lng());
        origin = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
        originset = true;

        console.log("origin is set" + origin.lat());
      });

      dropBox.addListener('place_changed', function() {
        var place = dropBox.getPlace();
        console.log("got drop place");
        if (place.length == 0) {
          console.log("no place selected");
          return;
        }
        dropMarker.setPosition(place.geometry.location);
        map.setCenter(dropMarker.getPosition());
        map.setZoom(15);
        console.log("latittude is " + place.geometry.location.lat() + " longitude is " + place.geometry.location.lng());
        destination = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
        destinationset = true;

        console.log("destination is set to" + destination.lat() + "" + destination.lng());

      });
      pickUpMarker.addListener('dragend', function() {
        map.setZoom(15);
        map.setCenter(pickUpMarker.getPosition());
        map.panTo(pickUpMarker.getPosition());
        var lati = pickUpMarker.getPosition().lat();
        var longi = pickUpMarker.getPosition().lng();

        origin = new google.maps.LatLng(lati, longi);
        originset = true;

        console.log("origin is set" + origin.lat());
      });
      dropMarker.addListener('dragend', function() {
        map.setZoom(15);
        map.setCenter(dropMarker.getPosition());
        map.panTo(dropMarker.getPosition());
        var lati = dropMarker.getPosition().lat();
        var longi = dropMarker.getPosition().lng();
        destination = new google.maps.LatLng(lati, longi);
        destinationset = true;

        console.log("destination is set to" + destination.lat() + "" + destination.lng());
      });
    }

    function calculateDistance() {
      if (originset && destinationset) {
        console.log("origin and destion are set");
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix({
          origins: [origin],
          destinations: [destination],
          travelMode: 'DRIVING',
        }, callback);

        function callback(response, status) {
          if (status == 'OK') {
            var origins = response.originAddresses;
            var destinations = response.destinationAddresses;

            for (var i = 0; i < origins.length; i++) {
              var results = response.rows[i].elements;
              for (var j = 0; j < results.length; j++) {
                var element = results[j];
                var distance = element.distance.text;

                var duration = element.duration.text;
                var from = origins[i];
                var to = destinations[j];
                console.log("distance from" + from + "to " + to + "is" + distance);}
              }
              }
            }
          } else if (originset) {
            console.log("destination is not set");
          } else if (destinationset) {
            console.log("origin is not set");
          } else {
            console.log("origin and destination are not set");
          }
        }