import React from 'react';

import SideNav from './sideBar';
import Search from './search';

import LocationInfoGenerator from '../FoursquareAPI/APILocationList';

class Suggestions extends React.Component {
  render() {
    const suggestedPlaces = this.props.suggestedPlaces;
    console.log(this.props)
    const styles= {
      sideBarContentFormat:{
        textAlign: 'center',
      },
    }

    return(
      <div className='mainBodyItems'style={styles.sideBarContentFormat}>
        <h3>Suggested Location List</h3>
        <Search/>
        <LocationInfoGenerator suggestedPlaces={suggestedPlaces}/>
      </div>
    )
  }
}

export default Suggestions;
