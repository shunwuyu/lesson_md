import React from 'react'
import Comment from './Comment'

const CommentList = ({comments}) => {
    // const comments = [
    //     {username: 'Jerry', content: 'Hello'},
    //     {username: 'Tomy', content: 'World'},
    //     {username: 'Lucy', content: 'Good'}
    // ]

    return (
        // <div>CommentList</div>
        // <div>{comments.map((comment, i) => {
        //     return (
        //         <div key={i}>
        //         {comment.username}：{comment.content}
        //         </div>
        //     )
        // })}</div>
        <div>
            {comments.map((comment, i) => <Comment comment={comment} key={i} />)}
        </div>
    )
}

export default CommentList