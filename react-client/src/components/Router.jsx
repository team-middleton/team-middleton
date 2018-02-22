import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TaskList from './TaskList.jsx';
import YelpList from './YelpList.jsx';

const Moving = (props) => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/service">Services</Link>
        </li>
        <li>
          <button id="logout" onClick={props.logout}>Log Out</button>
        </li>
      </ul>
      <Route exact path="/" />
      <Route path="/tasks" component={TaskList} />
      <Route path="/service" component={YelpList} />

    </div>
  </Router>
);

export default Moving;