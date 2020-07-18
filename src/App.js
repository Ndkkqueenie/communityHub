import React, { Component } from 'react';
import './App.css';
import Header from './components/HeaderComponent';
import Home from './components/HomeComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <div className="App-header">
              <Header />
              <Home />
            </div>
          </div>
        </BrowserRouter>
    )
  }
}

export default App;
