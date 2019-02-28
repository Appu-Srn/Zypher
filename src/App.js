import React, { Component } from 'react';


import './App.css';
import Home from './components/home'
import Post from './components/Screen'
import { Route, BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

  
          <Route exact path='/' component={Home}/>
          <Route path='/:post_id' component={Post} />
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
