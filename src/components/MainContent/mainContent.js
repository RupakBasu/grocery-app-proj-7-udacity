import React from 'react';

import Map from '../GoogleMap/map';
import SideNav from '../NavigationDrawer/sideBar';
// import {fourSquarePlaces} from '../FoursquareAPI/foursquareLocationsAPI'

// import * as LocationsAPI from "../FoursquareAPI/foursquareLocationsAPI";

function HiddenDrawer(props) {
  if (!props.show) {
    return null;
  }
  return (
    <SideNav/>
  );
}

class MainContent extends React.Component {

  componentDidMount() {
    // LocationsAPI.fourSquarePlaces().then(resp => console.log("RESP",resp));
}
  render() {
    // console.log('Response')
    console.log(this.props)
    const { sideNavBarShowing } = this.props;
    const { sideNavClicked } = this.props;

    return(
      <div className='mainBodyItems'>
        <HiddenDrawer show={sideNavBarShowing} />
        <Map/>
        {/* <button onClick={sideNavClicked}>
          {sideNavBarShowing ? 'Hide' : 'Show'}
        </button> */}
      </div>
    )
  }
}

export default MainContent;
