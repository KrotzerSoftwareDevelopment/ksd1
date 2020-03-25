import React from 'react';
import Navigation from './FilePages/Navigation.js';
import Footer from './FilePages/Footer.js';
import './FilePages/Styles.css';
import Homepage from './FilePages/HomePage.js';
function App() {
  return (
    <div className="App">
    <Navigation />
    <Homepage />
    <Footer />
    </div>
  );
}

export default App;
