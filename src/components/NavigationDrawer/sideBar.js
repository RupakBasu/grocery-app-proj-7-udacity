import React from 'react';

import Suggestions from './suggestedLocations';


class SideNav extends React.Component {
  render() {

    const styles= {
      sideNavigation:{
        position:'absolute',
        // left:'0',
        // top:'0',
        width: '30%',
        height:'100vh',
        // transform:'translate3d(-200vw, 0, 0)',
        // slides it to the left and hides it
        background:'black',
        zIndex: '1',

      },
      suggestions:{
        color: 'white'
      },
    }
    return(
      <div>
          <div className= "sideNav" style={styles.sideNavigation}>
            <div className= "suggestionList" style={styles.suggestions}>
              <Suggestions/>
            </div>
          </div>
      </div>
    )
  }
}

export default SideNav;
