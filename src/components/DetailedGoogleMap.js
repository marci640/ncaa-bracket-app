import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, MarkerCluster } from 'react-google-maps';
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

class DetailedGoogleMap extends Component {

  render() {
 
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 30.6878086, lng: -88.17402109999999 } }
        defaultZoom = { 8 }
        defaultOptions={{ styles:         
[
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f1dff1"
            },
            {
                "visibility": "on"
            }
        ]
    }
] }}
 
      >
        {this.props.clinics.map(clinic => (

          <Marker
            key={clinic.id}
            position= {{lat: parseFloat(clinic.lat), lng: parseFloat(clinic.long)}}
            options= {{
              icon: new google.maps.MarkerImage('/../images/' + clinic.medical_provider + '.svg',
    null, null, null, new google.maps.Size(30,30)),
              
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

export default DetailedGoogleMap;

        // <DetailedGoogleMap 
        //   isOpen={this.state.isOpen}
        //   clinics={this.state.clinics}
        //   infoIndex={this.state.infoIndex}
        //   toggleInfo={this.toggleInfo}
        // />