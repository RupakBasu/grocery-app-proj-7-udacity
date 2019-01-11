import React from 'react';

// This map js file represents the map component.

class Map extends React.Component {
  componentDidMount(){
    console.log(this);
    // the console.log helps us identify what props are passed.
  }

  render() {
    return(
      <div>
        <div id="map">
          <h1>This is a map of Chicago</h1>
        </div>
      </div>
    )
  }
}

export default Map;
