import React, { useState } from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
    background-color: #fff;
    border: 1px solid #f1f1f1;
    padding: 20px;
    margin-bottom: 10px;
    .comment-field {
        margin-bottom: 15px;
        display: flex;
        .comment-field-name {
            display: flex;
            flex-basis: 100px;
            font-size: 14px;
        }
        .comment-field-input {
            display: flex;
            flex: 1;
            input, textarea {
                border: 1px solid #e6e6e6;
                border-radius: 3px;
                padding: 5px;
                outline: none;
                font-size: 14px;
                resize: none;
                flex: 1;
            }
            textarea {
                height: 100px;
            }
        }
    }
    .comment-field-button {
        display: flex;
        justify-content: flex-end;
        button {
            padding: 5px 10px;
            width: 80px;
            border: none;
            border-radius: 3px;
            background-color: #00a3cf;
            color: #fff;
            outline: none;
            cursor: pointer;
            &:active {
                background: #13c1f1;
            }
        }

    }

`

// const CommentInput = () => {
//     return (
//         <div>CommentInput</div>
//     )
// }
const CommentInput = (props) => {

    const [username, setUsername] = useState('')
    const [content, setContent] = useState('')
    const  handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }
    const  handleContentChange = (event) => {
        setContent(event.target.value)
    }
    const handleSubmit = () => {
        if (props.onSubmit) {
            props.onSubmit({username, content})
        }
        setContent('')
    }
    return (
        <InputWrapper>
            <div className='comment-field'>
                <span className='comment-field-name'>用户名：</span>
                <div className='comment-field-input'>
                    <input value={username} 
                    onChange={handleUsernameChange}/>
                </div>
            </div>
            <div className='comment-field'>
                <span className='comment-field-name'>评论内容：</span>
                <div className='comment-field-input'>
                    <textarea value={content}
                        onChange={handleContentChange}
                    />
                </div>
            </div>
            <div className='comment-field-button'>
                <button onClick={handleSubmit}>
                    发布
                </button>
            </div>
        </InputWrapper>
    )
}

export default CommentInput