import React from 'react';

import MenuButton from '../NavigationBar/menuButton';

class CloseButton extends React.Component {

  // state = {
  //   sideNavBarShowing:true
  // };
  render() {
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
      },
      // m :{
      //   position:'relative',
      //   marginTop: '5px',
      //   marginLeft:'-2px',
      //   background: 'white',
      //   height: '5px',
      //   width:'25px',
      // },
      left :{
        position:'relative',
        marginTop: '5px',
        marginLeft:'-2px',
        marginBottom: '2.5px',
        background: 'red',
        height: '5px',
        width:'25px',
      }
    }

    // // this is the function which is running my hamburger button
    // // <SideNav/> needs to slide open
    // if (this.state.sideNavBarShowing === true) {
    //   console.log('close button is firing')
    //   return <MenuButton/>
    //
    // }
    return(
      <div>
        <button onClick={() => this.setState({ sideNavBarShowing : false })} className= "hamburgerContainer" style={styles.closebtn}>
          <div className= "rightClose" style={styles.right}>
          </div>
          <div className= "close" style={styles.m}>
          </div>
          <div className= "leftClose" style={styles.left}>
          </div>
        </button>
      </div>
    )
  }
}


export default CloseButton;
