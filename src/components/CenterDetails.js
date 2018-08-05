import React from 'react';

const CenterDetails = (props) => (
  <div className="center_details">
    <div>
      <h1 className="center_details__title"> {props.infoIndex} </h1>
      <h2 className="center_details__subtitle">Details </h2>
    </div>
  </div>
);

export default CenterDetails;

// {
//   this.state.isOpen && <CenterDetails infoIndex={this.state.infoIndex}/>
// }