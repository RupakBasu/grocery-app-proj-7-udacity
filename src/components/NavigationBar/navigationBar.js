import React from 'react';

import MenuButton from './menuButton';

class NavigationBar extends React.Component {
  render() {
    const { sideNavClickHandler } = this.props;
    return(
      <div>
        <div className="navigationBar">
          <div className="navText">
            <div className= "toogleButton">
              <MenuButton click={sideNavClickHandler}/>
            </div>
            <h1 className= "navBarText"> Potential nav bar </h1>
          </div>
        </div>
      </div>
    )
  }
}

export default NavigationBar;
