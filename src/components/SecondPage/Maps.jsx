import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";
import AutoComplete from "react-google-autocomplete";
require('dotenv').config();
Geocode.setApiKey(process.env.REACT_APP_geocodeAPIKey);

var getDistanceBetweenPoints = require("get-distance-between-points");

class Maps extends React.Component {
  state = {
    zoom: 10,
    height: 300,
    pickupCity: "",
    pickupArea: "",
    dropCity: "",
    dropArea: "",
    mapPosition: {
      lat: 12.807481427332635,
      lng: 77.48748632812503,
    },
    pickUpLocation: {
      lat: 12.807481427332635,
      lng: 77.48748632812503,
    },
    dropLocation: {
      lat: 12.999973911837973,
      lng: 77.61748632812503,
    },
  };

  geoCoding(lat, long, type) {

    Geocode.fromLatLng(lat, long).then((response) => {
      const address = response.results[0].formatted_address
      const addressArray = response.results[0].address_components

      if (type === 'pickup') {
        let pickupCity = this.getCity(addressArray)
        let pickupArea = this.getArea(addressArray)
        console.log("Pickup : " + pickupCity + ", " + pickupArea);
        this.setState({
          zoom: 10,
          pickupCity: pickupCity,
          pickupArea: pickupArea,
          pickUpLocation: {
            lat: lat,
            lng: long,
          },
          mapPosition: {
            lat: lat,
            lng: long,
          },
        });
      } else {
        let dropCity = this.getCity(addressArray)
        let dropArea = this.getArea(addressArray)
        console.log("Drop : " + dropCity + ", " + dropArea);

        this.setState({
          zoom: 10,
          dropCity: dropCity,
          dropArea: dropArea,
          dropLocation: {
            lat: lat,
            lng: long,
          },
          mapPosition: {
            lat: lat,
            lng: long,
          },
        });
      }
    });
  }

  pickupMarkerDraggend = (event) => {
    let pickUpLat = event.latLng.lat();
    let pickUpLng = event.latLng.lng();
    this.geoCoding(pickUpLat, pickUpLng, "pickup")
  };

  getCity = (addressArray) => {
    let city = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (
        addressArray[i].types[0] &&
        "administrative_area_level_2" === addressArray[i].types[0]
      ) {
        city = addressArray[i].long_name;

        return city;
      }
    }
  };

  getArea = (addressArray) => {
    let area = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray[i].types.length; j++) {
          if (
            "sublocality_level_1" === addressArray[i].types[j] ||
            "locality" === addressArray[i].types[j]
          ) {
            area = addressArray[i].long_name;
            return area;
          }
        }
      }
    }
  };

  dropMarkerDraggend = (event) => {
    let dropLocationLat = event.latLng.lat();
    let dropLocationLng = event.latLng.lng();
    this.geoCoding(dropLocationLat, dropLocationLng, "drop")
  };

  onPickUpBoxSelected = (place) => {
    this.geoCoding(place.geometry.location.lat(), place.geometry.location.lng(), "pickup");
  };
  onDropBoxSelected = (place2) => {
    this.geoCoding(place2.geometry.location.lat(), place2.geometry.location.lng(), "drop");
  };

  sendData = () => {
    var distanceInMeters = getDistanceBetweenPoints.getDistanceBetweenPoints(
      this.state.pickUpLocation.lat,
      this.state.pickUpLocation.lng, // Lat, Long of point A
      this.state.dropLocation.lat,
      this.state.dropLocation.lng // Lat, Long of point B
    );
    let data = {
      pickup: {
        pickLat: this.state.pickUpLocation.lat,
        pickLong: this.state.pickUpLocation.lng,
      },
      drop: {
        dropLat: this.state.dropLocation.lat,
        dropLong: this.state.dropLocation.lng,
      },
      distance: distanceInMeters,
      pickupArea: this.state.pickupArea,
      pickupCity: this.state.pickupCity,
      dropArea: this.state.dropArea,
      dropCity: this.state.dropCity,
    };
    this.props.parentCallback(data);
  };

  render() {
    const MapWithAMarker = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          defaultZoom={this.state.zoom}
          defaultCenter={{
            lat: this.state.mapPosition.lat,
            lng: this.state.mapPosition.lng,
          }}
        >
          <Marker
            draggable={true}
            onDragEnd={this.pickupMarkerDraggend}
            position={{
              lat: this.state.pickUpLocation.lat,
              lng: this.state.pickUpLocation.lng,
            }}
            title="Pick up location"
            label="Pick up location"
          />

          <Marker
            draggable={true}
            onDragEnd={this.dropMarkerDraggend}
            position={{
              lat: this.state.dropLocation.lat,
              lng: this.state.dropLocation.lng,
            }}
            title="Drop location"
            label="Drop location"
          />

          <AutoComplete
            style={{ width: "70%", margin: "1rem auto 0 auto" }}
            types={(["establishment"], ["(regions)"])}
            componentRestrictions={{ country: "in" }}
            onPlaceSelected={this.onPickUpBoxSelected}
            placeholder="Enter the pickup location"
          />
          <AutoComplete
            style={{ width: "70%", margin: "1rem auto 0 auto" }}
            types={(["establishment"], ["(regions)"])}
            componentRestrictions={{ country: "in" }}
            onPlaceSelected={this.onDropBoxSelected}
            placeholder="Enter the drop location"
          />
        </GoogleMap>
      ))
    );

    this.sendData();

    return (
      <MapWithAMarker
        googleMapURL={"https://maps.googleapis.com/maps/api/js?key="+process.env.REACT_APP_geocodeAPIKey+"&v=3.exp&libraries=geometry,drawing,places"}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default Maps;
