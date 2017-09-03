import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import { createPost } from '../../actions/index';
import { connect } from 'react-redux'
import DashboardNavigation from './DashboardNavigation.js';

class CreatePost extends Component {

  onSubmit(data) {
        this.props.createPost(data)
        .then(this.props.history.push('/created'))
    }

  render () {
    const { handleSubmit } = this.props;

    return (
      <div className='row'>
          
            <DashboardNavigation />
            <main className='col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3'>
                <h1>Dashboard</h1>
                
                <form className='' onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <h3>Create a new post</h3>

                        <Field name='title' component={renderField} type='text'  label='Title' />
            
                        <Field name='categories' component={renderField} type='text'  label='Categories'/>

                        <Field name='content' component={renderField} type='text' label='Content' textarea={true}/>
            
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <Link to='/dashboard' className='btn btn-danger'>Cancel</Link>
                </form>
                
            </main>
          
      </div>
    )
  }
}

function validate(values) {
    const errors = {};

    if(!values.title) {
        errors.title='Enter a title';
    }
    if(!values.categories) {
        errors.categories='Enter a category';
    }
    if(!values.content) {
        errors.content='Enter a content';
    }
    
    return errors;
}

const renderField = ({ input, label, type, textarea, meta: { touched, error, warning, invalid } }) => {
    const textareaType = <textarea {...input} placeholder={label}  type={type} className={`form-control ${touched && invalid ? 'form-control-danger' : ''}`}/>;
    const inputType = <input {...input} placeholder={label}  type={type} className={`form-control ${touched && invalid ? 'form-control-danger' : ''}`}/>;

    return (
        <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
            <label>{label}</label>
            <div>
                {textarea ? textareaType : inputType}
                {touched && ((error && <div className="form-control-feedback">{error}</div>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    );
};

const postNewPost = reduxForm({
     form: 'PostNewForm',
     fields: ['title', 'categories', 'content'],
     validate
})(CreatePost);


export default withRouter(connect(null, { createPost })(postNewPost))