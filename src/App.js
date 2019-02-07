import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar/navBar'
import WelcomeCarousel from './components/welcome/welcome'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MapBox from './components/MapBox/MapBox'

class App extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  render() {
    return (
      <div className="App">
        <div >
          <NavBar/>
        </div>
        <div className="main">
          <Router>
            <Switch>
              <Route exact path="/"
                render={props=>(<WelcomeCarousel/>)}
              />
              <Route exact path="/local"
                render={props=>(<MapBox/>)}
                />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
