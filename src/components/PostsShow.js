import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost} from '../actions/index';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class PostsShow extends Component {
     constructor(props) {
        super(props)

        this.state = {
            redirect: false
        }
    }
    componentWillMount() {
        this.props.fetchPost(this.props.match.params.id)
    }

    onDeleteClick() {
        this.props.deletePost(this.props.match.params.id)
        .then(() => this.setState({ redirect: true }))
    }


    render() {

        if(!this.props.post) {
            return <div>Loading...</div>
        }
        if(this.state.redirect) {
            return <Redirect to='/'/>
        }

        return (

            <div className='blog-post container'>
                <h3>{this.props.post.title}</h3>
                <h6>Categories: {this.props.post.categories}</h6>
                <p>{this.props.post.content}</p>
                <Link to='/'><button className='btn btn-primary'>Back</button></Link>
                { this.props.user
                ? <button className='btn btn-danger' onClick={this.onDeleteClick.bind(this)}>Delete</button> 
               : null }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.posts.post,
        user: state.user
    }
}

export default connect(mapStateToProps, { fetchPost }) (PostsShow)