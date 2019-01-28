import React, { Component } from 'react';

import './App.css';

import TopBanner from './components/TopBanner/topBanner';
import MainContent from './components/MainContent/mainContent';
import NavigationBar from './components/NavigationBar/navigationBar';
import Footer from './components/Footer/footer';

function HiddenDrawer(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className="sideNav">
    </div>
  );
}
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      sideNavBarShowing:false
    };
    this.sideNavClicked = this.sideNavClicked.bind(this);
  }
    sideNavClicked(){
      this.setState(prevState => ({
        sideNavBarShowing: !prevState.sideNavBarShowing
       }));
      console.log('menu button clicked but side drawer is hidden')
    }

  render() {
    console.log(this.props)

    return (
      <div className="App">
        <HiddenDrawer show={this.state.sideNavBarShowing} />
        <button onClick={this.sideNavClicked}>
          {this.state.sideNavBarShowing ? 'Hide' : 'Show'}
        </button>
        <section id="topBanner">
          <TopBanner/>
        </section>
        <section id="navBar">
         <NavigationBar sideNavBarShowing ={this.state.sideNavBarShowing} sideNavClicked={this.sideNavClicked}/>
        </section>
        <section id="mainContentArea">
          <MainContent sideNavBarShowing ={this.state.sideNavBarShowing} sideNavClicked={this.sideNavClicked}/>
        </section>
        <footer id="contact">
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
