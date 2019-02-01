import React from 'react';

import SideNav from './sideBar';
import Search from './search';

import FourSquareLocations from '../FoursquareAPI/foursquareAPI';

class Suggestions extends React.Component {
  render() {
    console.log(this.props)
    const styles= {

    }

    return(
      <div className='mainBodyItems'>
        <h3>Suggested Location List</h3>
        <Search/>
        <FourSquareLocations/>
      </div>
    )
  }
}

export default Suggestions;
