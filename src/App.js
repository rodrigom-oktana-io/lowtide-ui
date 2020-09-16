import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import Deploy from './routes/deploy';
import Timeshift from './routes/timeshift';
import Jobs from './routes/jobs';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/deploy" />
        </Route>
        <Route path="/deploy">
          <Deploy />
        </Route>
        <Route path="/timeshift">
          <Timeshift />
        </Route>
        <Route path="/jobs">
          <Jobs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
