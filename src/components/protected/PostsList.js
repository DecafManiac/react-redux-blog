import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions/index';
import DashboardNavigation from './DashboardNavigation.js';


class PostsList extends Component {
  constructor(props) {
          super(props)

          this.state = {
              delete: false
          }
         
          this.onDeleteClick = this.onDeleteClick.bind(this)
      }
    componentWillMount() {
        this.props.fetchPosts();
    }
    

    onDeleteClick(id) {
        this.props.deletePost(id)
        .then(() => {
            this.props.history.push('/deleted')
        })
    }
    renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <li key={post._id.$oid} className='list-group-item'>
                    <Link to={`posts/${post._id.$oid}`} >
                        <div>{post.title}</div>
                    </Link>
                    <button onClick={() => alert('In development!')} type="button" className="btn btn-primary btn-sm ml-2">Edit</button>
                    <button onClick={() => this.onDeleteClick(post._id.$oid)} type="button" className="btn btn-danger btn-sm ml-2">Delete</button>
                    <div className='col text-right'>{post.categories}</div>
                </li>
            );
        })
    }

  render() {
    

    return (
      <div className='row'>
        <DashboardNavigation />
        <main className='col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3'>
             <h3>Posts</h3>
                <div className='row mt-4'>
                    <div className='col'><h4>Title</h4></div>
                    <div className='col text-right'><h4>Category</h4></div>
                </div>
                <ul className='list-group'>
                    {this.renderPosts()}
                </ul>
        </main>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.all,
    }
}

export default withRouter(connect(mapStateToProps, { fetchPosts, deletePost }) (PostsList))
