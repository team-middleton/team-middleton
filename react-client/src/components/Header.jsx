import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.
const Header = (props) => (
  <header>
    <nav>
      <ul>
        <li><Link to='/tasks'>Todos</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li onClick={props.logout}>Logout</li>
      </ul>
    </nav>
  </header>
)

export default Header