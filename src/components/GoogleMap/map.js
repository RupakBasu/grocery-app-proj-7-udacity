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
        center: {lat: 41.881832, lng: -87.623177},
        zoom: 12
       });
       const marker = new google.maps.Marker({
            position: {lat: 41.881832, lng: -87.623177},
            map: map
         });
      })
  }

  render() {
    console.log(this.props)
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
