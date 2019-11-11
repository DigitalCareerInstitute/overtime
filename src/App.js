import React from 'react';
//import './App.css';
import ProfileBar from './components/ProfileBar'; 

var Splash = ()=> { return null; }
var Navbar = ()=> { return null; }
var Login = ()=> { return null; }
var Signup = ()=> { return null; }
var Home = ()=> { return null; }

function App() {
  return (
    <div className="App">
      <Splash />
      <ProfileBar />
      <Navbar />
      <Login />
      <Signup />
      <Home />
    </div>
  );
}

export default App;
