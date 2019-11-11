import React from 'react';
import './App.css';
import Navibar from "./components/Navibar";

var Splash = ()=> { return null; }
var ProfileBar = ()=> { return null; }
var Navbar = ()=> { return null; }
var Login = ()=> { return null; }
var Signup = ()=> { return null; }
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
