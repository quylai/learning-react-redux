

import React, { Component } from "react";  // for using "class...extends..."
import axios from "axios";

class Get extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      errorMsg: ""
    }
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log(response);
        this.setState({posts: response.data}); //
      })
      .catch(error => {
        console.log(error);
        this.setState({errorMsg: "Error retreiving data"});
      })
  }

  render() {
    const { posts, errorMsg } = this.state
    return(
      <div>
        List of posts
        {
          posts.length ?
          posts.map(post => <div key={post.id}>{post.title}</div>) :
          null
        }
        { errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    )
  }
}
export default Get;

/*
- "post.title" is text of each div
- what is "key" reference to?
  "key" is a special string attribute you need to include when creating lists of elements, which allow React to keep track of its DOM if they're changed
*/
