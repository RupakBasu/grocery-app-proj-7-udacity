import React from 'react';

import Map from '../GoogleMap/map';
import SideNav from '../NavigationDrawer/sideBar';
import * as Locations from '../FoursquareAPI/foursquareLocationsAPI';
import LocationInfoGenerator from '../FoursquareAPI/APILocationList';

function HiddenDrawer(props) {
  if (!props.show) {
    return null;
  }
  return (
    <SideNav />
  );
}

class MainContent extends React.Component {
  state={
    location:[]
  };

  // componentDidMount(){
  //   Locations.fourSquarePlaces().then(resp => console.log('RESP',resp));
  // }

  componentDidMount(){
    Locations.fourSquarePlaces().then(resp =>
      this.setState({location: resp})
    );
  }
  // by calling set state thats how we update the state

  render() {
    console.log(this.state.location);

    const { sideNavBarShowing } = this.props;
    const { sideNavClicked } = this.props;

    return(
      <div className='mainBodyItems'>
        <HiddenDrawer show={sideNavBarShowing}/>
        <LocationInfoGenerator suggestedPlaces = {this.state.location}/>
        <Map suggestedPlaces = {this.state.location}/>
       <button onClick={sideNavClicked}>
          {sideNavBarShowing ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}

export default MainContent;
