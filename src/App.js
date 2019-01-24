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

    sideNavClicked(){
      const showing = !this.state.sideNavBarShowing;
      this.setState({sideNavBarShowing:showing})
      // this.setState({someField:someValue})
      console.log('menu button clicked')
    }


  render() {
    console.log(this.props)

    return (
      <div className="App">
        <section id="topBanner">
          <TopBanner/>
        </section>
        <section id="navBar">
         <NavigationBar sideNavBarShowing ={this.state.sideNavBarShowing} sideNavClicked={this.sideNavClicked}/>
        </section>
        <SideNav/>
        <Map/>
        <footer id="contact">
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
