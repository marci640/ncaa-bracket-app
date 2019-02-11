import React from 'react';
import Header from './Header';
import Download from './Download';
import Score from './Score';
import Papa from 'papaparse';
import 'bootstrap/dist/css/bootstrap.min.css';


class BracketApp extends React.Component {
  state = {
    csvfile: undefined,
    bracket: [],
    finalBracket: [],
    score: 0
  };

  handleChange = event => {
    this.setState({
      csvfile: event.target.files[0]
    });
  }

  importCSV = () => {
    const { csvfile } = this.state;
    Papa.parse(csvfile, {
      complete: this.updateData,
      header: false
    });
  }

  updateData = (result) => {
    var data = result.data;
    console.log(data);
    this.setState({bracket: data});
  }

  componentDidMount() {
    fetch('https://mighty-mesa-91143.herokuapp.com/api/v1/conferences').then(results => {
        return results.json();
    }).then(data => {
      let finalBracket = data;
      this.setState({finalBracket: finalBracket});
      console.log(finalBracket)
    })
  }

  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <div className="row">

            <div className="col-md-4 block">
                <div className="circle">
                  <a href='/../images/excel-march-madness.xlsx' download> 
                  <img className="icon" src="/../images/jersey.svg" /> 
                  </a>
                  <p> Download a Bracket </p>
                </div>
            </div>
                
            <div className="col-md-4 block">
                <div className="circle">
                  <input
                    className="csv-input"
                    id="file"
                    type="file"
                    ref={input => {
                      this.filesInput = input;
                    }}
                    name="file"
                    placeholder={null}
                    onChange={this.handleChange}
                  />
                  <p>Upload a Bracket</p>
                </div>
            </div>

            <div className="col-md-4 block">
              <div className="circle">
                <img className="icon" src="/../images/court.svg" onClick={this.importCSV} />
                <p>Check Your Score!</p>
              </div>
            </div>

          </div>
        </div>

        <Score />
      </div>    
    );
  }
}

export default BracketApp;