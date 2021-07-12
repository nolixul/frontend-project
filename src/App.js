import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Review from './components/Review';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/review'>
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
