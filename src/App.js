import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Activists from './components/activists/Activists';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/activists" component={Activists} />
    </Switch>
  );
}

export default App;
