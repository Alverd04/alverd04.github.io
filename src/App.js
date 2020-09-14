import React from 'react';
import './App.scss';
import Navbar from './components/navBar'
import Welcome from './components/Welcome'
import Gallery from './components/gallery'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Gallery />
    </div>
  );
}

export default App;
