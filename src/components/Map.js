import React, { Component } from 'react';
import USAMap from "react-usa-map";
import stateAbbreviations from 'states-abbreviations';

class Map extends Component {
  state = {
    abortionClinic: 664,
    fakeClinic: 3282,
    currentState: "United States"
  }
  
  mapHandler = (event) => {
    const stateAbbrev = event.target.dataset.name

    const abortionClinicCount = this.props.nonClinics.filter(function(clinic){return clinic.state == stateAbbrev && clinic.medical_provider == true}).length

    const fakeClinicCount = this.props.nonClinics.filter(function(clinic){return clinic.state == stateAbbrev && clinic.medical_provider == false}).length

    const fullStateName = stateAbbreviations[stateAbbrev];
  
    this.setState(() => ({ currentState: fullStateName }))
    this.setState(() => ({ abortionClinic: abortionClinicCount }));
    this.setState(() => ({ fakeClinic: fakeClinicCount }));

  };
 
  render() {
    return (
      <div className="map">
        <USAMap width="630" onClick={this.mapHandler} />
        <div className="average"> 
          <img className="baby" src="/../images/true.svg" /> 
          <br/>
          Number of Abortion Clinics in {this.state.currentState}:
          <span className="price"> 
            {this.state.abortionClinic} 
          </span> 
         
        </div>
           
        <div className="savings">
          <img className="baby" src="/../images/bible.svg" /> 
          <br/>
          Number of Crisis Pregnancy Centers in {this.state.currentState}:
          <span className="price"> 
            {this.state.fakeClinic}
          </span> 
          
        </div>

      </div>
    );
  }
}
 
export default Map;
