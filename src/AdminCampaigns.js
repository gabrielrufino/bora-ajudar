import React, { Component } from 'react'

import base from './base'
import NewCampaign from './NewCampaign'

class AdminCampaigns extends Component {
  constructor(props) {
    super(props)

    this.state = {
      campaigns: {}
    }
    
    this.removeCampaign = this.removeCampaign.bind(this)
    this.renderCampaign = this.renderCampaign.bind(this)
  }
  componentDidMount() {
    base
      .syncState('campaigns', {
        context: this,
        state: 'campaigns',
        asArray: false
      })
  }
  removeCampaign(key) {
    base
      .remove(`campaigns/${key}`, err => {
        console.log(err)
      })
  }
  renderCampaign(key, campaign) {
    return (
      <div key={key} className='col-6'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title text-center'>{ campaign.name }</h5>
            <p>{ campaign.description }</p>
            <button className='btn btn-primary btn-sm mr-1'>Editar</button>
            <button className='btn btn-danger btn-sm ml-1' onClick={() => this.removeCampaign(key)}>Remover</button>
          </div>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div>
        <h2 className='text-center'>Campanhas</h2>
        <div className='row'>
          {
            Object
              .keys(this.state.campaigns)
              .map(key => this.renderCampaign(key, this.state.campaigns[key]))
          }
        </div>
        <NewCampaign />
      </div>
    )
  }
}

export default AdminCampaigns
