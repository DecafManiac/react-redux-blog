import React, { Component } from 'react';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import PostsShow from './PostsShow';
import PostsList from './protected/PostsList';
import Dashboard from './protected/Dashboard'
import CreatePost from './protected/CreatePost';
import PostInfo from './protected/PostInfo';
import { logout } from '../helpers/auth';
import { firebaseAuth } from '../config/constants';
import { connect } from 'react-redux';
import { isAuthenticated } from '../actions/index';


function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />}
    />
  )
}

class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount() {
    this.removeListener()
  }
  render() {
    return this.state.loading === true ? <h1>Loading</h1> : (
      <BrowserRouter>
        <div>
         <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">BLOG</a>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
              </li>
                {this.state.authed
                  ? <li className="nav-item">
                    <a onClick={() => {
                        logout();
                        if(this.props.user) {
                          this.props.isAuthenticated(false)
                        }
                      }}
                      className="nav-link">Logout</a></li>
                  : <span style={{display: 'inherit'}}>
                    <li className="nav-item">
                      <Link to="/login" className="nav-link">Login</Link>
                      </li>
                      <li className="nav-item">
                      <Link to="/register" className="nav-link">Register</Link>
                      </li>
                      </span>
                    }
              
            </ul>
            
            </div>
          </nav>
          <div className="container-fluid">
            
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/posts/:id' component={PostsShow} />
                <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                <PublicRoute authed={this.state.authed} path='/register' component={Register} />
                <PrivateRoute authed={this.state.authed} path='/dashboard' component={Dashboard} />
                <PrivateRoute authed={this.state.authed} path='/create/new' component={CreatePost} />
                <PrivateRoute authed={this.state.authed} path='/post' component={PostsList} />
                <PrivateRoute authed={this.state.authed} path='/deleted' component={PostInfo} />
                <PrivateRoute authed={this.state.authed} path='/created' component={PostInfo} />
                <Route render={() => <h3>No Match</h3>} />
              </Switch>
            
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect (mapStateToProps, { isAuthenticated })(App)