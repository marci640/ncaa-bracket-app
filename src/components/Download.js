import React, { Component } from 'react';

class Download extends Component {

  render() {
    return (
      <div className="container">
          <div className="row">
            <div className="col-lg">
              <div className="clinics"> 
                <a className="links" href='/../images/excel-march-madness.xlsx' download> Download a Bracket </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
 
export default Download;
