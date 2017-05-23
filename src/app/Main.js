import React from 'react';
import { Router, Route, HashRouter, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import Header from './components/Header/Header';

const Main = (props) => {
  return (
    <div>
      <HashRouter>
        <switch>
          <Header />
          <Route exact path='/' component={ Home } />
          <Route path='/work' component={ Work }/>
        </switch>
      </HashRouter>
    </div>
  );
};

export default Main;
