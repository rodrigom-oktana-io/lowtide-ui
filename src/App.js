import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import Login from './routes/login';
import Deploy from './routes/deploy';
import Timeshift from './routes/timeshift';
import Jobs from './routes/jobs';
import { FilterContextProvider } from './context/FilterContext';
import { SessionContext } from './context/SessionContext';

const App = () => {
  const { isLoggedIn } = useContext(SessionContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/deploy" /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          {isLoggedIn ? <Redirect to="/deploy" /> : <Login />}
        </Route>
        <Route path="/deploy">
          {isLoggedIn ? (
            <FilterContextProvider>
              <Deploy />
            </FilterContextProvider>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/timeshift">
          {isLoggedIn ? <Timeshift /> : <Redirect to="/login" />}
        </Route>
        <Route path="/jobs">
          {isLoggedIn ? <Jobs /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
