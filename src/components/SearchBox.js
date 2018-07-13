import React from 'react';

export default class SearchBox extends React.Component {
  state = {
    error: undefined
  };

  searchByLocation = (e) => {
    e.preventDefault();  
    const location = e.target.elements.location.value.trim();
    const error = this.props.searchByLocation(location);

    this.setState(() => ({ error: error }));

    if (!error) {
      e.target.elements.location.value = '';
    }
  };

  render() {
    return (
      <form className="add-option"onSubmit={this.searchByLocation}>
      {this.state.error && <p className="add-option-error"> {this.state.error} </p>}
        <input className="add-option__input" type="text" name="location" />
        <button className="button"> Search your state </button>
      </form>
    );
  }
}