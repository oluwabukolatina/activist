import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';

console.log('hello')

function App() {
  return (
    <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
  );
}

export default App;
