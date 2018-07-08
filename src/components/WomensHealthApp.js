import React from 'react';
import NonClinicMap from './NonClinicMap';

class WomensHealthApp extends React.Component {
  state = {
    isOpen: false,
    nonClinics: [],
    infoIndex: ""
  };

  toggleInfo = (a) => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    this.setState({infoIndex: a})
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/non_clinics').then(results => {
        return results.json();
    }).then(data => {
      let nonClinics = data;
      this.setState({nonClinics: nonClinics});
    })
  }

  render() {
    return (
      <div>
        <NonClinicMap 
          isOpen={this.state.isOpen}
          nonClinics={this.state.nonClinics}
          infoIndex={this.state.infoIndex}
          toggleInfo={this.toggleInfo}
        />
      </div>
    );
  }
}

export default WomensHealthApp;