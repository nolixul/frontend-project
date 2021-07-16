import './App.css';
import { Switch, Route } from 'react-router-dom';

import UserContext from './contexts/User';
import Header from './components/Header';
import Review from './components/Review';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    username: 'jessjelly',
    name: 'Jess Jelly',
    avatar_url:
      'https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg'
  });

  return (
    <div className='App'>
      <UserContext.Provider value={user}>
        <Header />
        <Switch>
          <Route exact path={`/review/:review_id`}>
            <Review />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
