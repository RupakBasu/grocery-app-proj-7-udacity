import React from 'react';

import SideNav from "./sideBar";

// found at: https://www.w3schools.com/howto/howto_css_shapes.asp
// found at: https://www.yourhtmlsource.com/stylesheets/cssspacing.html
// found at: https://facebook.github.io/react-native/docs/layout-props

class MenuButton extends React.Component {
  constructor(){
    super();
    this.state = {
      sideNavBarShowing :false,
    };
  }

  render() {
    const styles= {
      menu:{
        position:'absolute',
        right: '10px',
        height: '35px',
        width: '35px',
        background:'#555',
        marginTop: '2.5px',
      },
      top:{
        position:'relative',
        marginTop: '5px',
        marginLeft:'5px',
        background: 'white',
        height: '5px',
        width:'25px',
      },
      middle :{
        position:'relative',
        marginTop: '5px',
        marginLeft:'5px',
        background: 'white',
        height: '5px',
        width:'25px',
      },
      bottom :{
        position:'relative',
        marginTop: '5px',
        marginLeft:'5px',
        background: 'white',
        height: '5px',
        width:'25px',
      }
    }

    // this is the function which is running my hamburger button
    // <SideNav/> needs to slide open
    if (this.state.sideNavBarShowing === true) {
      console.log('button is firing')
      return <SideNav/>
    }

    return(
      <div>
        <div onClick={() => this.setState({ sideNavBarShowing : true })} className= "hamburgerContainer" style={styles.menu}>
          <div className= "topHamburger" style={styles.top}>
          </div>
          <div className= "middleHamburger" style={styles.middle}>
          </div>
          <div className= "bottomHamburger" style={styles.bottom}>
          </div>
        </div>
      </div>
    )
  }
}


export default MenuButton;
