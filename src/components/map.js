import React from 'react';

import {load_google_maps} from './renderingMapParts'

class Map extends React.Component {
  componentDidMount(){
    this.load_map();
  }

  load_map() {
    load_google_maps()
    .then(google => {
       const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
       });
       const marker = new google.maps.Marker({
            position: {lat: -34.397, lng: 150.644},
            map: map
         });
      })
  }

  render() {
    const styles ={
      alignItems:'center'
    }
    return(
      <div>
        <div id="map">

        </div>
      </div>
    )
  }
}

export default Map;
