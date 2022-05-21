import React from 'react'

const Comment = (props) => {
    const { username, content } = props.comment;
    return (
        <div className='comment'>
            <div className='comment-user'>
                <span>{username} </span>：
            </div>
            <p>{content}</p>
        </div>
    )
}

export default Comment