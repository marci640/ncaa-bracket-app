import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, MarkerCluster } from 'react-google-maps';
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

class NonClinicMap extends Component {

  render() {
 
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 30.6878086, lng: -88.17402109999999 } }
        defaultZoom = { 8 }
        defaultOptions={{ styles:         
          [
              {
                  "featureType": "water",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "color": "#b5cbe4"
                      }
                  ]
              },
              {
                  "featureType": "landscape",
                  "stylers": [
                      {
                          "color": "#efefef"
                      }
                  ]
              },
              {
                  "featureType": "road.highway",
                  "elementType": "geometry",
                  "stylers": [
                      {
                          "color": "#83a5b0"
                      }
                  ]
              },
              {
                  "featureType": "road.arterial",
                  "elementType": "geometry",
                  "stylers": [
                      {
                          "color": "#bdcdd3"
                      }
                  ]
              },
              {
                  "featureType": "road.local",
                  "elementType": "geometry",
                  "stylers": [
                      {
                          "color": "#ffffff"
                      }
                  ]
              },
              {
                  "featureType": "poi.park",
                  "elementType": "geometry",
                  "stylers": [
                      {
                          "color": "#e3eed3"
                      }
                  ]
              },
              {
                  "featureType": "administrative",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "lightness": 33
                      }
                  ]
              },
              {
                  "featureType": "road"
              },
              {
                  "featureType": "poi.park",
                  "elementType": "labels",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "lightness": 20
                      }
                  ]
              },
              {},
              {
                  "featureType": "road",
                  "stylers": [
                      {
                          "lightness": 20
                      }
                  ]
              }
          ] }}
 
      >
        {this.props.nonClinics.map(clinic => (

          <Marker
            key={clinic.id}
            position= {{lat: parseFloat(clinic.lat), lng: parseFloat(clinic.long)}}
            options= {{
                icon: new google.maps.MarkerImage('/../images/doctor-15.svg',
    null, null, null, new google.maps.Size(40,40)),
              
          }}
            onClick={() => { this.props.toggleInfo(clinic.id) } }
          >
          </Marker>
        ))}

      </GoogleMap>
    ));

    return(
      <div className="map-wrapper">
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
    );

   }
};

export default NonClinicMap;