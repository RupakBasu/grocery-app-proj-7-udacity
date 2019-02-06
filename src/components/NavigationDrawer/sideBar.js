import React from 'react';

import Suggestions from './suggestedLocations';


class SideNav extends React.Component {
  render() {
    const suggestedPlaces = this.props.suggestedPlaces;

    const styles= {
      sideNavigation:{
        position:'absolute',
        // left:'0',
        // top:'0',
        width: '30%',
        height:'100vh',
        // transform:'translate3d(-200vw, 0, 0)',
        // slides it to the left and hides it
        background:'white',
        zIndex: '1',

      },
      suggestions:{
        color: 'black'
      },
    }
    return(
      <div>
          <div className= "sideNav" style={styles.sideNavigation}>
            <div className= "suggestionList" style={styles.suggestions}>
              <Suggestions suggestedPlaces={suggestedPlaces}/>
            </div>
          </div>
      </div>
    )
  }
}

export default SideNav;
