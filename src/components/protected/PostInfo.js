import React from 'react';
import { Link } from 'react-router-dom'

export default class PostInfo extends React.Component {
    render() {
        return (
            <div>
                {console.log(this.props.authed)}
                <p>Success!! {this.props.message}</p>
                <Link to='/post'><button className='btn btn-primary'>Back</button></Link>
            </div>
        )
    }
}