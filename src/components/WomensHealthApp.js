import React from 'react';
import Header from './Header';
import SearchBox from './SearchBox';
import NonClinicMap from './NonClinicMap';
import CenterDetails from './CenterDetails';
import Map from './Map';

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

  searchByLocation = (location) => {
    if (!location) {
      return 'Enter a valid value'
    }
    fetch('http://localhost:3000/api/v1/non_clinics/' + location).then(results => {
        return results.json();
    }).then(data => {
      let nonClinics = data;
      this.setState({nonClinics: nonClinics});
    })
  };

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
        <Header />
        <SearchBox searchByLocation={this.searchByLocation} />
        {
          this.state.isOpen && <CenterDetails infoIndex={this.state.infoIndex}/>
        }
        <Map nonClinics={this.state.nonClinics}/>
      </div>
    );
  }
}

export default WomensHealthApp;