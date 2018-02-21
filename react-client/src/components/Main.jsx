import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TaskList from './TaskList.jsx';
import YelpList from './YelpList.jsx';

// The Main component renders one of the Routes (provided that one matches). 
const Main = () => (
  <main>
    <Switch>
<<<<<<< HEAD
      <Route path='/tasks' component={TaskList}/>
      <Route path='/services' component={YelpList}/>
=======
      <Route path='/task' component={Task}/>
      <Route path='/yelpServices' component={YelpList}/>
>>>>>>> small changes
    </Switch>
  </main>
)

export default Main;