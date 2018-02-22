import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.
const Homeheader = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Sign Up</Link></li>
      </ul>
    </nav>
  </header>
)

export default Homeheader;