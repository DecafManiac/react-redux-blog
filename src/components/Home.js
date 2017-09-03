import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router-dom';

class Home extends Component {
  componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
       
         return this.props.posts.map((post) => {
            return (
                <li key={post._id.$oid} className='list-group-item'>
                    <Link to={`posts/${post._id.$oid}`} >
                        <div>{post.title}</div>
                    </Link>
                    <div className='col text-right'>{post.categories}</div>
                     
                </li>
            );
        })
      
    }

    render() {
        return (
            
            <div className='container mt-4'>
                <h3>Posts</h3>
                <div className='row mt-4'>
                    <div className='col'><h4>Title</h4></div>
                    <div className='col text-right'><h4>Category</h4></div>
                </div>
                <ul className='list-group'>
                    {this.renderPosts()}
                   
                </ul>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        posts: state.posts.all,
    }
}

export default connect(mapStateToProps, { fetchPosts })(Home);