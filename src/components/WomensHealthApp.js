import React from 'react';
import Header from './Header';
import SearchBox from './SearchBox';
import DetailedGoogleMap from './DetailedGoogleMap';
import CenterDetails from './CenterDetails';
import Map from './Map';

class WomensHealthApp extends React.Component {
  state = {
    isOpen: false,
    clinics: [],
    states: [],
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
      let clinics = data;
      this.setState({clinics: clinics});
    })
  };

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/marci640/womens-health-api/master/db.json').then(results => {
        return results.json();
    }).then(data => {
      let states = data;
      this.setState({states: states});
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Map states={this.state.states}/>
      </div>
    );
  }
}

export default WomensHealthApp;