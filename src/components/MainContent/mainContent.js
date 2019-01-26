import React from 'react';

import Map from '../GoogleMap/map';
import SideNav from '../NavigationDrawer/sideBar';


class MainContent extends React.Component {
  render() {
    console.log(this.props)
    const { sideNavBarShowing } = this.props;
    const { sideNavClicked } = this.props;

    return(
      <div className='mainBodyItems'>
        <SideNav sideNavBarShowing ={sideNavBarShowing} sideNavClicked={this.sideNavClicked}/>
        <Map/>
      </div>
    )
  }
}

export default MainContent;
