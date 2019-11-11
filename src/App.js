import React from 'react';
import './App.css';

import Navibar from "./components/Navibar";
import ProfileBar from './components/ProfileBar';
import Signup from './components/Signup';
import Login from './components/Login';

var Splash = ()=> { return null; }
var Home = ()=> { return null; }


function App() {
  return (
    <div className="App">
      <Splash />
      <ProfileBar />
      <Navibar />
      <Login />
      <Signup />
      <Home />
    </div>
  );
}

export default App;
