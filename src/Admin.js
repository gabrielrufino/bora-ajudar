import React, { Component } from 'react'
import {
  Link,
  Route,
  Redirect 
} from 'react-router-dom'

import { auth } from './base'
import AdminHome from './AdminHome'
import AdminCampaigns from './AdminCampaigns'

class Admin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isAuthing: true,
      isLoggedIn: false,
      user: null
    }
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      console.log('auth', user)
      this.setState({
        isAuthing: false,
        isLoggedIn: !!user,
        user: user
      })
    })
  }
  render() {
    if (this.state.isAuthing) {
      return <p>Verificando...</p>
    }
    if (!this.state.isLoggedIn) {
      return <Redirect to='/login' />
    }
    return (
      <div className='container'>
        <div className='bg-faded m-5 p-5 rounded'>
          <h1 className='text-center'>Painel Administrativo</h1>
          <div className='row my-4'>
            <div className='col-3'>
              <ul className='list-group'>
                <Link to='/admin'>
                  <li className='list-group-item'>Overview</li>
                </Link>
                <Link to='/admin/campanhas'>
                  <li className='list-group-item'>Campanhas</li>
                </Link>
                <Link to='/'>
                  <li className='list-group-item'>Sair</li>
                </Link>
              </ul>
            </div>
            <div className='col-8'>
              <Route path={this.props.match.url} exact component={AdminHome} />
              <Route path={`${this.props.match.url}/campanhas`} component={AdminCampaigns} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Admin
