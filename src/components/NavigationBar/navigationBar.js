import React from 'react';

import MenuButton from './menuButton';
import CloseButton from './closeButton';
import SideNav from '../NavigationDrawer/sideBar';


class NavigationBar extends React.Component {
  render() {
    console.log(this.props)
    const { sideNavBarShowing } = this.props;
    const { sideNavClicked } = this.props;

    return(
      <div>
        <div className="navigationBar">
          <div className="navText">
            <div className= "toogleButton">
              <MenuButton sideNavBarShowing={sideNavBarShowing} sideNavClicked={sideNavClicked}/>
              <CloseButton sideNavBarShowing={sideNavBarShowing} sideNavClicked={sideNavClicked}/>
            </div>
            <h1 className= "navBarText"> Potential nav bar </h1>
          </div>
        </div>
      </div>
    )
  }
}

export default NavigationBar;
