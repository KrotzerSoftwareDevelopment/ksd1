import React from 'react';
import '../FilePages/Styles.css';
function Navigation() {
  return (
    <div className="navigation">
      <div className="naviContainer">
      <ul>
      <a href="/HomePage.js"><li>
      Home
      </li> </a> 
      <a href="/About"><li>
      About
      </li></a>
      <a href="/Contact"><li>
      Contact
      </li></a>
      <a href="Consult"> <li>
      Consult
      </li></a>
      <a href="Portfolio"><li>
      Portfolio
      </li></a>
      </ul>
      </div>
      </div>
  );
}

export default Navigation;