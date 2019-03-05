import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from './components/Header'
import Home from './views/Home'
import About from './views/About'
import Campaigns from './Campaigns'
import Contact from './views/Contact'
import Login from './Login'
import Admin from './Admin'
import NotFound from './views/NotFound'
import Footer from './components/Footer'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/sobre' component={About} />
            <Route path='/campanhas' component={Campaigns} />
            <Route path='/contato' component={Contact} />
            <Route path='/admin' component={Admin} />
            <Route path='/login' component={Login} />
            <Route component={NotFound} />
          </Switch>

          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
