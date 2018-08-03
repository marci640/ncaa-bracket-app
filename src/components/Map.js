import React, { Component } from 'react';
import USAMap from "react-usa-map";
 
class Map extends Component {
  
  mapHandler = (event) => {
    alert(this.props.nonClinics.filter(function(clinic){return clinic.state == event.target.dataset.name && clinic.medical_provider == true}).length);
  };
 
  render() {
    return (
      <div className="map">
        <USAMap onClick={this.mapHandler} />
        <div className="average"><span className="price" id="average">&nbsp;</span> average <span id="state"></span> homeowners insurance rate</div>
            <div className="divider"></div>
            <div className="savings"><span className="price" id="savings">&nbsp;</span> your potential savings with a security system
        </div>
      </div>
    );
  }
}
 
export default Map;
