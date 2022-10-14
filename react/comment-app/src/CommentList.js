import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }
  render() {
    // const comments = [
    //   {username: 'Jerry', content: 'Hello'},
    //   {username: 'Tomy', content: 'World'},
    //   {username: 'Lucy', content: 'Good'}
    // ]
    return (
   
      <div>
        {/* {comments.map((comment, i) => <Comment comment={comment} key={i} />)} */}
        {this.props.comments.map((comment, i) =>
          <Comment comment={comment} key={i} />
        )}
      </div>
    )
  }
}

export default CommentList