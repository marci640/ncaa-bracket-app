import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

class NonClinicMap extends Component {

  render() {
 
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 30.6878086, lng: -88.17402109999999 } }
        defaultZoom = { 8 }
      >
        {this.props.nonClinics.map(clinic => (
          <Marker
            key={clinic.id}
            position= {{lat: parseFloat(clinic.lat), lng: parseFloat(clinic.long)}}
            onClick={() => { this.props.toggleInfo(clinic.id) } }
          >

          { ( this.props.isOpen && this.props.infoIndex == clinic.id ) && <InfoBox
            
            // onCloseClick={props.onToggleOpen}
            options={{ closeBoxURL: ``, enableEventPropagation: true }}
          >
            <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
              <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
              </div>
              {clinic.name}
            </div>

          </InfoBox>}

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