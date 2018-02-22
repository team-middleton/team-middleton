import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TaskList from './TaskList.jsx';
import YelpList from './YelpList.jsx';
import Logout from './Logout.jsx';

// The Main component renders one of the Routes (provided that one matches). 
const Main = () => (
  <main>
    <Switch>
      <Route path='/tasks' component={TaskList}/>
      <Route path='/services' component={YelpList}/>
      <Route path='/logout' component={Logout}/>
    </Switch>
  </main>
)

export default Main;