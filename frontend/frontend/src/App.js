import React, { Component } from 'react';
import './App.css';

const API_ROUTE = '/api/v1';

class App extends Component {
  constructor() {
    super();
    this.state = {callingApi: true, apiResponse: {}};
    this._callApi();
  }

  _callApi() {
    fetch(API_ROUTE).then((response) => {
      return response.json();
    }).then((responseJSON) => {
      this.setState({callingApi: false, apiResponse: responseJSON});
    });
  }

  get apiStatus() {
    if (this.state.callingApi) {
      return "Calling Api";
    } else {
      return this.state.apiResponse.message;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Rails Docker Container</h2>
        </div>
        <p className="App-intro">
          Api Status: {this.apiStatus}
        </p>
      </div>
    );
  }
}

export default App;
