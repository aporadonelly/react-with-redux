import React, { Component } from 'react'
import {connect} from 'react-redux';  //in order to access redux store w/in react components we use connect(). THis func gives us access to dispatch and when we pass mapsStateToProps, it gives us access to the state. 

export class PostForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        const title = this.getTitle.value
        const message = this.getMessage.value

        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        }
        //once we get the data from the form above, we dispathc the the action using this.props.dispatch passing in the data object with a type of ‘ADD_POST’.
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })
        this.getTitle.value = ""
        this.getMessage.value = ""
    }

    
    render() {
        return (
            <div>
                <h1>Create Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" ref={(input) => this.getTitle = input} placeholder="Enter Post Title" /><br /><br />
                    <textarea required rows="5" cols="28" ref={(input) => this.getMessage = input} placeholder="Enter Post" /><br /><br />
                    <button>Post</button>
                </form>
            </div>
        )
    }
}

export default connect()(PostForm) //This special function provided by the react-redux library gives you access to dispatch whenever you call it wrapping the component-name as an argument to the function that is returned. 
