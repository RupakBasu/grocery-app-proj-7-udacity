import React from 'react';

import MenuButton from '../NavigationBar/menuButton';

class CloseButton extends React.Component {


  render() {
    const { sideNavBarShowing } = this.props;
    const { sideNavClicked } = this.props;
    const styles= {
      closebtn:{
        position:'absolute',
        right: '10px',
        height: '35px',
        width: '35px',
        background:'transparent',
        border:'none',
        marginTop: '2.5px',
        cursor: 'pointer'
      },
      right:{
        position:'relative',
        marginTop: '2.5px',
        marginLeft:'-2px',
        background: 'white',
        height: '5px',
        width:'25px',
        transform: 'rotate(45deg)',
        alignItems: 'center'
        // translateY:'(-200px)',
        // translateX:'(500px)'
      },
      left :{
        position:'relative',
        marginTop: '5px',
        marginLeft:'-2px',
        marginBottom: '2.5px',
        background: 'red',
        height: '5px',
        width:'25px',
        transform: 'rotate(-45deg)',
        alignItems: 'center'
        // translateY:'(-20px)',
        // translateX:'(5px)'
      }
    }

    // // this is the function which is running my hamburger button
    // // <SideNav/> needs to slide open
    if (sideNavBarShowing  === false) {
      console.log('close button is firing')
      return <MenuButton/>

    }
    return(
      <div>
        <button onClick={ sideNavClicked} className= "hamburgerContainer" style={styles.closebtn}>
          <div className= "rightClose" style={styles.right}>
          </div>
          <div className= "leftClose" style={styles.left}>
          </div>
        </button>
      </div>
    )
  }
}


export default CloseButton;
