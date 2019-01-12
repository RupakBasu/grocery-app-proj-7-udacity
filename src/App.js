import React, { Component } from 'react';

import './App.css';

// import {load_google_maps} from './components/googlemaploadingfunction';

import Map from "./components/map";
import MenuButton from "./components/menuButton";

class App extends Component {

  // state = {
  //   mapShowing = false;
  // };


  // componentDidMount() {
  //   console.log(this);
  //   var map;
  //   initMap() => {
  //     map = new google.maps.Map(document.getElementById('map'), {
  //       center: {lat: -34.397, lng: 150.644},
  //       zoom: 8
  //     });
  //   }
  //
  // }

  toggleMenu(){
    console.log('the menu button was clicked')
  }



  render() {
    return (
      <div className="App">
        <section id="topBanner">
          <div className="opening">
            <div className="openingText">
              <h1 className= "name"> Grocery Store Locator </h1>
            </div>
          </div>
        </section>
        <section id="navBar">
          <div className="navigationBar">
            <div className="navText">
              <h1 className= "navBarText"> Potential nav bar </h1>
              <button onClick = {this.toggleMenu}>
                Locations
              </button>
              <MenuButton/>
            </div>
          </div>
        </section>
        <Map/>
        <footer id="contact">
          <div className="ending">
            <h2>Let's Keep in Touch!</h2>
            <div className = "contact-info">
                <a href="#" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i> <span className="sr-only">Twitter</span> </a>
                <a href="#" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i> <span className="sr-only">LinkedIn</span></a>
                <a href="#" target="_blank"><i className="fab fa-github-alt" aria-hidden="true"></i><span className="sr-only">Github</span></a>
            </div>
            <p>Copyright 2019 by Rupak Basu</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
