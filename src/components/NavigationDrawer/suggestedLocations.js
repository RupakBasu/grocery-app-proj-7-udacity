import React from 'react';

import SideNav from './sideBar';
import FourSquareLocations from '../FoursquareAPI/foursquareAPI';

class Suggestions extends React.Component {
  render() {
    console.log(this.props)
    const styles= {

    }

    return(
      <div className='mainBodyItems'>
        <h3>Suggested Location List</h3>
        <FourSquareLocations />
      </div>
    )
  }
}

export default Suggestions;
