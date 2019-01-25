import React from 'react';

import CloseButton from './closeButton';

class SideNav extends React.Component {
  render() {
    const { sideNavBarShowing } = this.props;
    const { sideNavClicked } = this.props;
    const styles= {
      sideNavigation:{
        position:'fixed',
        // left:'0',
        // top:'0',
        width: '200px',
        height:'100vh',
        // transform:'translate3d(-200vw, 0, 0)',
        // slides it to the left and hides it
        background:'black',
        zIndex: '1'
      },
    }
    return(
      <div>
        <div className= "sideNav" style={styles.sideNavigation}>
          <CloseButton sideNavBarShowing={sideNavBarShowing} sideNavClicked={sideNavClicked}/>
        </div>
      </div>
    )
  }
}

export default SideNav;
