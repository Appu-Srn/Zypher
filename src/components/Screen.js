import React, { Component } from 'react'
import axios from 'axios';

class Post extends Component {
  state = {
    post: null
  }

//lifecycle hooks to load data
componentDidMount(){
    let id = this.props.match.params.post_id;
    console.log(id)
    axios.get('https://react-lne1nm.stackblitz.io/details/' +id)//link not working due to cors headers policy
      .then(res => {
        console.log(res)
        this.setState({
          post: res.data.hits
        });
        // console.log(res.data.hits);
      });
  }





  render() {
    const post = this.state.post ? (
        <div className="post">
          <h4 className="center">{this.state.post.title}</h4>
          <p>{this.state.post.body}</p>
        </div>
      ) : (
        <div className="center">Loading post...</div>
      );



    return (
      <div className="container">
        <h4>{post}</h4>
        <h1>hai</h1>
      </div>
    )
  }
}

export default Post