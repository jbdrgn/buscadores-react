import React, { Component } from 'react';
import './App.css';
//import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Videos from './pages/Videos/AllVideos';
import Tu_Nombre from './pages/Your_Name';
// import { UPLOAD } from './constants/GeneralConstants';
// import Signin from './pages/SignIn/signin';
import { trimLine, asParameter, asPath } from './utils';
import { API, CHANNELS, CONTACT, ID, ROOT, NAME, THEME, VIDEOS } from './constants/GeneralConstants';
import Contact from './pages/Contact';
import Json from './pages/Api';
import VideoDetail from './pages/Videos/DetailVideo';
import ChannelDetail from './pages/Channels/DetailChannel';

class App extends Component {

  render() {

    return (
      <Router>
        <Switch>
          <Route path={ROOT} component={Home} exact />
          {/* <Route path={asPath(trimLine(SIGN_IN))} component={Signin} exact /> */}
          <Route path={asPath(trimLine(CONTACT))} component={Contact} exact />
          {/*<Route path={asPath(trimLine(VIDEOS))} component={Videos} exact /> */}
          <Route path={asPath(trimLine(NAME))} component={Tu_Nombre} exact />

          <Route path={asParameter(THEME) + asPath(trimLine(API))} component={Json} exact /> {/* /:theme/api -> /channels/api || /videos/api*/}
          {/*<Route path={asPath(trimLine(VIDEOS)) + asParameter(ID)} component={VideoDetail} exact /> {/* /:theme/:id -> /videos/video._id */}
          <Route path={asPath(trimLine(CHANNELS)) + asParameter(ID)} component={ChannelDetail} exact /> {/* /:theme/:id -> /channel/channel._id */}

          <Route path="*" component={Home} />
        </Switch>
        {/* <Home/> */}
      </Router>
    );
  }
}

export default App;
