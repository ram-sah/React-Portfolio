import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import Code from './containers/Code'
import App from './containers/App'
import Home from './containers/Home'
import Contact from './containers/Contact'
// import Animate from './Animate'

export default (
    <Router history={hashHistory}>
      
      <Route path='/' component={App}>
      {/* <Animate /> */}
        {/* <IndexRoute component={Animate}/> */}
        <IndexRoute component={Home}/>
        <Route path='/code' component={Code} />
        <Route path='/contact' component={Contact} />
      </Route>
    </Router>

);