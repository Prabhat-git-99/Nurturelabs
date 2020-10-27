import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Footer from './shared/pages/Footer';

import './App.css';
import Discuss from './Pages/Discuss';
import Dashboard from './Pages/Dashboard';
import FindExperts from './Pages/FindExperts';
import Header from './Shared/Components/Header/NavBar';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <main className='main_start'>
          <Route exact path = '/'  component = {FindExperts} />
          <Route exact path = '/dashboard'  component = {Dashboard} />
          <Route exact path = '/discuss'  component = {Discuss} />
          {/* <Route component = {Error} /> */}
          </main>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App;
