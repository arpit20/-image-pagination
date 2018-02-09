import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ImageTileContainer from './containers/ImageTileContainer'
import FilterContainer from './containers/FilterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
      
          <FilterContainer></FilterContainer>
        </header>
       
       <ImageTileContainer></ImageTileContainer>
      </div>
    );
  }
}

export default App;
