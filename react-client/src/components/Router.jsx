import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TaskList from './TaskList.jsx';
import YelpList from './YelpList.jsx';

const Moving = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" />
      <Route path="/tasks" component={TaskList} />
      <Route path="/services" component={YelpList} />
    </div>
  </Router>
);

export default Moving;