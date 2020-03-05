import React, { Component } from 'react'
import {connect} from 'react-redux'

export class EditComponent extends Component {
    handleSubmit = e => {
        e.preventDefault()
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;

        const data = {
            newTitle,
            newMessage
        }
        this.props.dispatch({type: 'UPDATE', id: this.props.post.id, data:data})
    }
    render() {
        const {title, message} = this.props.post;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref={input => this.getTitle = input} defaultValue={title}/> <br />
                    <textarea required rows="5" cols="28"  ref={input => this.getMessage = input} defaultValue={message}/>
                    <button>Update</button>
                </form>
                
            </div>
        )
    }
}

export default connect()(EditComponent)
