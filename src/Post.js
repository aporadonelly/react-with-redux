import React, { Component } from 'react'
import {connect} from 'react-redux'

export class Post extends Component {
    render() {
        console.log(this.props.post)
        const {title, message} = this.props.post;
        return (
            <div className="container">
                {title}
                {message}
                <button onClick={() => this.props.dispatch({type: 'EDIT_POST', id: this.props.post.id})}>Edit</button>
                <button onClick={() => this.props.dispatch({type: 'DELETE_POST', id: this.props.post.id})}>Delete</button>                
            </div>
        )
    }
}

export default connect()(Post)
