import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Review from './components/Review';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path={`/review/:review_id`}>
          <Review />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
