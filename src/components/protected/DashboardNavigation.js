import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';
import './dashboard.css'


export default class DashboardNavigation extends Component {

  render () {
    return (
      <nav className='col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar'>
       <ul className="nav nav-pills flex-column">
            <li className="nav-item"><NavLink className='nav-link' to="/dashboard" activeClassName="active" >Dashboard</NavLink></li>
            <li className="nav-item"><NavLink className='nav-link' activeClassName="active"  to='/post'>Posts</NavLink></li>
            <li className="nav-item"><NavLink className='nav-link' activeClassName="active"  to='/create/new'>Create post</NavLink></li>
       </ul>
      </nav>
    )
  }
}

