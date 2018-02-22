import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TaskList from './TaskList.jsx';
import YelpList from './YelpList.jsx';

// The Main component renders one of the Routes (provided that one matches). 
const Main = () => (
  <main>
    <Switch>
      <Route path='/tasks' component={TaskList}/>
      <Route path='/services' component={YelpList}/>
    </Switch>
  </main>
)

export default Main;