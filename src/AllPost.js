import React, { Component } from 'react';
import {connect} from 'react-redux'
import Post from './Post';
import EditComponent from './EditComponent'

class AllPost extends Component {
  render() {
    return (
    <div>
      <h1>All Posts</h1>
      
      {this.props.posts.map(post => 
          <div key={post.id}>
              {post.editing ? <EditComponent post={post} key={post.id}/> : <Post key={post.id} post={post}/>}
          </div>
      )}
    </div>
    );
   }
}

const MapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(MapStateToProps)(AllPost); //mapStateToProps is a func that takes in the state of the app as a parameters and returns an object with keys of that object becoming the props of the components so that when we use this.props.post we get back the state we need. 