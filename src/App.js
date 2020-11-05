import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Spinner from '@components/Global/Spinner';
import { Suspense } from 'react';
import Login from 'app/auth';
import Dashboard from 'app/dashboard';

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Switch>
          <Route exact path={`/`}>
            <Login />
          </Route>
          <Route>
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
