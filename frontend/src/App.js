// CargoChain/frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Cargo from './components/Cargo';
import Dispute from './components/Dispute';
import './styles/cargo.css';
import './styles/dispute.css';
import './styles/home.css';
import './styles/bootstrap-switch.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cargo/:id" component={Cargo} />
        <Route path="/dispute/:id" component={Dispute} />
      </Switch>
    </Router>
  );
}

export default App;
