import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import About from './About'
import Campaigns from './Campaigns'
import Contact from './Contact'
import Login from './Login'
import Admin from './Admin'
import Footer from './Footer'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />

          <Route path='/' exact component={Home} />
          <Route path='/sobre' component={About} />
          <Route path='/campanhas' component={Campaigns} />
          <Route path='/contato' component={Contact} />
          <Route path='/admin' component={Admin} />
          <Route path='/login' component={Login} />

          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
