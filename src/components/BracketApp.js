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
    console.log(this.state.bracket)
    this.calculateScore(this.state.bracket)
  }

  calculateScore = (bracket_data) => {
    var points = 0

    var second_round = []
    var regional_semifinals = []
    var regional_finals = []
    var final_four = []
    var national_championship = []
    var winner = []

    bracket_data.map( function(row) {
      second_round.push(row[4], row[35])
      regional_semifinals.push(row[7], row[32])
      regional_finals.push(row[10], row[29])
      final_four.push(row[13], row[26])
      national_championship.push(row[14], row[22])
      winner.push(row[17])
    })

    this.state.finalBracket.map( function(conference) {
      conference.teams.map( function(team) {
        if(team['second_round'] && second_round.includes(team.college_name)) {
          points += 1
        }
        if(team['regional_semifinals'] && regional_semifinals.includes(team.college_name)) {
          points += 2
        }
        if(team['regional_finals'] && regional_finals.includes(team.college_name)) {
          points += 4
        }
        if(team['final_four'] && final_four.includes(team.college_name)) {
          points += 8
        }
        if(team['national_championship'] && national_championship.includes(team.college_name)) {
          points += 16
        }
        if(team['winner'] && winner.includes(team.college_name)) {
          points += 32
        } 
      })
    })
    this.setState({score: points});
    console.log(this.state.score)
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

        <Score score={this.state.score} />
      </div>    
    );
  }
}

export default BracketApp;