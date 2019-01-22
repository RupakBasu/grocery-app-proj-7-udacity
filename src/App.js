import React, { Component } from 'react';

import './App.css';

import TopBanner from './components/TopBanner/topBanner';
import Map from './components/GoogleMap/map';
import NavigationBar from './components/NavigationBar/navigationBar';
import SideNav from './components/NavigationDrawer/sideBar';
import Footer from './components/Footer/footer';

class App extends Component {

    state = {
      sideNavBarShowing:false
    };

    sideDrawerTogglerFunction = () => {
      this.setState((prevState) => {
        return {sideNavBarShowing:!prevState.sideNavBarShowing}
      });
    };


  render() {
    console.log(this.props)
    let sideNav;

    if (this.state.sideNavBarShowing){
      sideNav = <SideNav/>
    }

    return (
      <div className="App">
        <section id="topBanner">
          <TopBanner/>
        </section>
        <section id="navBar">
         <NavigationBar sideNavClickHandler = {this.sideNavBarShowing}/>
        </section>
        {sideNav}
        <Map/>
        <footer id="contact">
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
