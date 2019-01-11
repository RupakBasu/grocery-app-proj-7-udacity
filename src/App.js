import React, { Component } from 'react';

import './App.css';

// import {load_google_maps} from './components/googlemaploadingfunction';

import Map from "./components/map";

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
  render() {
    return (
      <div className="App">
        <section id="topBanner">
          <div class="opening">
            <div class="openingText">
              <h1 class= "name"> Grocery Store Locator </h1>
            </div>
          </div>
        </section>
        <section id="navBar">
          <div class="navigationBar">
            <div class="navText">
              <h1 class= "navBarText"> Potential nav bar </h1>
            </div>
          </div>
        </section>
        <Map/>
        <footer id="contact">
          <div class="ending">
            <h2>Let's Keep in Touch!</h2>
            <div class = "contact-info">
                <a href="#" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i> <span class="sr-only">Twitter</span> </a>
                <a href="#" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i> <span class="sr-only">LinkedIn</span></a>
                <a href="#" target="_blank"><i class="fab fa-github-alt" aria-hidden="true"></i><span class="sr-only">Github</span></a>
            </div>
            <p>Copyright 2019 by Rupak Basu</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
