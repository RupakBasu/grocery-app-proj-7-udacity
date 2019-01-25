import React from 'react';

import SideNav from '../NavigationDrawer/sideBar';

// found at: https://www.w3schools.com/howto/howto_css_shapes.asp
// found at: https://www.yourhtmlsource.com/stylesheets/cssspacing.html
// found at: https://facebook.github.io/react-native/docs/layout-props

class MenuButton extends React.Component {
  constructor(props){
    super(props);

  }

  // this.handleClick = this.handleClick.bind(this);
//https://reactjs.org/docs/handling-events.html

  render() {
    console.log(this.props)
    const { sideNavBarShowing } = this.props;
    const { sideNavClicked } = this.props;
    const styles= {
      menu:{
        position:'absolute',
        right: '10px',
        height: '35px',
        width: '35px',
        background:'transparent',
        border:'none',
        marginTop: '2.5px',
        cursor: 'pointer'
      },
      top:{
        position:'relative',
        marginTop: '2.5px',
        marginLeft:'-2px',
        background: 'white',
        height: '5px',
        width:'25px',
      },
      middle :{
        position:'relative',
        marginTop: '5px',
        marginLeft:'-2px',
        background: 'white',
        height: '5px',
        width:'25px',
      },
      bottom :{
        position:'relative',
        marginTop: '5px',
        marginLeft:'-2px',
        marginBottom: '2.5px',
        background: 'white',
        height: '5px',
        width:'25px',
      }
    }
    if (sideNavBarShowing  === true) {
      console.log('menu button is firing')
      return <SideNav/>


    }

    return(
      <div>
        <button onClick={ sideNavClicked} className= "hamburgerContainer" style={styles.menu}>
          <div className= "topHamburger" style={styles.top}>
          </div>
          <div className= "middleHamburger" style={styles.middle}>
          </div>
          <div className= "bottomHamburger" style={styles.bottom}>
          </div>
        </button>
      </div>
    )
  }
}


export default MenuButton;
