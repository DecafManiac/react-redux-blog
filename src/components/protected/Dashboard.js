import React, { Component } from 'react'
import DashboardNavigation from './DashboardNavigation';

export default class Dashboard extends Component {

  render() {
    return (
      <div className='row'>
        <DashboardNavigation />
        <main className='col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3'>
            <h1>Welcome to your Dashboard!</h1>
        </main>
      </div>
    )
  }
}

